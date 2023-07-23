<script setup lang="ts"></script>

<template>
  <section class="upgrade-banner mt-4">
    <div>
      <p class="text-white text-[0.8125rem] leading-5 font-medium w-4/5">
        Get deeper insight into your habits, productivity and wellness trends
      </p>
      <p class="min-h-[2.5625rem]">
        <nuxt-link
          class="inline-block text-[#FB8CAC] font-medium text-[0.625rem] underline leading-3"
        >
          Upgrade to Premium
        </nuxt-link>
      </p>
    </div>
    <div>
      <nuxt-icon name="computer-insights" class="" filled />
    </div>
  </section>
</template>

<style scoped>
.upgrade-banner {
  @apply rounded bg-dark py-[0.625rem] px-[1.9375rem] flex justify-between items-center;
}
</style>
