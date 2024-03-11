<script setup lang="ts">
import { DateTime } from "luxon";
const time = DateTime.now().toFormat("LLLL '‘'ii");
const date = ref(new Date());

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates: new Date(),
  },
]);
</script>

<template>
  <div class="daily-calendar">
    <div class="flex justify-between items-center">
      <p class="text-2xl font-mono text-licorice">{{ time }}</p>
      <nuxt-link class="shie-button px-3 bg-white gap-1 py-2" to="#">
        <span class="text-xs font-title h-2 text-black">ACTIVITY HISTORY</span>
        <nuxt-icon name="chevron-right" class="text-dark-puce h-2 w-2" filled />
      </nuxt-link>
    </div>
    <div class="pt-4">
      <client-only>
        <VDatePicker v-model="date" :attributes="attrs" />
      </client-only>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shie-button {
  @apply border-2 border-dark-puce text-sm inline-flex items-center;
  @apply rounded-full;
}
</style>
