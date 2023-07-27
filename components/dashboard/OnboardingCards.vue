<script setup lang="ts"></script>

<template>
  <div class="">
    <section class="daily-banner mt-[1.87rem]">
      <nuxt-icon name="crown" filled />
      <div>
        <p class="font-light text-dark text-[0.8125rem] leading-5 mb-1">
          Set daily goals to reach in your learning, socials, self care and
          physical health and find out how you spend your time.
        </p>
        <p class="text-right min-h-[1.5rem]">
          <nuxt-link
            class="inline-block underline text-[0.625rem] text-black leading-3 font-medium"
            to="/dailies"
          >
            Set daily goals
          </nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.daily-banner {
  @apply rounded-lg border border-platinum px-[4.875rem] py-[1.9375rem] flex justify-between gap-[4rem] items-center mb-4;
}
</style>
