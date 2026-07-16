<template>
  <footer
    class="fixed inset-x-0 bottom-0 z-10 px-4 py-4 text-center text-xs leading-relaxed text-star-dim/60"
  >
    <p class="mx-auto max-w-2xl">
      &copy;{{ year }} {{ site.name }}. All Rights Reserved.
      <a
        :href="site.icp.url"
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-star-dim/80 underline-offset-2 transition-colors hover:text-nebula-cyan hover:underline"
      >{{ site.icp.text }}</a>
      <span class="mx-1 opacity-40">·</span>
      Made among the stars
    </p>
  </footer>
</template>

<script setup lang="ts">
import { site } from "~/site";

const year = new Date().getFullYear();
</script>
