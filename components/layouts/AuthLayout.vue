<script setup lang="ts"></script>

<template>
  <div class="auth-layout max-w-4xl py-[1.875rem] mx-auto">
    <div class="logo-wrapper flex justify-center mb-[5.9375rem]">
      <nuxt-link to="/">
        <nuxt-icon name="logo" class="w-[1.9375rem] h-[1.8125rem]" filled />
      </nuxt-link>
    </div>
    <div class="flex gap-[2.25rem] items-center">
      <div class="w-full lg:w-7/12">
        <slot />
      </div>
      <div class="hidden lg:block image-wrapper flex-1">
        <nuxt-icon name="meditation" filled />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
