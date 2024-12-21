<script setup lang="ts">
const readyForLaunch = ref(false);
</script>

<template>
  <section class="max-w-[51.375rem] mx-auto pb-[4.25rem] px-8 lg:px-0">
    <div class="text-licorice mb-6 max-w-[26.1875rem] mx-auto text-center">
      <p
        class="font-title text-[4rem] font-light leading-[5.16rem] text-center mb-5 mt-[2.0625rem]"
      >
        just play
      </p>
      <div>
        <p class="font-inter font-medium text-lg mb-6">
          Turn your to do list into a fun space for your ideas, where getting
          things done is rewarding.
        </p>
        <p class="text-licorice/50 text-xs font-medium">
          Available February 2025
        </p>
      </div>
    </div>
    <div
      v-if="readyForLaunch"
      class="flex flex-col md:flex-row items-center justify-center lg:justify-end gap-2"
    >
      <a
        class="font-inter font-medium flex items-center gap-6 max-w-[13.375rem] text-white rounded-lg py-2 px-4 text-sm bg-licorice"
      >
        <img
          src="/images/png/app-store.png"
          alt=""
          class="w-[1.875rem] h-[1.875rem]"
        />
        Download on the App Store
      </a>
      <a
        class="font-inter font-medium flex items-center gap-6 max-w-[13.375rem] text-white rounded-lg py-2 px-4 text-sm bg-licorice"
      >
        <img src="/images/png/playstore.png" alt="" />
        Get it on Google Play
      </a>
    </div>
    <div
      v-else
      class="flex flex-col lg:flex-row justify-end items-center gap-2"
    >
      <a
        class="bg-white rounded-lg px-2.5 py-3 inline-flex items-center gap-4 text-licorice font-semibold max-w-[20.875rem] w-full justify-between"
        href="https://playmates.substack.com"
        target="_blank"
      >
        <img
          src="/images/png/badge-orange.png"
          alt=""
          class="w-[1.375rem] h-[1.375rem]"
        />
        <span class="pr-4"> Join the Substack conversation </span>
      </a>
      <nuxt-link
        to="/notify"
        class="w-full lg:!w-[13.375rem] rounded-lg text-white font-semibold bg-[#2E52B2] px-2.5 py-3 text-center"
      >
        Notify Me
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
