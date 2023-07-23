<script setup lang="ts">
import AllTasks from "~/components/explore/AllTasks.vue";
type Task = {
  id: string;
  icon: string;
  type: string;
  title: string;
  createdAt: string;
};
const tasks: Task[] = [
  {
    id: "1",
    icon: "trend-social",
    type: "Stop watch",
    title: "Volunteer @ Thread Together",
    createdAt: "3 mins ago",
  },
  {
    id: "2",
    icon: "trend-fitness",
    type: "Stop watch",
    title: "Evening run",
    createdAt: "Yesterday",
  },
  {
    id: "3",
    icon: "trend-self-care",
    type: "Timer",
    title: "Pick up Dry Cleaning",
    createdAt: "3 mins ago",
  },
  {
    id: "4",
    icon: "trend-education",
    type: "Timer",
    title: "Winter planning",
    createdAt: "Thu 1",
  },
];
const search = ref("");
const processSubmit = () => {
  navigateTo({ path: "/explore/search", query: { search: search.value } });
};
</script>

<template>
  <div>
    <section class="flex justify-between items-center py-4">
      <p class="font-light text-lg text-dark">All Tasks</p>
      <div class="flex items-center gap-4">
        <nuxt-link
          to="/create-task"
          class="rounded p-[0.62rem] text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] h-[2.625rem]"
        >
          <span class="text-capri">+</span> Create a new task
        </nuxt-link>
        <form
          class="rounded pl-[0.62rem] text-xxs inline-flex justify-center items-center gap-1 border border-platinum normal-case leading-[0.57663rem] min-w-[13.5625rem] h-[2.625rem] focus-within:border-[#9F1D19]"
          @submit.prevent="processSubmit"
        >
          <button type="submit">
            <nuxt-icon name="search" filled />
          </button>
          <input
            v-model="search"
            type="search"
            class="flex-1 h-full py-[0.62rem] focus-visible:outline-0"
            placeholder="Search all tasks"
          />
        </form>
      </div>
    </section>
    <AllTasks :tasks="tasks" />
  </div>
</template>

<style scoped></style>
