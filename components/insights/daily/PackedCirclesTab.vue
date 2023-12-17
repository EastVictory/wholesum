<script setup lang="ts">
const stats = [
  {
    title: "Education",
    duration: 26,
  },
  {
    title: "SOCIALITY",
    duration: 33,
  },
  {
    title: "FITNESS",
    duration: 9,
  },
  {
    title: "SELF-CARE",
    duration: 22,
  },
];
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
    <div
      v-for="stat in stats"
      :key="stat.title"
      :style="{
        width: `${stat.duration / 2}rem`,
        height: `${stat.duration / 2}rem`,
      }"
      class="rounded-full bg-[#FDDDEC] flex justify-center items-center"
    >
      <div>
        <p class="text-dark-puce font-title text-[1.2rem]">
          {{ stat.duration }} mins
        </p>
        <p class="text-dark-puce font-title text-[1.2rem] uppercase">
          {{ stat.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
