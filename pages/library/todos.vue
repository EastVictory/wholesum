<script setup lang="ts">
import { Ref } from "vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import TodoCard from "~/components/library/TodoCard.vue";
import ShieDropdown from "~/components/buttons/ShieDropdown.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";

type RecentTask = {
  id: number;
  text: string;
  status: string;
  category: string;
  createdAt: string;
  duration: number;
  notes: number;
};
type FilterAction = {
  [key: string]: Boolean;
};
const statuses = ["ALL", "DRAFT", "ONGOING", "COMPLETED"];
const tempSearch = ref("");
const search = ref("");
const sortBy = ref("");
const activeStatus = ref("ALL");
const selectedTodos = ref<Array<number>>([]);
const actions = ref({
  search: false,
  edit: false,
});
const filterActions: Ref<FilterAction> = ref({
  title: false,
  created: false,
  updated: false,
});
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
  activeStatus.value = status;
};

const handleSelectAll = () => {
  const ids = recentTasks.map((rTask) => rTask.id);
  selectedTodos.value = selectedTodos.value.length < ids.length ? ids : [];
};

const resetSearch = () => {
  search.value = "";
  tempSearch.value = "";
};
const toggleAction = (action: keyof typeof actions.value) => {
  resetSearch();
  actions.value[action] = !actions.value[action];
};
const toggleFilterAction = (action: keyof typeof filterActions.value) => {
  resetSearch();
  Object.keys(filterActions.value).forEach(
    (key: keyof typeof filterActions.value) => {
      if (key === action) {
        filterActions.value[key] = !filterActions.value[key];
      } else {
        filterActions.value[key] = false;
      }
    }
  );
};

const activeFilter = computed(() => {
  const filter = Object.entries(filterActions.value).find((entry) => {
    const key: keyof FilterAction = entry[0];
    return filterActions.value[key];
  });
  return (filter && filter[0]) || "";
});

const filteredTasks = computed(() => {
  let filtered = recentTasks;
  if (activeStatus.value && activeStatus.value !== "ALL") {
    filtered = recentTasks.filter(
      (rTask) => rTask.status === activeStatus.value
    );
  }
  if (search.value) {
    filtered = filtered.filter((rTask) =>
      rTask.text.toLowerCase().includes(search.value)
    );
  }
  if (sortBy.value) {
    filtered = [...filtered].sort((a, b) => {
      if (sortBy.value === "z-a") {
        return b.text.toLowerCase().localeCompare(a.text.toLowerCase());
      }
      return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
    });
  }
  return filtered;
});
</script>

<template>
  <DashboardLayout title="Library | Tasks">
    <div class="max-w-[69.25rem] mx-auto pb-[4rem]">
      <div class="flex justify-between items-center">
        <p
          class="text-dark-puce font-title uppercase leading-[1.125rem] text-base"
        >
          LIBRARY / <span class="text-dark">ALL TODO</span>
        </p>
        <div class="flex gap-2 items-center">
          <ShiePillButton
            v-for="[action, value] in Object.entries(actions)"
            :key="action"
            :class="{ ['!bg-crayola']: value }"
            @click="toggleAction(action as keyof typeof actions)"
          >
            {{ action }}
          </ShiePillButton>
          <ShieDropdown
            :position="''"
            auto-close="true"
            button-class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs hover:bg-crayola h-[1.5rem] items-center inline-flex justify-center whitespace-nowrap"
          >
            <template #default>
              <span
                class="h-4"
                :class="{
                  'bg-dark-puce': activeFilter,
                  '!text-conditioner': activeFilter,
                }"
              >
                {{ activeFilter || "filter" }}
              </span>
            </template>
            <template #options>
              <ul class="min-w-[14.3125rem]">
                <li
                  v-for="[action] in Object.entries(filterActions)"
                  :key="action"
                >
                  <button
                    class="hover:bg-crayola rounded tex-sm font-medium leading-[2.5rem] text-black px-4 py-4 uppercase w-full text-left"
                    @click="
                      toggleFilterAction(action as keyof typeof filterActions)
                    "
                  >
                    {{ action }}
                  </button>
                </li>
              </ul>
            </template>
          </ShieDropdown>
        </div>
      </div>

      <article class="max-w-[37.1875rem] mx-auto">
        <section
          class="sticky bg-conditioner top-[2rem] z-[3] pt-[4rem] mb-[2.31rem]"
        >
          <div
            class="flex flex-col lg:flex-row flex-wrap gap-4 items-center justify-between"
          >
            <div v-if="actions.edit" class="">
              <input
                id="checkboxNoLabel"
                class="task-checkbox"
                type="checkbox"
                :checked="selectedTodos.length > 0"
                aria-label="..."
                @click="handleSelectAll"
              />
            </div>
            <ShieButton
              v-for="(status, i) in statuses"
              :key="`status-${i}`"
              class="flex-1 whitespace-nowrap !text-dark-puce !max-w-[7.99019rem]"
              :class="`${
                activeStatus === status
                  ? '!bg-transparent !border-x-0 !border-t-0 !border-cardinal !border-b-4 !rounded-none'
                  : '!bg-white !border-[#4D3B3C]'
              }`"
              @click="handleStatusSelect(status)"
            >
              {{ status }}
            </ShieButton>
          </div>
          <div
            class="flex flex-col lg:flex-row flex-wrap gap-4 mb-[2.31rem] items-center justify-between"
          >
            <div class="flex flex-col lg:flex-row flex-wrap gap-4">
              <div
                v-if="selectedTodos.length"
                class="flex flex-col lg:flex-row flex-wrap gap-4"
              >
                <ShiePillButton class="w-[8.4375rem]">
                  Archive TODO
                </ShiePillButton>
                <ShiePillButton class="w-[8.4375rem]">
                  Mark as done
                </ShiePillButton>
              </div>
            </div>
          </div>
          <div v-if="actions.search">
            <form
              class="flex border-b-2 border-dark-puce pl-2.5"
              :class="{ 'rounded-br': tempSearch }"
              @submit.prevent="search = tempSearch"
            >
              <input
                v-model="tempSearch"
                type="text"
                class="bg-transparent w-full focus:outline-0 text-dark-puce placeholder:text-dark-puce"
                placeholder="Search"
              />
              <button class="p-3" @click="resetSearch">
                <nuxt-icon name="close"></nuxt-icon>
              </button>
              <ShieButton
                v-if="tempSearch"
                class="whitespace-nowrap !text-dark-puce !max-w-[9.6875rem] !bg-white !border-[#4D3B3C] !border-2 !rounded mb-[-1px]"
              >
                Search
              </ShieButton>
            </form>
          </div>
          <div
            v-if="filterActions.title"
            class="flex flex-col lg:flex-row flex-wrap gap-4"
          >
            <ShiePillButton
              class="w-[8.8125rem]"
              :class="{ '!bg-crayola': sortBy === 'a-z' }"
              @click="sortBy = 'a-z'"
            >
              A - Z
            </ShiePillButton>
            <ShiePillButton
              class="w-[8.8125rem]"
              :class="{ '!bg-crayola': sortBy === 'z-a' }"
              @click="sortBy = 'z-a'"
            >
              Z - A
            </ShiePillButton>
          </div>
          <div
            v-if="filterActions.created"
            class="flex flex-col lg:flex-row flex-wrap gap-4"
          >
            <ShiePillButton class="w-[8.8125rem]">
              OLDEST FIRST
            </ShiePillButton>
            <ShiePillButton class="w-[8.8125rem]">
              NEWEST FIRST
            </ShiePillButton>
          </div>
        </section>
        <section class="flex flex-col min-h-[60vh] justify-between">
          <div class="flex flex-col gap-4">
            <div
              v-for="(task, i) in filteredTasks"
              :key="i"
              class="flex gap-2 items-center"
            >
              <div v-if="actions.edit">
                <input
                  id="checkboxNoLabel"
                  v-model="selectedTodos"
                  class="task-checkbox"
                  type="checkbox"
                  :value="task.id"
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
