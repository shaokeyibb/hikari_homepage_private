<template>
  <div class="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
    <!-- Base void gradient -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#1a1546_0%,#0a0820_45%,#030209_100%)]" />

    <!-- Aurora / nebula blobs with subtle parallax -->
    <div
      class="absolute -top-40 -left-32 h-[46rem] w-[46rem] rounded-full opacity-60 blur-[120px] animate-float"
      :style="parallax(0.6, 'radial-gradient(circle, rgba(124,92,255,0.55), transparent 65%)')"
    />
    <div
      class="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full opacity-50 blur-[120px] animate-float [animation-delay:-3s]"
      :style="parallax(1.1, 'radial-gradient(circle, rgba(53,231,255,0.4), transparent 65%)')"
    />
    <div
      class="absolute -bottom-48 left-1/4 h-[42rem] w-[42rem] rounded-full opacity-40 blur-[130px] animate-float [animation-delay:-6s]"
      :style="parallax(0.85, 'radial-gradient(circle, rgba(255,92,200,0.35), transparent 65%)')"
    />

    <!-- Faint orbital rings -->
    <div
      class="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-drift-slow"
    />
    <div
      class="absolute left-1/2 top-1/2 h-[78vmin] w-[78vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
    />

    <!-- Vignette to focus the center -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,2,9,0.85)_100%)]" />
  </div>
</template>

<script setup lang="ts">
import { useMouse, usePreferredReducedMotion, useWindowSize } from "@vueuse/core";

const reducedMotion = usePreferredReducedMotion();
const reduced = computed(() => reducedMotion.value === "reduce");
const { x, y } = useMouse({ touch: false });
const { width, height } = useWindowSize();

const offset = computed(() => {
  if (reduced.value || !width.value || !height.value) return { dx: 0, dy: 0 };
  return {
    dx: (x.value / width.value - 0.5) * 2,
    dy: (y.value / height.value - 0.5) * 2,
  };
});

function parallax(strength: number, background: string) {
  const tx = offset.value.dx * strength * 22;
  const ty = offset.value.dy * strength * 22;
  return {
    background,
    transform: `translate3d(${tx}px, ${ty}px, 0)`,
    transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  };
}
</script>
