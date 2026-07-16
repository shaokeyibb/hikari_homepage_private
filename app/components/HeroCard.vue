<template>
  <section
    class="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-8 px-6 py-24 text-center"
  >
    <HeroAvatar
      class="stagger"
      :src="site.avatar"
      :alt="`${site.name} 的头像`"
      :style="{ animationDelay: '0.05s' }"
    />

    <div class="flex flex-col items-center gap-3">
      <h1
        class="stagger font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        :style="{ animationDelay: '0.2s' }"
      >
        <span class="text-cosmic-gradient">{{ site.name }}</span>
      </h1>
      <p
        class="stagger font-display text-lg font-medium tracking-[0.35em] text-star-dim/70 uppercase"
        :style="{ animationDelay: '0.32s' }"
      >
        {{ site.latinName }}
      </p>
    </div>

    <p
      class="stagger max-w-xl text-balance text-base leading-relaxed text-star-dim/85 sm:text-lg"
      :style="{ animationDelay: '0.46s' }"
    >
      {{ site.slogan }}
    </p>

    <SocialLinks :links="site.socialMedia" />
  </section>
</template>

<script setup lang="ts">
import { site } from "~/site";
</script>
