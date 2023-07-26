<script setup lang="ts">
import OnboardingCards from "~/components/dashboard/OnboardingCards.vue";
import TrendsView from "~/components/dashboard/TrendsView.vue";
import UpgradeBanner from "~/components/dashboard/UpgradeBanner.vue";
import RecentTasks from "~/components/dashboard/RecentTasks.vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";

type Task = {
  icon: string;
  type: string;
  title: string;
  createdAt: string;
};

const showOnboarding = ref(false);

const tasks: Task[] = [
  {
    icon: "trend-social",
    type: "Stop watch",
    title: "Volunteer @ Thread Together",
    createdAt: "3 mins ago",
  },
  {
    icon: "trend-fitness",
    type: "Stop watch",
    title: "Evening run",
    createdAt: "Yesterday",
  },
  {
    icon: "trend-self-care",
    type: "Timer",
    title: "Pick up Dry Cleaning",
    createdAt: "3 mins ago",
  },
  {
    icon: "trend-education",
    type: "Timer",
    title: "Winter planning",
    createdAt: "Thu 1",
  },
];
</script>

<template>
  <DashboardLayout>
    <section class="max-w-[47.1875rem] mx-auto">
      <div
        class="flex justify-between items-center pb-6 sticky top-[6.25rem] bg-white"
      >
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
        <nuxt-link
          to="/create-task"
          class="btn bg-capri text-dark rounded px-[1.1875rem] py-[0.8125rem] font-medium text-[0.8125rem] normal-case"
        >
          Create a new task
        </nuxt-link>
      </div>
      <OnboardingCards v-if="showOnboarding" />
      <TrendsView class="mt-4" />
      <UpgradeBanner />
      <RecentTasks :tasks="tasks" />
    </section>
  </DashboardLayout>
</template>

<style scoped>
.homepage-main {
}
</style>
