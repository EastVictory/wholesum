<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import EmptyRecentActivity from "~/components/library/EmptyRecentActivity.vue";
import TaskCard from "~/components/library/TaskCard.vue";
type RecentActivity = {
  title: string;
  link: string;
};
type RecentTask = {
  text: string;
  status: string;
  category: string;
  createdAt: string;
};
const recentActivities: RecentActivity[] = [
  { title: "Resources", link: "/library/resources" },
  { title: "Tasks", link: "/library/tasks" },
  { title: "All Todo", link: "/library/todos" },
];
const recentTasks: RecentTask[] = [
  {
    text: "Complete User Interface Design",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
  },
  {
    text: "Test Bug Fixes",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
  },
  {
    text: "Write Documentation",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
  },
];
const streak = 0;
const goals = 0;
</script>

<template>
  <DashboardLayout title="Library">
    <section class="max-w-[36.6875rem] flex w-full gap-6 mx-auto mb-[1.81rem]">
      <div
        class="shie-black-border rounded-[0.9075rem] px-4 py-6 bg-soap flex-1"
      >
        <p
          class="text-[0.99rem] text-dark leading-[1.65rem] font-title mb-4 pr-6 uppercase"
        >
          Weekly Streak
        </p>
        <p
          class="font-title leading-[1.004rem] text-[1.3125rem] text-dark mb-2"
        >
          {{ streak > 0 ? `${streak} days` : 0 }}
        </p>
      </div>
      <div
        class="shie-black-border rounded-[0.9075rem] px-4 py-6 bg-soap flex-1"
      >
        <p
          class="text-[0.99rem] text-dark leading-[1.65rem] font-title mb-4 pr-6 uppercase"
        >
          Daily Goal
        </p>
        <p
          v-if="goals > 0"
          class="font-title leading-[1.004rem] text-[1.3125rem] text-dark mb-2"
        >
          {{ goals }} mins
        </p>
        <nuxt-link
          v-else
          to="/library/goals"
          class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs hover:text-cardinal w-full h-[1.5rem] items-center inline-flex justify-center"
        >
          <span class="h-[0.8125rem]"> Set Goals </span>
        </nuxt-link>
      </div>
      <nuxt-link
        to="/library/todo"
        class="shie-black-border rounded-[0.9075rem] p-4 bg-white flex items-center justify-center hover:border-cardinal transition-all min-w-[8.25rem]"
      >
        <span class="font-title text-base text-dark">New Task</span>
      </nuxt-link>
    </section>

    <section class="max-w-[36.6875rem] w-full gap-6 mx-auto mb-[3rem]">
      <p class="text-base font-title leading-[2rem] uppercase text-dark">
        Trial Progress
      </p>
      <div class="flex gap-2 py-[1.12rem]">
        <div v-for="n in 6" :key="n" class="flex-1">
          <span
            class="bg-[#D9D9D9] rounded-lg h-[1.625rem] inline-block w-full"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-dark font-title text-base leading-8">
          59/60 days left of trial
        </p>
        <button
          class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs pt-2 hover:text-cardinal"
        >
          UPGRADE NOW
        </button>
      </div>
    </section>

    <section
      class="max-w-[36.6875rem] w-full gap-6 mx-auto mb-[2.32rem] flex items-center"
    >
      <p
        class="font-title text-base text-dark uppercase max-w-[8.25rem] text-center"
      >
        Recent Activity
      </p>
      <div class="flex gap-6 flex-1">
        <nuxt-link
          v-for="(recentActivity, i) in recentActivities"
          :key="`rc-${i}`"
          class="shie-black-border rounded-[0.9075rem] p-4 bg-white flex items-center justify-center h-[7.49088rem] flex-1 hover:border-cardinal"
          :to="recentActivity.link"
        >
          <p class="font-title text-base text-dark h-[1rem]">
            {{ recentActivity.title }}
          </p>
        </nuxt-link>
      </div>
    </section>
    <section class="max-w-[36.6875rem] w-full mx-auto">
      <div v-if="recentTasks.length > 0" class="flex flex-col gap-4">
        <TaskCard v-for="(task, i) in recentTasks" :key="i" :task="task" />
      </div>
      <EmptyRecentActivity v-else />
    </section>
  </DashboardLayout>
</template>

<style scoped lang="scss"></style>
