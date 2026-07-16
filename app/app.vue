<template>
  <CosmicBackdrop />
  <StarfieldCanvas />
  <main class="relative">
    <HeroCard />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import { sameAs, site } from "~/site";

const { seo } = site;

useSeoMeta({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  ogSiteName: seo.title,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogType: "profile",
  ogUrl: seo.url,
  ogImage: seo.ogImage,
  ogLocale: "zh_CN",
});

useHead({
  meta: [
    { name: "baidu-site-verification", content: seo.baiduVerification },
    { property: "og:profile:username", content: seo.profileUsername },
    { property: "og:gender", content: "male" },
  ],
  link: [
    { rel: "icon", href: seo.favicon },
    { rel: "canonical", href: seo.url },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "ProfilePage",
        mainEntity: {
          "@id": "#main-author",
          "@type": "Person",
          name: site.latinName,
          alternateName: site.name,
          description: seo.description,
          identifier: site.latinName,
          image: seo.ogImage,
          sameAs,
        },
      }),
    },
  ],
});
</script>
