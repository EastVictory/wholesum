<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    duration: number;
    to?: string;
  }>(),
  {
    to: "#",
  }
);
</script>

<template>
  <nuxt-link :to="to" class="resource-card__link">
    <section class="resource-card">
      <div class="space-y-4">
        <div class="resource-card__title-border">
          <p class="font-title capitalize leading-6">
            {{ title }}
          </p>
        </div>
        <p
          class="font-light text-[#1E1E1E] text-xs leading-6 -tracking-[0.01425rem] w-11/12"
        >
          {{ description }}
        </p>
      </div>

      <p class="font-title text-xs leading-6 text-dark-puce">
        EST: {{ duration }} Mins
      </p>
    </section>
  </nuxt-link>
</template>

<style scoped lang="scss">
.resource-card {
  @apply rounded-lg border-2 border-dark-puce p-6 bg-white space-y-4 flex flex-col justify-between flex-1 min-h-[18.3125rem];
  &__link {
    @apply w-[17.125rem] inline-flex h-full flex-1;
  }
  &:hover {
    .resource-card__title-border {
      @apply border-dark-puce bg-crayola;
    }
  }
  &__title-border {
    @apply min-h-[5.69rem] rounded-lg border-2 border-[#B2C4C3] p-6 bg-[#B2C4C3]  px-4 py-8 transition-all;
  }
}
</style>
