<script setup lang="ts"></script>

<template>
  <div class="auth-layout mx-auto bg-gunmetal">
    <div class="logo-wrapper flex justify-center py-[2.65rem]">
      <nuxt-link to="/" class="text-white">
        <nuxt-icon
          name="logo"
          class="w-[1.9375rem] h-[1.8125rem] text-white"
          filled
        />
      </nuxt-link>
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
  &__contents {
    @apply max-w-3xl bg-white rounded-lg shadow-[0.5rem_-0.5rem_0_#E88DBA];
    @apply px-5 pt-[3.44rem] pb-[5.94rem] mb-20 mx-4 lg:mx-auto lg:mb-4;
    @apply lg:pl-[7rem] lg:pr-[9.44rem] pt-[3.44rem] pb-[5.94rem];
  }
}
</style>
