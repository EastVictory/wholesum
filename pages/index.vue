<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import ShieLink from "~/components/buttons/ShieLink.vue";
import InfoSection from "~/components/landing/InfoSection.vue";
import StartBanner from "~/components/landing/StartBanner.vue";
import TestimonialsSection from "~/components/landing/TestimonialsSection.vue";
import CuratedResources from "~/components/landing/CuratedResources.vue";
type Link = {
  name: string;
  href: string;
};
const links: Link[] = [
  { name: "Our Story", href: "/story" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Library", href: "/library" },
];
</script>

<template>
  <LandingLayout>
    <div class="shie-container pt-6">
      <section
        class="max-w-[86.25rem] mx-auto w-full rounded-[1.375rem] border-2 border-dark-puce p-6 bg-white mb-[3.19rem]"
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
          <p class="font-subtitle text-[2.5rem] text-outer-space mb-6">
            Life's Worksheet
          </p>
          <p class="text-outer-space">FOCUS & GET STUFF DONE WITH EASE</p>
        </div>
        <div
          class="flex gap-[3.56rem] justify-center items-center mb-[2.27rem]"
        >
          <div>
            <ShieLink icon="white-triangle">Start Now</ShieLink>
          </div>
          <div>
            <ShieLink icon="bar-arrow-right" variant="secondary">
              Sign In
            </ShieLink>
          </div>
        </div>
      </section>
    </div>
    <div
      class="border-b border-dotted border-dark-puce pt-[6.31rem] pb-[7.44rem]"
    >
      <section class="shie-container pl-[8.44rem] w-4/5">
        <p class="mb-[2.88rem] text-2xl font-title uppercase text-black">
          Where Ideas Take Shape
        </p>
        <p class="font-subtitle text-[3rem] text-dark-puce leading-[normal]">
          Transform your creative visions into reality, move beyond to-do lists
          and turn your goals into accomplishment with Wholesum.
        </p>
      </section>
    </div>
    <InfoSection
      title="Knock off the seconds in style"
      image="/images/png/custom-timer.png"
      description="Make each minute you get count, spend time in style with custom timer user interface."
    />
    <InfoSection
      title="Nuanced
       insights."
      image="/images/png/insights-graph.png"
      description="Take a closer look at how you spend your time."
      variant="alternate"
    />
    <InfoSection
      title="Take notes while at it."
      image="/images/png/abc.png"
      description="Save thoughts, quotes and moments to your worksheet."
    />
    <InfoSection
      title="Take your content
      with you."
      image="/images/png/doc-yellow.png"
      description="Download .txt, docx & pdf files to extend your workflow."
      variant="alternate"
    />
    <div
      class="border-b border-dotted border-dark-puce pt-[9.38rem] pb-[7.44rem]"
    >
      <StartBanner class="mb-[10.19rem]" />
      <CuratedResources />
    </div>
    <TestimonialsSection />
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
