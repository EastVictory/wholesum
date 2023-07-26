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
          <span class="text-black">DAILY GOALS</span>
        </p>
      </div>
      <div class="flex items-center gap-4">
        <button
          class="rounded inline-flex text-dark px-[1.5rem] py-[0.8125rem] gap-2 items-center border border-platinum min-w-[6.1875rem] text-[0.625rem]"
        >
          EXIT
          <nuxt-icon name="close" class="w-4 h-4" />
        </button>
        <button
          class="rounded inline-flex text-white px-[1.5rem] py-[0.8125rem] gap-2 items-center bg-byzantine min-w-[6.1875rem] text-[0.625rem]"
        >
          SAVE
          <nuxt-icon name="save" class="w-4 h-4 no-fill" />
        </button>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<script setup></script>
<style>
header {
  box-shadow: inset 0 -1px 0 #e4e4e4;
}
</style>
