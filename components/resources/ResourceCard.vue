<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";

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
      <div class="py-6 px-4 h-[5.69rem]">
        <p class="font-title capitalize leading-6">
          {{ title }}
        </p>
      </div>

      <div class="space-y-4">
        <ShiePillButton> EST: {{ duration }} Mins </ShiePillButton>
        <p
          class="font-light text-[#1E1E1E] text-xs leading-6 -tracking-[0.01425rem] w-11/12"
        >
          {{ description }}
        </p>
      </div>
    </section>
  </nuxt-link>
</template>

<style scoped lang="scss">
.resource-card {
  @apply rounded-lg border-2 border-dark-puce p-6 bg-white space-y-4 flex flex-col flex-1 min-h-[17.3125rem] transition-all;
  &__link {
    @apply min-w-[17.125rem] inline-flex h-full flex-1;
  }
  &:hover {
    @apply bg-crayola;
  }
}
</style>
