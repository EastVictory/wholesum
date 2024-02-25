<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: "",
  }
);
</script>

<template>
  <div class="auth-layout mx-auto bg-[#F7F1E5]">
    <div class="logo-wrapper flex justify-center">
      <nuxt-link to="/" class="text-black">
        <nuxt-icon
          name="logo-text"
          class="w-[1.9375rem] h-[1.8125rem] text-black"
          filled
        />
      </nuxt-link>
    </div>
    <div>
      <h1 class="page-title">{{ title }}</h1>
    </div>
    <div class="auth-layout__contents">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
  .page-title {
    @apply font-subtitle text-[2rem] leading-[2.58rem] mb-[2.81rem] text-center py-[2.6875rem] border-b-2 border-dotted border-dark;
  }

  &__contents {
    @apply max-w-[45.1875rem] mx-auto;
    @apply px-5 pb-4  lg:pb-[11.5rem];
  }
}
</style>
