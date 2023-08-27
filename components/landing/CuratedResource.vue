<script setup lang="ts">
type Resource = {
  icon: string;
  title: string;
};
withDefaults(
  defineProps<{
    title: string;
    description: string;
    resources?: Resource[];
  }>(),
  {
    resources: () => [],
  }
);
</script>

<template>
  <section class="curated-resources">
    <div class="max-w-[12.125rem]">
      <p class="font-title text-sm text-dark leading-6 mb-6 mt-2">
        {{ title }}
      </p>
      <p class="text-sm leading-6 font-light text-dark py-4">
        {{ description }}
      </p>
    </div>
    <div>
      <p class="leading-[1.125rem] font-medium text-xs text-outer-space">
        Top Resources
      </p>
      <div class="">
        <p
          v-for="resource in resources"
          :key="resource.title"
          class="top-resource-row"
        >
          <span class="top-resource-row__icon">
            <nuxt-icon :name="resource.icon" />
          </span>
          <span class="top-resource-row__text">{{ resource.title }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.curated-resources {
  @apply border-2 border-dark-puce bg-white rounded-[1.375rem] w-[37.3125rem] py-8 pl-16 pr-5 flex flex-col lg:flex-row gap-16;
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
