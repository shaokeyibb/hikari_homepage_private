<template>
  <nav aria-label="社交链接" class="flex flex-wrap items-center justify-center gap-3">
    <a
      v-for="(link, i) in links"
      :key="link.name"
      :href="link.url"
      :target="link.url.startsWith('mailto:') ? undefined : '_blank'"
      rel="noopener noreferrer"
      class="group stagger relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-star-dim backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_40px_-10px_rgba(53,231,255,0.6)]"
      :style="{ animationDelay: `${0.6 + i * 0.06}s` }"
    >
      <span
        class="absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60 bg-[linear-gradient(100deg,#35e7ff,#7c5cff,#ff5cc8)]"
      />
      <Icon
        v-if="link.icon"
        :name="link.icon"
        class="text-base transition-transform duration-300 group-hover:scale-110"
      />
      <span
        v-else
        class="grid h-4 w-4 place-items-center text-[0.7rem] font-bold transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >{{ link.glyph }}</span>
      <span>{{ link.name }}</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import type { SocialLink } from "~/site";

defineProps<{
  links: readonly SocialLink[];
}>();
</script>
