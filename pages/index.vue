<script setup lang="ts">
import AsideNav from "~/components/dashboard/AsideNav.vue";

const isVisible = ref(true);
</script>

<template>
  <main class="homepage-main">
    <div class="logo-wrapper flex justify-center">
      <nuxt-link to="/">
        <nuxt-icon name="logo" class="w-[1.9375rem] h-[1.8125rem]" filled />
      </nuxt-link>
    </div>
    <section v-if="isVisible" class="alert rounded-none flex">
      <div
        class="max-w-4xl flex justify-between items-center mx-auto w-full pr-[2.5625rem]"
      >
        <p class="flex items-center gap-2">
          <nuxt-icon name="green-clouds" class="" filled />
          <span class="font-medium text-[0.625rem] text-[#191521] leading-3">
            Welcome! Create your first task to start exploring your new home.
          </span>
        </p>
        <button @click.prevent="isVisible = false">
          <nuxt-icon name="close" class="" filled />
        </button>
      </div>
    </section>
    <section class="shie-container pt-[3.125rem] flex gap-x-[4.375rem]">
      <AsideNav />
      <section class="flex-1">
        <div class="flex justify-between items-center pb-6">
          <div>
            <p
              class="font-title text-black text-[1.25rem] tracking-[0.04rem] leading-[1.625rem] min-h-[1.875rem]"
            >
              Saturday 3rd June
            </p>
            <p class="text-taupe-gray text-[0.625rem] leading-3 font-medium">
              Have a good day!
            </p>
          </div>
          <button
            class="btn bg-capri text-dark rounded px-[1.1875rem] py-[0.8125rem] font-medium text-[0.8125rem] normal-case"
          >
            Create a new task
          </button>
        </div>
        <section class="daily-banner">
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
        <section class="upgrade-banner">
          <div>
            <p class="text-white text-[0.8125rem] leading-5 font-medium w-4/5">
              Get deeper insight into your habits, productivity and wellness
              trends
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
      </section>
    </section>
  </main>
</template>

<style scoped>
.homepage-main {
  .daily-banner {
    @apply rounded-lg border border-platinum px-[4.875rem] py-[1.9375rem] flex justify-between gap-[4rem] items-center mb-4;
  }
  .upgrade-banner {
    @apply rounded bg-dark py-[0.625rem] px-[1.9375rem] flex justify-between items-center;
  }
}
</style>
