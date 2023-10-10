<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";
import ResourceCard from "~/components/resources/ResourceCard.vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";

type Tag = {
  title: string;
  resources: string[];
};
type Resource = {
  title: string;
  description: string;
  duration: number;
};
const tags: Tag[] = [
  {
    title: "EDUCATION",
    resources: [
      "DESIGN",
      "PROJECT DEVELOPMENT",
      "SOFT. DEVELOPMENT",
      "BUSINESS & MONEY",
    ],
  },
  {
    title: "SELF CARE",
    resources: ["CLASSROOM", "READING", "WRITING", "STEM"],
  },
  {
    title: "SOCIAL",
    resources: [
      "TEST PREP",
      "SCIENCE",
      "TECHNOLOGY & ENGINEERING",
      "MATHEMATICS",
    ],
  },
  {
    title: "FITNESS",
    resources: [
      "TEST PREP",
      "SCIENCE",
      "TECHNOLOGY & ENGINEERING",
      "MATHEMATICS",
    ],
  },
];
const categories = ["EDUCATION", "SELF CARE", "SOCIAL", "FITNESS"];
const activeCtg = ref("EDUCATION");
const activeTag = ref("");
const activeTags = computed(() => {
  if (activeCtg.value) {
    return tags.find((tag) => tag.title === activeCtg.value);
  }
  return [];
});
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
  {
    title: "Personal Shield & Work Style",
    description:
      "We're creating space for you to do some individual reflecting on how you like to work and comm...",
    duration: 90,
  },
  {
    title: "Personal Shield & Work Style",
    description:
      "We're creating space for you to do some individual reflecting on how you like to work and comm...",
    duration: 90,
  },
  {
    title: "Personal Shield & Work Style",
    description:
      "We're creating space for you to do some individual reflecting on how you like to work and comm...",
    duration: 90,
  },
  {
    title: "Personal Shield & Work Style",
    description:
      "We're creating space for you to do some individual reflecting on how you like to work and comm...",
    duration: 90,
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
  <DashboardLayout title="Library | Resources">
    <div class="max-w-[69.25rem] mx-auto pb-[10rem]">
      <p
        class="text-dark-puce font-title uppercase leading-[1.125rem] text-base"
      >
        LIBRARY/ <span class="text-dark">GOALS</span>
      </p>
      <article class="flex gap-[6.56rem] justify-center">
        <section class="hidden md:flex flex-col gap-[6.38rem] pt-4">
          <div class="sticky bg-conditioner z-[3] top-[3rem] pt-[4rem]">
            <p class="text-dark-puce font-title uppercase leading-6 mb-6">
              Filter
            </p>
            <div class="flex flex-col gap-8">
              <div
                v-for="(tag, i) in activeTags?.resources || []"
                :key="`cty-${i}`"
                class="w-full"
              >
                <label
                  :for="`cty-${i}`"
                  class="resource-tag__label"
                  :class="{
                    'resource-tag__label--checked': tag === activeTag,
                  }"
                >
                  <nuxt-icon
                    name="ankh"
                    filled
                    :class="`${tag === activeTag ? 'inline-block' : 'hidden'}`"
                  />{{ tag }}
                </label>
                <input
                  :id="`cty-${i}`"
                  v-model="activeTag"
                  type="radio"
                  class="hidden resource-tag__input"
                  name="tag"
                  :value="tag"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            class="flex flex-col lg:flex-row flex-wrap gap-4 mb-[2.31rem] items-center sticky bg-conditioner top-[2rem] z-[3] pt-[4rem]"
          >
            <ShieButton
              v-for="(category, i) in categories"
              :key="`ctg-${i}`"
              class="flex-1 whitespace-nowrap !text-dark-puce"
              :class="`${
                activeCtg === category
                  ? '!bg-transparent !border-x-0 !border-t-0 !border-cardinal !border-b-4 !rounded-none'
                  : '!bg-white !border-[#4D3B3C]'
              }`"
              @click="activeCtg = category"
            >
              {{ category }}
            </ShieButton>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center"
          >
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
  </DashboardLayout>
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
