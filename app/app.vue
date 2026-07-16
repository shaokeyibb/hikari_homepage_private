<template>
  <CosmicBackdrop />
  <StarfieldCanvas />
  <NuxtPage />
</template>

<script setup lang="ts">
import { site } from "~/site";

const { seo } = site;

// Site-wide head (shared across every route).
useHead({
  meta: [{ name: "baidu-site-verification", content: seo.baiduVerification }],
  link: [{ rel: "icon", href: seo.favicon }],
});
</script>
