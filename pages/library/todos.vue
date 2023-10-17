<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import TodoCard from "~/components/library/TodoCard.vue";

type RecentTask = {
  id: number;
  text: string;
  status: string;
  category: string;
  createdAt: string;
  duration: number;
  notes: number;
};

const statuses = ["DRAFT", "ONGOING", "COMPLETED"];
const activeStatus = ref("");
const selectedTodos = ref<Array<number>>([]);
const recentTasks: RecentTask[] = [
  {
    id: 1,
    text: "Complete User Interface Design",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
  {
    id: 2,

    text: "Conduct User Interviews",
    status: "ONGOING",
    category: "SOCIALITY",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
  {
    id: 3,

    text: "Test Bug Fixes",
    status: "ONGOING",
    category: "EDUCATION",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
  {
    id: 4,

    text: "Update Database Schema",
    status: "ARCHIVED",
    category: "SELF CARE",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
  {
    id: 5,

    text: "Write Documentation",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
  {
    id: 6,

    text: "Plan Team Building Workshop",
    status: "ONGOING",
    category: "FITNESS",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
  {
    id: 7,

    text: "Code Refactoring",
    status: "ONGOING",
    category: "SOCIALITY",
    createdAt: "3 mins ago",
    duration: 44,
    notes: 10,
  },
];

const handleStatusSelect = (status: string) => {
  activeStatus.value = status === activeStatus.value ? "" : status;
};

const handleSelectAll = () => {
  const ids = recentTasks.map((rTask) => rTask.id);
  selectedTodos.value = selectedTodos.value.length < ids.length ? ids : [];
};

const filteredTasks = computed(() => {
  if (activeStatus.value) {
    return recentTasks.filter((rTask) => rTask.status === activeStatus.value);
  }
  return recentTasks;
});
</script>

<template>
  <DashboardLayout title="Library | Tasks">
    <div class="max-w-[69.25rem] mx-auto pb-[4rem]">
      <p
        class="text-dark-puce font-title uppercase leading-[1.125rem] text-base"
      >
        LIBRARY / <span class="text-dark">ALL TODO</span>
      </p>
      <article class="max-w-[37.1875rem] mx-auto">
        <section
          class="sticky bg-conditioner top-[2rem] z-[3] pt-[4rem] mb-[2.31rem]"
        >
          <div
            class="flex flex-col lg:flex-row flex-wrap gap-4 mb-[2.31rem] items-center justify-between"
          >
            <div class="flex flex-col lg:flex-row flex-wrap gap-4">
              <div class="">
                <input
                  id="checkboxNoLabel"
                  class="task-checkbox"
                  type="checkbox"
                  :checked="selectedTodos.length > 0"
                  aria-label="..."
                  @click="handleSelectAll"
                />
              </div>
              <div
                v-if="selectedTodos.length"
                class="flex flex-col lg:flex-row flex-wrap gap-4"
              >
                <ShiePillButton class="w-[8.4375rem]">
                  Archive TODO
                </ShiePillButton>
                <ShiePillButton class="w-[8.4375rem]">
                  MArk as done
                </ShiePillButton>
              </div>
              <div v-else class="flex flex-col lg:flex-row flex-wrap gap-4">
                <ShiePillButton
                  v-for="(status, i) in statuses"
                  :key="`status-${i}`"
                  class="min-w-[5.8125rem]"
                  :class="`${
                    activeStatus === status ? '!bg-dark-puce !text-white' : ''
                  }`"
                  @click="handleStatusSelect(status)"
                >
                  {{ status }}
                </ShiePillButton>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col min-h-[60vh] justify-between">
          <div class="flex flex-col gap-4">
            <div
              v-for="(task, i) in filteredTasks"
              :key="i"
              class="flex gap-2 items-center"
            >
              <div class="">
                <input
                  id="checkboxNoLabel"
                  v-model="selectedTodos"
                  class="task-checkbox"
                  type="checkbox"
                  :value="`todo-${i}`"
                  aria-label="..."
                />
              </div>
              <TodoCard :todo="task" />
            </div>
          </div>
          <div class="mt-[1.56rem] flex justify-between items-center">
            <p class="text-black font-medium text-sm">Page 1 of 12</p>
            <div class="flex gap-4 items-center">
              <p class="text-black font-medium text-sm whitespace-nowrap">
                1-8 of 50
              </p>
              <button class="p-2">
                <nuxt-icon name="chevron-left" filled />
              </button>
              <button class="p-2">
                <nuxt-icon name="chevron-right" filled />
              </button>
            </div>
          </div>
        </section>
      </article>
    </div>
  </DashboardLayout>
</template>

<style scoped lang="scss">
.task-checkbox {
  @apply relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-cardinal checked:bg-cardinal checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12]  focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100  checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-cardinal dark:checked:bg-cardinal;
}
</style>
