<script setup lang="ts">
import DailyCard from "~/components/ui/DailyCard.vue";
type Daily = {
  title: string;
  description: string;
  image: string;
};
const dailies: Daily[] = [
  {
    title: "EDUCATION",
    description: "Improve your knowledge and skills.",
    image: "education",
  },
  {
    title: "SELF CARE",
    description: "Improve your physical and mental health.",
    image: "self-care",
  },
  {
    title: "SOCIAL",
    description: "Build relationships and reduce stress.",
    image: "social",
  },
  {
    title: "FITNESS",
    description: "Improve your fitness and reduce your risk of disease.",
    image: "100-percent",
  },
];
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="max-w-2xl mx-auto py-8">
      <p class="font-title text-[1.25rem] text-black mb-2">
        Make wholesome plans
      </p>
      <p class="font-light text-[0.8125rem] text-dark mb-8">
        Setting goals is making a commitment to your future self.
      </p>
      <section class="grid grid-cols-2 gap-4 flex-wrap">
        <DailyCard
          v-for="daily in dailies"
          :key="daily.title"
          :title="daily.title"
          :image="daily.image"
          :description="daily.description"
        />
      </section>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
