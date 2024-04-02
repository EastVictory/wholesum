<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import ShieLink from "~/components/buttons/ShieLink.vue";
import TimeManagement from "~/components/landing/TimeManagement.vue";
import ExtendWorkflow from "~/components/landing/ExtendWorkflow.vue";
import SharingCaring from "~/components/landing/SharingCaring.vue";
import ChartNewPath from "~/components/landing/ChartNewPath.vue";
import LandingPricing from "~/components/landing/LandingPricing.vue";
import LandingFeatures from "~/components/landing/LandingFeatures.vue";

type Link = {
  name: string;
  href: string;
};
const links: Link[] = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <LandingLayout>
    <div class="shie-container pt-6">
      <section
        class="max-w-[76.5rem] mx-auto w-full rounded-[1.375rem] border-2 border-dark-puce p-6 bg-white mb-[3.19rem] relative"
      >
        <header class="home-nav">
          <nav
            class="flex justify-center items-center gap-[4.12rem] mb-[5.62rem]"
          >
            <a href="/">
              <nuxt-icon name="logo-icon" filled />
            </a>
            <ul class="flex gap-x-[2.63rem]">
              <li
                v-for="link in links"
                :key="link.href"
                class="text-dark-puce font-title uppercase text-sm hover:text-cardinal"
              >
                <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </header>

        <div class="flex flex-col items-center text-center mb-[3.56rem]">
          <div class="max-w-[33.5rem] h-[6.44rem] mb-6">
            <nuxt-icon name="wholesum" filled />
          </div>
          <p class="font-title text-[2.5rem] text-outer-space mb-6">
            Everything you do counts
          </p>
        </div>
        <div
          class="flex gap-6 justify-center items-center mb-[2.27rem] max-w-[34.5625rem] w-full mx-auto left-[50%] -translate-x-[50%] absolute"
        >
          <div class="flex-1">
            <ShieLink to="/auth/signup" color="cardinal" class="!bg-crayola">
              Start Now
            </ShieLink>
          </div>
          <div class="flex-1">
            <ShieLink variant="secondary" to="/auth/login" class="!bg-white">
              Sign In
            </ShieLink>
          </div>
        </div>
      </section>
    </div>
    <div
      class="border-b border-dotted border-dark-puce pt-[6.31rem] pb-[7.44rem]"
    >
      <section class="shie-container">
        <div class="max-w-[40.3125rem] mx-auto text-center">
          <p
            class="mb-[2.8125rem] text-[2rem] uppercase text-dark-puce font-subtitle"
          >
            Give shape to your ideas
          </p>
          <p
            class="font-title text-[1.5rem] text-outer-space leading-[3rem] mb-[4.125rem]"
          >
            Experienced well-being starts with action in the direction of your
            goals.
          </p>
          <div>
            <button
              class="w-[3.4375rem] rounded-xl h-[3.4375rem] bg-licorice inline-block p-4 bounce-top"
            >
              <nuxt-icon name="chevron-down" filled class="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
    <div class="border-b border-dotted border-dark-puce">
      <LandingFeatures />
    </div>
    <div
      class="border-b border-dotted border-dark-puce pt-[11.125rem] pb-[16.625rem]"
    >
      <div class="flex flex-col w-full gap-[15.625rem] justify-center">
        <TimeManagement />
        <SharingCaring />
        <ExtendWorkflow />
        <ChartNewPath />
      </div>
    </div>

    <div class="border-t-2 border-dotted w-full border-dark-puce py-[6.25rem]">
      <LandingPricing />
    </div>
  </LandingLayout>
</template>

<style scoped lang="scss">
.feature {
  @apply flex flex-col min-w-[13.53613rem];

  &-top-half {
    @apply -mb-1;
    &:hover {
      .feature-bg {
        @apply opacity-100;
      }
    }
  }
  &-icon,
  &-text {
    @apply absolute z-[2] left-[50%]  -translate-x-[50%] text-center;
  }
  &-icon {
    @apply bottom-[1.5rem];
  }
  &-text {
    @apply top-[1rem] text-white text-[1.375rem] leading-[2.5rem];
  }
}
</style>
