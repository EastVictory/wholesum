<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
import ResourceCard from "~/components/resources/ResourceCard.vue";

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
    title: "CREATIVES",
    resources: [
      "DESIGN",
      "PROJECT DEVELOPMENT",
      "SOFT. DEVELOPMENT",
      "BUSINESS & MONEY",
    ],
  },
  {
    title: "STUDENTS",
    resources: ["CLASSROOM", "READING", "WRITING", "STEM"],
  },
  {
    title: "EDUCATORS",
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
];
</script>

<template>
  <LandingLayout>
    <Head>
      <Title>Library</Title>
    </Head>
    <div class="max-w-[70.2475rem] mx-auto pt-[3.38rem] pb-[10rem]">
      <article class="flex gap-[6.56rem] justify-center">
        <section class="hidden md:flex flex-col gap-[6.38rem] pt-4">
          <div v-for="(tag, i) in tags" :key="`tag-${i}`">
            <p class="text-dark-puce font-title uppercase leading-6 mb-6">
              {{ tag.title }}
            </p>
            <div class="flex flex-col space-y-6">
              <button
                v-for="(cResource, x) in tag.resources"
                :key="`cre-${x}`"
                class="text-xxs text-dark font-medium text-center border-2 border-taupe-gray border-dashed rounded p-2"
              >
                {{ cResource }}
              </button>
            </div>
          </div>
        </section>
        <section>
          <div
            class="flex flex-col lg:flex-row flex-wrap gap-4 mb-[2.31rem] items-center"
          >
            <ShieButton
              v-for="(category, i) in categories"
              :key="`ctg-${i}`"
              class="flex-1 whitespace-nowrap !text-dark-puce text-xs"
              :class="`${
                activeCtg === category
                  ? '!bg-crayola'
                  : '!bg-white !border-[#D9D9D9]'
              }`"
              @click="activeCtg = category"
            >
              {{ category }}
            </ShieButton>
          </div>
          <p class="font-title text-dark-puce leading-6 mb-[2.25rem]">
            Recommended
          </p>
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
  </LandingLayout>
</template>

<style scoped lang="scss"></style>
