<template>
  <div class="relative grid place-items-center">
    <!-- Outer glow halo -->
    <div
      class="absolute h-[15rem] w-[15rem] rounded-full opacity-70 blur-2xl animate-halo bg-[conic-gradient(from_0deg,#35e7ff,#7c5cff,#ff5cc8,#ffcf6b,#35e7ff)]"
    />
    <!-- Rotating ring -->
    <div
      class="absolute h-[13.5rem] w-[13.5rem] rounded-full border border-white/20 [mask-image:linear-gradient(transparent,white,transparent)] animate-drift-slow"
    />
    <!-- Avatar -->
    <div
      class="relative h-44 w-44 overflow-hidden rounded-full border border-white/25 shadow-[0_0_60px_-10px_rgba(124,92,255,0.8)] backdrop-blur-sm"
    >
      <img
        :src="src"
        :alt="alt"
        width="176"
        height="176"
        loading="eager"
        decoding="async"
        class="h-full w-full object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>
