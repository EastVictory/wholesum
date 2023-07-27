<script setup lang="ts">
import RecentTasks from "~/components/dashboard/RecentTasks.vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";

type Task = {
  icon: string;
  type: string;
  title: string;
  status: string;
  createdAt: string;
};

const tasks: Task[] = [
  {
    icon: "trend-social",
    type: "Stop watch",
    title: "Volunteer @ Thread Together",
    createdAt: "3 mins ago",
    status: "ON GOING",
  },
  {
    icon: "trend-fitness",
    type: "Stop watch",
    title: "Evening run",
    createdAt: "Yesterday",
    status: "Draft",
  },
  {
    icon: "trend-self-care",
    type: "Timer",
    title: "Pick up Dry Cleaning",
    createdAt: "3 mins ago",
    status: "completed",
  },
  {
    icon: "trend-education",
    type: "Timer",
    title: "Winter planning",
    createdAt: "Thu 1",
    status: "ON GOING",
  },
];
</script>

<template>
  <DashboardLayout>
    <template #sub-header>
      <section class="bg-[#F5F4F4]">
        <div
          class="max-w-[47.1875rem] mx-auto flex justify-between items-center py-[1.40625rem]"
        >
          <div>
            <p
              class="font-title text-black text-base tracking-[0.04rem] leading-[1.625rem] min-h-[1.875rem]"
            >
              10:18 am &#x2022; May 01, 2023
            </p>
          </div>
          <button class="text-[#4A4A4D] text-base font-light">
            /Quick search
          </button>
        </div>
      </section>
    </template>
    <section class="max-w-[47.1875rem] mx-auto">
      <RecentTasks :tasks="tasks" />
    </section>
  </DashboardLayout>
</template>

<style scoped>
.homepage-main {
}
</style>
