<script setup lang="ts">
type Trend = {
  education: number;
  social: number;
  selfCare: number;
  fitness: number;
};
defineProps<{
  trend: Trend;
}>();
</script>

<template>
  <div class="w-[1.625rem] flex flex-col gap-1">
    <progress
      class="progress w-full h-[0.125rem]"
      :value="trend.education"
      :max="trend.education"
      :style="{ width: `${trend.education}%` }"
    ></progress>
    <progress
      class="progress h-[0.125rem]"
      :value="trend.social"
      :max="trend.social"
      :style="{ width: `${trend.social}%` }"
    ></progress>
    <progress
      class="progress h-[0.125rem]"
      :value="trend.selfCare"
      :max="trend.selfCare"
      :style="{ width: `${trend.selfCare}%` }"
    ></progress>
    <progress
      class="progress h-[0.125rem]"
      :value="trend.fitness"
      :max="trend.fitness"
      :style="{ width: `${trend.fitness}%` }"
    ></progress>
  </div>
</template>

<style scoped></style>
