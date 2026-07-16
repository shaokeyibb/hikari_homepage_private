<template>
  <div
    ref="scroller"
    class="no-scrollbar h-dvh w-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto scroll-smooth"
  >
    <section
      id="home"
      class="relative flex h-dvh snap-start snap-always flex-col"
    >
      <HeroCard class="flex-1" />

      <button
        type="button"
        class="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-star-dim/60 transition-colors duration-300 hover:text-white"
        aria-label="滚动到履历"
        @click="goTo('resume')"
      >
        <span class="text-xs font-medium tracking-[0.3em] uppercase">履历</span>
        <Icon name="ph:caret-down-bold" class="animate-bounce text-lg" />
      </button>
    </section>

    <section
      id="resume"
      class="relative flex min-h-dvh snap-start snap-always flex-col"
    >
      <div class="flex flex-1 items-center">
        <ResumeSection />
      </div>
      <SiteFooter />
    </section>
  </div>

  <PageIndicator :items="sections" :active="active" @select="goTo" />
</template>

<script setup lang="ts">
import { sameAs, site } from "~/site";

const scroller = ref<HTMLElement | null>(null);
const sections = [
  { id: "home", label: "主页" },
  { id: "resume", label: "履历" },
];
const active = ref("home");

let observer: IntersectionObserver | undefined;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id;
      }
    },
    { root: scroller.value, threshold: 0.6 },
  );
  for (const s of sections) {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  }
});

onBeforeUnmount(() => observer?.disconnect());

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
    { property: "og:profile:username", content: seo.profileUsername },
    { property: "og:gender", content: "male" },
  ],
  link: [{ rel: "canonical", href: seo.url }],
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
