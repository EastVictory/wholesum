<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: string;
    to?: string;
    icon?: string | null;
  }>(),
  { variant: "primary", icon: null, to: "" }
);
</script>

<template>
  <nuxt-link
    :to="to"
    class="shie-link"
    :class="{ [`shie-link--${variant}`]: true }"
  >
    <slot></slot>
    <nuxt-icon v-if="icon" :name="icon" />
  </nuxt-link>
</template>

<style scoped lang="scss">
.shie-link {
  @apply text-[1.375rem] rounded-[0.326rem] uppercase whitespace-nowrap;
  @apply py-[0.6375rem] text-center w-full px-[3.3rem] justify-center items-center gap-[0.92rem] inline-flex;
  &--primary {
    @apply bg-cardinal text-white;
    @apply border-dark-puce border-l-[0.38rem] border-r-[0.19rem] border-t-[0.25rem] border-b-[0.5rem];
    @apply hover:bg-transparent hover:text-dark-puce;
    &:disabled {
      @apply border-platinum bg-platinum;
    }
  }
  &--secondary {
    @apply border-2 border-dark-puce bg-crayola text-black hover:bg-transparent;
  }
}
</style>
