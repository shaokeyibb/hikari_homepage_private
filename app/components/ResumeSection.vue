<template>
  <div class="mx-auto w-full max-w-3xl px-6 py-16">
    <!-- Title -->
    <header class="mb-14 text-center">
      <h1
        class="stagger font-display text-5xl font-bold tracking-tight sm:text-6xl"
        :style="{ animationDelay: '0.05s' }"
      >
        <span class="text-cosmic-gradient">履历</span>
      </h1>
      <p
        class="stagger mt-3 font-display text-sm font-medium tracking-[0.35em] text-star-dim/60 uppercase"
        :style="{ animationDelay: '0.15s' }"
      >
        {{ site.name }} · {{ site.latinName }}
      </p>
    </header>

    <!-- Education -->
    <div class="mb-14">
      <h2
        class="stagger mb-6 flex items-center gap-2.5 font-display text-xl font-semibold text-white"
        :style="{ animationDelay: '0.22s' }"
      >
        <Icon name="ph:graduation-cap-bold" class="text-nebula-cyan" />
        教育经历
      </h2>
      <div class="flex flex-col gap-4">
        <article
          v-for="(edu, i) in site.education"
          :key="edu.school"
          class="stagger rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors duration-300 hover:border-white/20"
          :style="{ animationDelay: `${0.3 + i * 0.08}s` }"
        >
          <div class="flex items-start gap-4">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(53,231,255,0.2),rgba(124,92,255,0.25))] text-nebula-cyan"
            >
              <Icon :name="edu.icon" class="text-xl" />
            </span>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 class="font-display text-lg font-semibold text-white">{{ edu.school }}</h3>
                <span class="font-mono text-sm text-star-dim/70">{{ edu.period }}</span>
              </div>
              <p class="mt-1 text-sm text-star-dim/80">专业：{{ edu.major }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Work experience (timeline) -->
    <div>
      <h2
        class="stagger mb-6 flex items-center gap-2.5 font-display text-xl font-semibold text-white"
        :style="{ animationDelay: '0.38s' }"
      >
        <Icon name="ph:briefcase-bold" class="text-nebula-violet" />
        工作经历
      </h2>
      <ol class="relative ml-3 flex flex-col gap-6 border-l border-white/10 pl-8">
        <li
          v-for="(job, i) in site.experience"
          :key="job.company"
          class="stagger relative"
          :style="{ animationDelay: `${0.46 + i * 0.1}s` }"
        >
          <!-- Timeline node -->
          <span
            class="absolute top-6 -left-[2.6rem] grid h-4 w-4 place-items-center rounded-full border-2 border-nebula-violet bg-void"
          >
            <span
              v-if="job.current"
              class="h-1.5 w-1.5 animate-halo rounded-full bg-nebula-cyan"
            />
          </span>
          <article
            class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors duration-300 hover:border-white/20"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 class="font-display text-lg font-semibold text-white">{{ job.company }}</h3>
              <span
                class="font-mono text-sm"
                :class="job.current ? 'text-nebula-cyan' : 'text-star-dim/70'"
              >{{ job.period }}</span>
            </div>
            <p class="mt-1.5 text-base text-star-dim/85">{{ job.role }}</p>
          </article>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/site";
</script>
