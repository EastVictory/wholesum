<script setup lang="ts"></script>

<template>
  <div data-theme="light" class="min-h-screen">
    <header
      class="py-[1.5625rem] pl-[5rem] pr-[5.3125rem] flex items-center justify-between"
    >
      <div class="flex items-center gap-x-[3.5rem]">
        <nuxt-link to="/">
          <nuxt-icon name="logo" class="w-[1.9375rem] h-[1.8125rem]" filled />
        </nuxt-link>
        <p
          class="flex gap-2 text-[0.8125rem] font-medium leading-[1.375rem] text-taupe-gray"
        >
          <nuxt-link to="/" class="">HOME</nuxt-link>
          <span class="font-light text-[1.625rem]">/</span>
          <slot name="current-link"></slot>
        </p>
      </div>
      <div class="flex items-center gap-4">
        <slot name="actions"></slot>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  box-shadow: inset 0 -1px 0 #e4e4e4;
}
</style>
