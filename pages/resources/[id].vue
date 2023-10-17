<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ResourceCard from "~/components/resources/ResourceCard.vue";
import ShieLink from "~/components/buttons/ShieLink.vue";

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
              <ShieLink
                to="/countdown"
                color="bg-crayola"
                class="!bg-crayola !text-dark"
              >
                <span class="mr-4 text-base"> Start TO DO </span>
              </ShieLink>
            </div>
          </div>
        </section>
        <section>
          <p class="font-title text-dark-puce leading-6 mb-[2.25rem]">
            Similar resources
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
