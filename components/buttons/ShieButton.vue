<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: string;
    plain?: boolean;
    icon?: string | null;
  }>(),
  { variant: "primary", icon: null, plain: false }
);
</script>

<template>
  <button
    class="shie-button"
    :class="{
      [`shie-button--${variant}`]: true,
      'shie-button--plain': plain,
    }"
  >
    <slot></slot>
    <nuxt-icon v-if="icon" :name="icon" class="no-fill" />
  </button>
</template>

<style scoped lang="scss">
.shie-button {
  @apply text-base rounded-[0.326rem] uppercase;
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
  &--dark {
    @apply bg-dark text-white border-2 border-dark hover:text-dark hover:bg-transparent;
  }
  &--plain {
    @apply border-2;
    &.shie-button--primary {
      @apply border-cardinal;
    }
    &.shie-button--secondary {
      @apply border-crayola;
    }
    &.shie-button--dark {
      @apply border-dark;
    }
  }
}
</style>
