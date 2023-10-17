<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
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
          <ShiePillButton>EDUCATION</ShiePillButton>
          <ShiePillButton>25 MINS SESSION</ShiePillButton>
          <ShiePillButton>5 MINS BREAK</ShiePillButton>
        </div>
      </div>
      <section class="flex gap-6">
        <div
          class="bg-white rounded-lg border-2 border-dark-puce max-w-[13.6875rem] w-full py-6 flex flex-col items-center"
        >
          <p class="py-4 mb-8">SESSION 001</p>
          <div class="mb-6">
            <nuxt-icon name="audio" filled />
          </div>
          <div class="mb-[6.61rem] text-center">
            <p
              class="text-[2rem] font-title text-dark font-bold leading-[1.875rem] mb-2"
            >
              30:00
            </p>
            <p
              class="text-[1.4375rem] font-title text-dark font-bold leading-[1.875rem]"
            >
              MINS
            </p>
          </div>
          <div class="mb-[7rem] flex flex-col gap-[0.85rem]">
            <ShieButton
              variant="primary"
              class="!bg-conditioner !border-x-[0.12rem] !border-t-[0.13rem]"
            >
              <nuxt-icon name="start" filled />
            </ShieButton>
            <ShieButton
              variant="primary"
              class="!bg-white !border-x-[0.12rem] !border-t-[0.13rem]"
            >
              <nuxt-icon name="stop" filled />
            </ShieButton>
          </div>
          <ShieButton
            variant="secondary"
            class="whitespace-nowrap !px-4 !w-[7.625rem] mx-auto !text-[0.75rem]"
          >
            Start break
          </ShieButton>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
