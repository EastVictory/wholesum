<script setup lang="ts">
type Task = {
  id: string;
  icon: string;
  type: string;
  title: string;
  createdAt: string;
};
const props = defineProps<{
  tasks: Task[];
}>();

const categories = ["EDUCATION", "SOCIAL", "SELF CARE", "FITNESS"];

const activities = ["ALL ACTIVITIES", "TIMER", "STOPWATCH"];
const selectedTasks = ref<string[]>([]);
const selectTask = (task: Task) => {
  if (selectedTasks.value.includes(task.id)) {
    selectedTasks.value.splice(selectedTasks.value.indexOf(task.id), 1);
  } else {
    selectedTasks.value.push(task.id);
  }
};
const selectAll = () => {
  const ids = props.tasks.reduce(
    (acc: string[], curr: Task) => [...acc, curr.id],
    []
  );
  if (selectedTasks.value.length === ids.length) {
    selectedTasks.value = [];
  } else {
    selectedTasks.value = [...ids];
  }
};
const selectedAll = computed(() => {
  return selectedTasks.value.length === props.tasks.length;
});
</script>

<template>
  <section class="rounded border border-platinum">
    <div
      class="flex justify-between items-center px-[1.5rem] py-[1.65625rem] border-b border-platinum"
    >
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          class="checkbox h-[0.93306rem] w-[0.93306rem] rounded-[0.16963rem]"
          :checked="selectedAll"
          @click="selectAll"
        />
        <div v-if="selectedAll" class="flex items-center gap-2">
          <button
            class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] h-[2.625rem]"
          >
            Mark as complete
            <nuxt-icon name="round-check" class="no-fill"></nuxt-icon>
          </button>
          <button
            class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] h-[2.625rem]"
          >
            Mark as open
            <nuxt-icon name="round-a" class="no-fill"></nuxt-icon>
          </button>
          <button
            class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] h-[2.625rem]"
          >
            Delete
            <nuxt-icon name="trash" class="no-fill"></nuxt-icon>
          </button>
          <div class="dropdown">
            <label
              tabindex="0"
              class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum leading-[0.57663rem] min-w-[5.625rem] m-1 normal-case text-black"
            >
              Assign new category
              <nuxt-icon name="reload" filled />
            </label>
            <div
              tabindex="0"
              class="dropdown-content z-[1] menu px-4 py-2.5 shadow-[0_0.25rem_0.25rem_0_#E4E4E4] bg-white rounded-box min-w-[15rem]"
            >
              <p class="flex justify-between mb-4">
                <span class="text-taupe-gray text-xxs font-medium">
                  SELECT CATEGORY
                </span>
                <button class="text-dark">
                  <nuxt-icon name="x" class="no-fill" />
                </button>
              </p>
              <ul class="flex flex-col gap-1">
                <li v-for="category in categories" :key="category">
                  <div class="flex px-2.5 py-0 items-center">
                    <button class="text-xxs font-medium text-dark py-2">
                      {{ category }}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else class="flex items-center gap-2">
          <div class="dropdown">
            <label
              tabindex="0"
              class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] m-1"
            >
              <nuxt-icon name="setting" class="no-fill" />

              ALL CATEGORIES
            </label>
            <div
              tabindex="0"
              class="dropdown-content z-[1] menu px-4 py-2.5 shadow-[0_0.25rem_0.25rem_0_#E4E4E4] bg-white rounded-box min-w-[15rem]"
            >
              <p class="flex justify-between mb-4">
                <span class="text-taupe-gray text-xxs font-medium">
                  FILTER BY CATEGORY
                </span>
                <button class="text-dark">
                  <nuxt-icon name="x" class="no-fill" />
                </button>
              </p>
              <ul class="flex flex-col gap-1">
                <li>
                  <div class="flex px-2.5 py-0 items-center">
                    <input
                      :id="`category-all`"
                      type="checkbox"
                      class="checkbox h-[0.6875rem] w-[0.6875rem] rounded-[0.125rem] bg-[#F5F4F4]"
                    />
                    <label
                      :for="`category-all`"
                      class="text-xxs font-medium text-dark py-2"
                    >
                      ALL CATEGORIES
                    </label>
                  </div>
                </li>
                <li v-for="(category, i) in categories" :key="category">
                  <div class="flex px-2.5 py-0 items-center">
                    <input
                      :id="`category-${i}`"
                      type="checkbox"
                      class="checkbox h-[0.6875rem] w-[0.6875rem] rounded-[0.125rem] bg-[#F5F4F4]"
                    />
                    <label
                      :for="`category-${i}`"
                      class="text-xxs font-medium text-dark py-2"
                    >
                      {{ category }}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown">
            <label
              tabindex="0"
              class="rounded p-2.5 text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem] m-1"
            >
              <nuxt-icon name="all-activity" class="no-fill" />

              ALL ACTIVITIES
            </label>
            <div
              tabindex="0"
              class="dropdown-content z-[1] menu px-4 py-2.5 shadow-[0_0.25rem_0.25rem_0_#E4E4E4] bg-white rounded-box w-52"
            >
              <p class="flex justify-between mb-4">
                <span class="text-taupe-gray text-xxs font-medium">
                  FILTER BY ACTIVITY
                </span>
                <button class="text-dark">
                  <nuxt-icon name="x" class="no-fill" />
                </button>
              </p>
              <ul class="flex flex-col gap-1">
                <li v-for="(activity, i) in activities" :key="activity">
                  <div class="flex px-2.5 py-0 items-center">
                    <input :id="`activity-${i}`" type="checkbox" />
                    <label
                      :for="`activity-${i}`"
                      class="text-xxs font-medium text-dark py-2"
                    >
                      {{ activity }}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!selectedAll" class="flex items-center gap-2">
        <p class="text-xxs font-medium">1-50 of 87</p>
        <div class="flex">
          <button class="px-2.5 h-8 inline-flex items-center text-platinum">
            <nuxt-icon
              name="chevron-left"
              class="no-fill h-[0.875rem] w-[0.875rem]"
            />
          </button>
          <button class="px-2.5 h-8 inline-flex items-center text-black">
            <nuxt-icon
              name="chevron-right"
              class="no-fill h-[0.875rem] w-[0.875rem]"
            />
          </button>
        </div>
      </div>
    </div>
    <p
      v-if="selectedAll"
      class="p-2.5 bg-[#F5F4F4] border-b border-platinum flex justify-between"
    >
      <span class="text-sm font-light text-dark">
        All 50 tasks on this page are selected
      </span>
      <button class="text-xxs font-medium underline text-dark">
        Select all Tasks in To Do
      </button>
    </p>
    <div class="tasks-row">
      <div
        v-for="(task, i) in tasks"
        :key="`tasks-${i}`"
        class="flex px-[1.5rem] py-4 justify-between items-center rounded transition-all hover:bg-[#F5F4F4] cursor-pointer"
      >
        <div class="flex items-center gap-3">
          <input
            type="checkbox"
            class="checkbox h-[0.93306rem] w-[0.93306rem] rounded-[0.16963rem]"
            :checked="selectedTasks.includes(task.id)"
            @click="selectTask(task)"
          />
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
  </section>
</template>

<style scoped></style>
