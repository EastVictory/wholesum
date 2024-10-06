<script setup lang="ts">
type Feature = {
  title: string;
  color: string;
  text: string;
};
withDefaults(
  defineProps<{
    feature: Feature;
  }>(),
  {
    feature: () => ({
      title: "",
      text: "",
      color: "",
    }),
  }
);
</script>

<template>
  <div
    class="feature-circle"
    :style="{
      backgroundColor: feature.color,
    }"
  >
    <div class="text-center">
      <p
        class="font-subtitle text-licorice font-light text-[2.5rem] leading-[3.1875rem] mb-4"
      >
        {{ feature.title }}
      </p>
      <p class="text-licorice">{{ feature.text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feature-circle {
  @apply max-w-[19.125rem] min-w-[19.125rem] min-h-[19.125rem] rounded-full border-2 border-licorice;
  @apply flex flex-col justify-center items-center flex-1 px-10 flex-shrink-0 relative mb-[1.75rem];
  &:after {
    content: "";
    @apply absolute -bottom-[1.875rem] h-[1.875rem] w-[2px] bg-black;
  }
}
</style>
