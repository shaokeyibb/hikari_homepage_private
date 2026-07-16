<template>
  <canvas
    ref="canvas"
    class="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from "@vueuse/core";

type Star = {
  x: number;
  y: number;
  r: number;
  /** parallax depth 0.2 (far) .. 1 (near) */
  depth: number;
  /** twinkle phase */
  phase: number;
  speed: number;
};

type ShootingStar = {
  x: number;
  y: number;
  len: number;
  angle: number;
  speed: number;
  life: number;
  ttl: number;
};

const canvas = ref<HTMLCanvasElement | null>(null);
const reducedMotion = usePreferredReducedMotion();
const reduced = computed(() => reducedMotion.value === "reduce");

let ctx: CanvasRenderingContext2D | null = null;
let raf = 0;
let stars: Star[] = [];
let shooting: ShootingStar[] = [];
let width = 0;
let height = 0;
let dpr = 1;
let t = 0;
let nextShootAt = 0;

const STAR_COLORS = ["#f7f8ff", "#cfe6ff", "#e7d6ff", "#ffe9c2"];

function seedStars() {
  const density = Math.min(1, (width * height) / (1920 * 1080));
  const count = Math.round(220 * density) + 60;
  stars = Array.from({ length: count }, () => {
    const depth = 0.2 + Math.random() * 0.8;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.1 + 0.3) * depth * 1.6,
      depth,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.2,
    } satisfies Star;
  });
}

function resize() {
  if (!canvas.value) return;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.value.width = Math.floor(width * dpr);
  canvas.value.height = Math.floor(height * dpr);
  canvas.value.style.width = `${width}px`;
  canvas.value.style.height = `${height}px`;
  ctx = canvas.value.getContext("2d");
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
  seedStars();
}

function spawnShootingStar() {
  const fromLeft = Math.random() > 0.5;
  shooting.push({
    x: fromLeft ? -40 : width + 40,
    y: Math.random() * height * 0.5,
    len: 120 + Math.random() * 160,
    angle: (fromLeft ? 0.28 : Math.PI - 0.28) + (Math.random() - 0.5) * 0.1,
    speed: 8 + Math.random() * 6,
    life: 0,
    ttl: 60 + Math.random() * 30,
  });
}

function drawFrame() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  t += 1;

  // Stars
  for (const s of stars) {
    const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(t * 0.01 * s.speed + s.phase));
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = STAR_COLORS[Math.floor(s.phase) % STAR_COLORS.length];
    ctx.globalAlpha = twinkle * s.depth;
    ctx.fill();

    // slow upward drift, wrap around
    s.y -= 0.02 * s.depth;
    if (s.y < -2) {
      s.y = height + 2;
      s.x = Math.random() * width;
    }
  }
  ctx.globalAlpha = 1;

  // Shooting stars
  if (t > nextShootAt) {
    spawnShootingStar();
    nextShootAt = t + 260 + Math.random() * 420;
  }
  shooting = shooting.filter((sh) => sh.life < sh.ttl);
  for (const sh of shooting) {
    sh.life += 1;
    sh.x += Math.cos(sh.angle) * sh.speed;
    sh.y += Math.sin(sh.angle) * sh.speed;
    const tailX = sh.x - Math.cos(sh.angle) * sh.len;
    const tailY = sh.y - Math.sin(sh.angle) * sh.len;
    const fade = 1 - sh.life / sh.ttl;
    const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
    grad.addColorStop(0, `rgba(247,248,255,${0.9 * fade})`);
    grad.addColorStop(1, "rgba(53,231,255,0)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sh.x, sh.y);
    ctx.lineTo(tailX, tailY);
    ctx.stroke();
  }

  raf = requestAnimationFrame(drawFrame);
}

function renderStatic() {
  // Single static frame for reduced-motion users.
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  for (const s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = STAR_COLORS[Math.floor(s.phase) % STAR_COLORS.length];
    ctx.globalAlpha = 0.7 * s.depth;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function start() {
  cancelAnimationFrame(raf);
  if (reduced.value) {
    renderStatic();
  } else {
    raf = requestAnimationFrame(drawFrame);
  }
}

watch(reduced, () => {
  resize();
  start();
});

onMounted(() => {
  resize();
  start();
  window.addEventListener("resize", handleResize, { passive: true });
});

let resizeTimer = 0;
function handleResize() {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    resize();
    start();
  }, 150);
}

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener("resize", handleResize);
  window.clearTimeout(resizeTimer);
});
</script>
