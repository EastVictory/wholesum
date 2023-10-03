<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ResourceCard from "~/components/resources/ResourceCard.vue";

type Resource = {
  title: string;
  description: string;
  duration: number;
};
const resources: Resource[] = [
  {
    title: "Personal Shield",
    description:
      "To share who you are and improve ways of working with team members.",
    duration: 45,
  },
  {
    title: "Work Styles",
    description:
      "We're creating space for you to do some individual reflecting on how you like to work and comm...",
    duration: 35,
  },
  {
    title: "Personal Shield & Work Style",
    description:
      "We're creating space for you to do some individual reflecting on how you like to work and comm...",
    duration: 90,
  },
];
</script>

<template>
  <LandingLayout>
    <Head>
      <Title>Resource</Title>
    </Head>
    <div class="shie-container pt-[3.6rem]">
      <article class="mb-[5.62rem] max-w-[53.375rem] mx-auto">
        <p class="flex items-center gap-2 mb-[3.63rem]">
          <nuxt-link to="/resources" class="h-8 -mb-2">
            <nuxt-icon name="chevron-left" filled />
          </nuxt-link>
          <span class="text-dark font-title h-[1.125rem]"> CATEGORY /</span>
          <span class="text-dark-puce font-title h-[1.125rem]">EDUCATION</span>
        </p>
        <section
          class="mx-auto max-w-[53.375rem] bg-[#B2C4C3] py-[3.55rem] shie-black-border rounded-[1.375rem] lg:p-[3rem] mb-[3.56rem]"
        >
          <p
            class="font-title text-2xl leading-[3.3rem] text-dark uppercase mb-8"
          >
            Personal Shield & Work Style
          </p>
          <p class="text-dark text-2xl leading-[2.5rem] mb-6">
            To share who you are and improve ways of working with team members.
          </p>
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <ShiePillButton class="w-[8.4375rem]"> EDUCATION </ShiePillButton>
              <ShiePillButton class="w-[8.4375rem]">
                25 MINS SESSION
              </ShiePillButton>
              <ShiePillButton class="w-[8.4375rem]">
                5 MINS BREAK
              </ShiePillButton>
            </div>
            <div>
              <ShieButton color="bg-crayola" class="!bg-crayola !text-dark">
                <span class="mr-4"> Start TO DO </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M15.1905 13.11C15.3229 13.3756 15.3852 13.6705 15.3717 13.9669C15.3581 14.2633 15.269 14.5513 15.1129 14.8037C14.9568 15.056 14.7388 15.2642 14.4796 15.4086C14.2204 15.5531 13.9286 15.6289 13.6319 15.6289L1.8555 15.6289C1.55879 15.6289 1.26701 15.5531 1.00782 15.4087C0.74863 15.2642 0.530636 15.056 0.374517 14.8037C0.218397 14.5513 0.12933 14.2633 0.11576 13.9669C0.10219 13.6705 0.164568 13.3756 0.296979 13.11L6.18723 1.33157C6.3316 1.04233 6.55371 0.799037 6.82864 0.628988C7.10357 0.458939 7.42045 0.368861 7.74372 0.368861C8.06699 0.368861 8.38386 0.458939 8.6588 0.628988C8.93373 0.799037 9.15584 1.04233 9.30021 1.33157L15.1905 13.11Z"
                    fill="#4D3B3C"
                  />
                </svg>
              </ShieButton>
            </div>
          </div>
        </section>
        <section>
          <p class="font-title text-dark-puce leading-6 mb-[2.25rem]">
            Recommended
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            <ResourceCard
              v-for="(resource, i) in resources"
              :key="`res-${i}`"
              :title="resource.title"
              :duration="resource.duration"
              :description="resource.description"
              to="/resources/1"
            />
          </div>
        </section>
      </article>
    </div>
  </LandingLayout>
</template>

<style scoped lang="scss">
.resource-tag__label {
  @apply border-2 border-dashed border-taupe-gray rounded-[0.36331rem] text-xxs font-medium text-dark leading-[0.57rem] inline-block text-center p-2.5 transition-all cursor-pointer w-[9rem];
  &:hover {
    @apply text-cardinal;
  }
  &--checked {
    @apply inline-flex gap-[1.91rem] justify-center items-center;
    @apply border-solid border-outer-space;
  }
}
.resource-tag__input:checked {
  .resource-tag__label {
    @apply border-solid;
  }
}
</style>
