<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
const search = ref("");
const route = useRoute();
const statuses = ["ALL STATUS", "OPEN", "COMPLETED"];
const categories = ["EDUCATION", "SOCIAL", "SELF CARE", "FITNESS"];
const goBack = () => {
  navigateTo({ path: "/explore" });
};
type Task = {
  icon: string;
  type: string;
  title: string;
  createdAt: string;
};
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
onMounted(() => {
  search.value = route.query.search as string;
});
</script>

<template>
  <DashboardLayout>
    <div class="max-w-[47.1875rem] mx-auto py-4">
      <form
        class="rounded pl-[0.62rem] text-xxs inline-flex justify-center items-center gap-1 border border-platinum normal-case leading-[0.57663rem] w-full h-[2.625rem] mb-[1.53rem] focus-within:border-[#9F1D19]"
      >
        <button type="button" @click.prevent="goBack">
          <nuxt-icon name="chevron-left" class="text-[#87848A] no-fill" />
        </button>
        <input
          v-model="search"
          type="search"
          class="flex-1 h-full py-[0.62rem] focus-visible:outline-0"
          placeholder="Search all tasks"
        />
      </form>
      <div class="flex justify-between mb-[1.13rem]">
        <ul class="flex gap-3">
          <li
            v-for="(category, i) in categories"
            :key="category"
            class="flex gap-2 items-center min-w-[7.875rem] w-full min-h-[1.875rem] px-2.5"
          >
            <input
              :id="`category-${i}`"
              type="checkbox"
              checked
              class="checkbox h-[0.6875rem] w-[0.6875rem] rounded-[0.125rem] bg-[#F5F4F4]"
            />
            <label
              :for="`category-${i}`"
              class="text-xxs font-medium text-dark py-2"
            >
              {{ category }}
            </label>
          </li>
        </ul>
        <div class="dropdown">
          <label
            tabindex="0"
            class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] m-1"
          >
            <nuxt-icon name="setting" class="no-fill" />

            ALL STATUS
          </label>
          <div
            tabindex="0"
            class="dropdown-content z-[1] menu px-4 py-2.5 shadow-[0_0.25rem_0.25rem_0_#E4E4E4] bg-white rounded-box w-52"
          >
            <p class="flex justify-between mb-4">
              <span class="text-taupe-gray text-xxs font-medium">
                FILTER BY STATUS
              </span>
              <button class="text-dark">
                <nuxt-icon name="x" class="no-fill" />
              </button>
            </p>
            <ul class="flex flex-col gap-1">
              <li v-for="(status, i) in statuses" :key="status">
                <div class="flex px-2.5 py-0 items-center">
                  <input :id="`status-${i}`" type="checkbox" />
                  <label
                    :for="`status-${i}`"
                    class="text-xxs font-medium text-dark py-2"
                  >
                    {{ status }}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p class="text-dark font-light text-lg leading-[1.375rem mb-[1.625rem]">
          All Results
        </p>
        <div class="tasks-row">
          <div
            v-for="(task, i) in tasks"
            :key="`tasks-${i}`"
            class="flex px-[1.5rem] py-4 justify-between items-center rounded transition-all hover:bg-[#F5F4F4] cursor-pointer"
          >
            <div class="flex items-center gap-3">
              <nuxt-icon :name="task.icon" class="no-fill text-[#4D4D4D]" />
              <span
                class="rounded border border-platinum py-2.5 text-[#4D4D4D] font-medium text-xxs w-[4.9375rem] text-center"
              >
                {{ task.type }}
              </span>
              <span class="text-sm">{{ task.title }}</span>
            </div>
            <p class="text-[#4D4D4D] text-xxs">{{ task.createdAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped></style>
