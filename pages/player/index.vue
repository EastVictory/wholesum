<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
import PlayerEditor from "~/components/editor/PlayerEditor.vue";
</script>

<template>
  <div class="mx-auto bg-conditioner min-h-screen pt-[3.09rem]">
    <div class="logo-wrapper flex justify-center pb-[3.69rem]">
      <nuxt-link to="/" class="text-black">
        <nuxt-icon
          name="logo-text"
          class="w-[1.9375rem] h-[1.8125rem] text-black"
          filled
        />
      </nuxt-link>
    </div>
    <section class="max-w-[90rem] mx-auto">
      <div
        class="max-w-[72.5rem] mx-auto flex items-center justify-between mb-[5rem]"
      >
        <button
          class="flex items-center gap-8 text-dark font-title text-base leading-[1.125rem] uppercase"
        >
          <span class="h-[1.125rem]">Untitled task</span>
          <nuxt-icon name="chevron-right" filled />
        </button>
        <div class="flex gap-2 items-center">
          <ShiePillButton>SESSION 001</ShiePillButton>
          <ShiePillButton>EDUCATION</ShiePillButton>
          <ShiePillButton>25 MINS SESSION</ShiePillButton>
          <ShiePillButton>5 MINS BREAK</ShiePillButton>
        </div>
      </div>
      <div class="flex gap-6 justify-between max-w-[57.5625rem] mx-auto">
        <section class="w-full flex-1">
          <div class="px-6 flex justify-between mb-[2.81rem]">
            <p
              class="text-[2rem] font-alt text-dark font-bold leading-[1.875rem]"
            >
              30 : 00 <span class="text-[1.4375rem]">MINS</span>
            </p>
            <span class="">
              <nuxt-icon name="audio" filled />
            </span>
          </div>
          <div class="px-6 flex gap-[1.5rem] justify-center">
            <ShieButton
              variant="primary"
              class="!bg-white !border-x-[0.12rem] !border-t-[0.13rem]"
            >
              <nuxt-icon name="stop" filled />
            </ShieButton>
            <ShieButton
              variant="primary"
              class="!bg-conditioner !border-x-[0.12rem] !border-t-[0.13rem]"
            >
              <nuxt-icon name="start" filled />
            </ShieButton>
            <ShieButton
              variant="secondary"
              class="whitespace-nowrap !px-4 !w-[7.625rem] mx-auto !text-[0.75rem] !bg-dark-puce !text-conditioner"
            >
              Start break
            </ShieButton>
          </div>
        </section>
        <section class="max-w-[24.3125rem] w-full">
          <PlayerEditor />
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
