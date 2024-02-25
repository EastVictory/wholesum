<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: string;
    to?: string;
    icon?: string | null;
    color?: string;
  }>(),
  { variant: "primary", icon: null, to: "" }
);
</script>

<template>
  <nuxt-link
    :to="to"
    class="shie-link"
    :class="{ [`shie-link--${variant}`]: true, [`shie-link--${color}`]: true }"
  >
    <slot name="content"></slot>
    <span class="h-[1.75rem]">
      <slot></slot>
      <nuxt-icon v-if="icon" :name="icon" filled />
    </span>
  </nuxt-link>
</template>

<style scoped lang="scss">
.shie-link {
  @apply text-[1.375rem] rounded-[0.326rem] uppercase whitespace-nowrap h-[4rem] items-center;
  @apply py-[0.6375rem] text-center w-full px-[3.3rem] justify-center items-center gap-[0.92rem] inline-flex;
  &--primary {
    @apply text-white;
    @apply border-dark-puce border-x-[0.27rem] border-t-[0.22rem] border-b-[0.5rem];
    @apply hover:bg-transparent hover:text-dark-puce;
    &:disabled {
      @apply border-platinum bg-platinum;
    }
  }
  &--secondary {
    @apply border-2 border-dark-puce text-black hover:bg-transparent hover:border-black;
  }
  &--cardinal {
    @apply bg-crayola text-dark-puce;
  }
}
</style>
