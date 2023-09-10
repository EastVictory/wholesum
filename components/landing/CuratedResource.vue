<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    icon: string;
    color?: string;
  }>(),
  {
    color: "white",
  }
);
</script>

<template>
  <section class="curated-resources" :style="{ backgroundColor: color }">
    <div class="w-4/5 py-6">
      <nuxt-icon
        :name="icon"
        filled
        class="h-16 w-16 inline-block mb-[2.5rem]"
      />
      <p class="font-title text-[2rem] text-dark leading-6 mb-6 mt-2">
        {{ title }}
      </p>
      <p class="text-2xl leading-[2.375rem] font-light text-dark py-4">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.curated-resources {
  @apply rounded-[1.25rem] min-w-[37.5rem] p-[2.5rem] flex flex-col lg:flex-row gap-16;
  .top-resource-row {
    @apply flex gap-[0.625rem] p-[0.625rem] items-center;
    &:hover {
      .top-resource-row__icon {
        @apply border-dark-puce;
      }
    }
    &__icon {
      @apply inline-flex justify-center items-center border border-platinum h-[2.5rem] w-[2.5rem] rounded;
    }
    &__text {
      @apply text-xs text-dark font-medium leading-[1.125rem] flex-1;
    }
  }
}
</style>
