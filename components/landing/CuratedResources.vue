<script setup lang="ts">
import ShieLink from "~/components/buttons/ShieLink.vue";
import CuratedResource from "~/components/landing/CuratedResource.vue";

type Resource = {
  icon: string;
  title: string;
};
type CResource = {
  title: string;
  description: string;
  resources: Resource[];
};
const resources: CResource[] = [
  {
    title: "Grow Young",
    description:
      "New learnings come with a price, spend time learning to grow young.",
    resources: [
      {
        icon: "custom-triangle",
        title: "BOOK NOTES: CHAPTER 12: IMPORTS; ALEX MONTAGU on Growing Young",
      },
      {
        icon: "custom-triangle",
        title: "THE To Do List",
      },
      {
        icon: "custom-triangle",
        title:
          "BOOK NOTES: The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
      },
      {
        icon: "custom-triangle",
        title: "DTF NOTES: IT Heals",
      },
    ],
  },
  {
    title: "Sociality",
    description: "Sociality means involvement, interaction with others.",
    resources: [
      {
        icon: "custom-triangle",
        title: "BOOK NOTES: CHAPTER 12: IMPORTS; ALEX MONTAGU on Growing Young",
      },
      {
        icon: "custom-triangle",
        title: "THE To Do List",
      },
      {
        icon: "custom-triangle",
        title:
          "BOOK NOTES: The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results",
      },
      {
        icon: "custom-triangle",
        title: "DTF NOTES: IT Heals",
      },
    ],
  },
];
</script>

<template>
  <section class="max-w-[75.95rem] mx-auto">
    <div class="flex flex-row justify-between items-center mb-[3.36rem]">
      <h2 class="text-dark font-subtitle text-[2.5rem]">
        Start right now with curated resource
      </h2>
      <div class="flex gap-2">
        <button
          class="text-black border-2 border-dark-puce rounded px-2 py-[0.3125rem] hover:text-cardinal bg-white"
        >
          <nuxt-icon name="arrow-left" class="no-fill" />
        </button>
        <button
          class="text-black border-2 border-dark-puce rounded px-2 py-[0.3125rem] hover:text-cardinal bg-white"
        >
          <nuxt-icon name="arrow-right" class="no-fill" />
        </button>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row overflow-x-auto mb-[7.45rem] gap-6">
      <CuratedResource
        v-for="resource in resources"
        :key="resource.title"
        :title="resource.title"
        :description="resource.description"
        :resources="resource.resources"
      />
    </div>
    <div class="flex gap-[3.56rem] justify-center items-center mb-[2.27rem]">
      <div>
        <ShieLink icon="white-triangle">Start Now</ShieLink>
      </div>
      <div>
        <ShieLink variant="secondary"> VISIT FULL LIBRARY </ShieLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
