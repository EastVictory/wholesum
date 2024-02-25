<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";
</script>

<template>
  <section class="max-w-[52.25rem] mx-auto">
    <div
      class="border border-dark-puce bg-conditioner flex gap-6 items-center px-[2.625rem] py-[2.8125rem] rounded-[1.375rem] mb-6"
    >
      <nuxt-icon name="logo-icon" filled class="w-[4.1875rem] inline-block" />
      <p class="font-title text-[2.5rem] leading-[3.4375rem] h-4">
        every idea begins with a note...
      </p>
    </div>
    <div class="flex gap-[3rem] items-end">
      <section class="w-[26.375rem] flex-1 h-full flex flex-col">
        <div
          class="w-[95%] mx-auto bg-white border-2 border-b-0 border-dark-puce rounded-tl-[22px] rounded-tr-[22px] text-dark flex-1"
        >
          <div
            class="px-[3.25rem] pt-[3.5rem] border-b-2 border-dark-puce border-dotted"
          >
            <p class="text-[2rem] font-title">Creator</p>
            <p class="text-[3rem] font-semibold text-dark">A$0</p>
          </div>
          <div class="px-[1.625rem] text-center pt-[2.3125rem]">
            <p
              class="font-title text-2xl leading-[3rem] pb-[2.375rem] h-[10.8125rem]"
            >
              Get the baseline plan for free.
            </p>
            <div class="text-left">
              <p
                class="flex items-center w-full gap-6 font-title pb-[2.375rem]"
              >
                <nuxt-icon name="logo-alt-1" filled />
                CONTENT DOWNLOAD
              </p>
              <p
                class="flex items-center w-full gap-6 font-title pb-[2.375rem]"
              >
                <nuxt-icon name="logo-alt-2" filled />
                POMODORO TIME KEEPER
              </p>
              <p
                class="flex items-center w-full gap-6 font-title pb-[2.375rem]"
              >
                <nuxt-icon name="logo-alt-3" filled />
                INTERATIVE NOTES EDITOR
              </p>
            </div>
          </div>
        </div>
        <ShieButton variant="secondary" class="!bg-[#DCC2EE] w-[26.375rem]">
          GAIN FULL ACCESS
        </ShieButton>
      </section>
      <section class="w-[26.375rem] flex-1 h-full flex flex-col">
        <div
          class="w-[95%] mx-auto bg-white border-2 border-b-0 border-dark-puce rounded-tl-[22px] rounded-tr-[22px] text-dark flex-1"
        >
          <div
            class="px-[3.25rem] pt-[3.5rem] border-b-2 border-dark-puce border-dotted"
          >
            <p class="text-[2rem] font-title">Creative pro</p>
            <p class="text-[3rem] font-semibold text-dark">A$4.99</p>
          </div>
          <div class="px-[1.625rem] text-center pt-[2.3125rem]">
            <p
              class="font-title text-2xl leading-[3rem] pb-[2.375rem] min-h-[8.8125rem]"
            >
              Become a creative pro and get premium insights into your ideas.
            </p>
            <div class="text-left">
              <p
                class="flex items-center w-full gap-6 font-title pb-[2.375rem]"
              >
                <nuxt-icon name="logo-alt-1" filled />
                EVERY FEATURE FOR FREE
              </p>
              <p
                class="flex items-center w-full gap-6 font-title pb-[2.375rem]"
              >
                <nuxt-icon name="logo-alt-2" filled />
                BAR, RADIAL & DONUT CHARTS
              </p>
              <p
                class="flex items-center w-full gap-6 font-title pb-[2.375rem]"
              >
                <nuxt-icon name="logo-alt-3" filled />
                ACTIVITY VERSION HISTORY
              </p>
            </div>
          </div>
        </div>
        <ShieButton variant="secondary" class="bg-[#DCC2EE] w-[26.375rem]">
          GAIN FULL ACCESS
        </ShieButton>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
