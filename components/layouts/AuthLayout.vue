<script setup lang="ts"></script>

<template>
  <div class="auth-layout mx-auto bg-conditioner">
    <div class="logo-wrapper flex justify-center pb-[3.69rem]">
      <nuxt-link to="/" class="text-black">
        <nuxt-icon
          name="logo-text"
          class="w-[1.9375rem] h-[1.8125rem] text-black"
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
    @apply max-w-[34.4375rem] mx-auto;
    @apply px-5 pb-4  lg:pb-[11.5rem];
  }
}
</style>
