<template>
  <nav
    class="fixed top-1/2 right-4 z-30 -translate-y-1/2 sm:right-6"
    aria-label="页面导航"
  >
    <ul class="flex flex-col items-end gap-5">
      <li v-for="item in items" :key="item.id">
        <button
          type="button"
          class="group flex items-center gap-2.5"
          :aria-current="active === item.id ? 'true' : undefined"
          @click="$emit('select', item.id)"
        >
          <span
            class="text-xs font-medium tracking-wide transition-all duration-300"
            :class="
              active === item.id
                ? 'text-white opacity-100'
                : 'text-star-dim/60 opacity-0 group-hover:opacity-100'
            "
          >{{ item.label }}</span>
          <span
            class="h-2.5 w-2.5 rounded-full border transition-all duration-300"
            :class="
              active === item.id
                ? 'scale-110 border-nebula-cyan bg-nebula-cyan shadow-[0_0_12px_2px_rgba(53,231,255,0.75)]'
                : 'border-white/40 bg-transparent group-hover:border-white/80'
            "
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
export type IndicatorItem = { id: string; label: string };

defineProps<{
  items: IndicatorItem[];
  active: string;
}>();

defineEmits<{ select: [id: string] }>();
</script>
