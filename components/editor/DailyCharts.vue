<script setup lang="ts">
const stats = [
  {
    title: "Education",
    duration: 7.1875,
    color: "#6693FA",
  },
  {
    title: "SOCIALITY",
    duration: 10,
    color: "#76D7EA",
  },
  {
    title: "FITNESS",
    duration: 7.1875,
    color: "#76D7AE",
  },
  {
    title: "SELF-CARE",
    duration: 8.8,
    color: "#DCC2EE",
  },
];
</script>

<template>
  <div class="daily-calendar">
    <div class="flex justify-between items-center mb-[2.625rem]">
      <p class="text-2xl font-mono text-licorice">LABELS</p>
      <nuxt-link class="shie-button px-3 bg-white gap-1 py-2" to="#">
        <span class="text-xs font-title h-2 text-black">VIEW CHARTS</span>
        <nuxt-icon name="chevron-right" class="text-dark-puce h-2 w-2" filled />
      </nuxt-link>
    </div>
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        v-for="stat in stats"
        :key="stat.title"
        :style="{
          width: `${stat.duration}rem`,
          height: `${stat.duration}rem`,
          backgroundColor: stat.color,
        }"
        class="rounded-full flex justify-center items-center stat__circle"
        :class="`bg-[${stat.color}]`"
      >
        <div />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.stat {
  &__circle {
    &:nth-of-type(odd) {
      place-self: end;
    }
  }
}
</style>
