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

const getWidth = (width: number) => {
  if (width > 25) return 100;
  return Math.ceil((width / 25) * 100);
};
</script>

<template>
  <section class="flex flex-col gap-4 justify-start">
    <div
      v-for="stat in stats"
      :key="stat.title"
      :style="{
        width: `${getWidth(stat.duration)}%`,
        height: `5.41675rem`,
      }"
      class="bg-[#FDDDEC] flex items-center justify-center rounded-lg"
    >
      <p class="text-dark-puce font-title text-center text-[1.2rem] h-4">
        {{ stat.duration }}/25 mins
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
