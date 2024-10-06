<script setup lang="ts">
import FeatureSlider from "~/components/landing/FeatureSlider.vue";
import LandingBanner from "~/components/landing/LandingBanner.vue";
import WeatherReport from "~/components/landing/WeatherReport.vue";
</script>

<template>
  <div class="bg-[#F3F2ED] min-h-screen flex-col flex justify-between flex-1">
    <div class="flex-1 flex flex-col">
      <header class="py-6 border-b-[2px] border-black mb-[1.6875rem]">
        <div
          class="max-w-[69.25rem] mx-auto flex justify-between items-center pl-6"
        >
          <nuxt-link to="/" class="inline-flex">
            <nuxt-icon name="logo-icon" class="h-8" filled />
            <nuxt-icon name="logo-text" class="h-8 hidden lg:block" filled />
          </nuxt-link>
          <WeatherReport />
        </div>
      </header>
      <main class="h-full flex-1 flex flex-col justify-between">
        <LandingBanner />
        <FeatureSlider />
      </main>
    </div>
    <LandingFooter />
  </div>
</template>

<style scoped lang="scss"></style>
