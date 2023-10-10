<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import TaskCard from "~/components/library/TaskCard.vue";

type RecentTask = {
  text: string;
  status: string;
  category: string;
  createdAt: string;
};

const categories = ["EDUCATION", "SELF CARE", "SOCIALITY", "FITNESS"];
const statuses = ["DRAFT", "ONGOING", "COMPLETED"];
const activeCtg = ref("EDUCATION");
const activeStatus = ref("");

const recentTasks: RecentTask[] = [
  {
    text: "Complete User Interface Design",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
  },
  {
    text: "Conduct User Interviews",
    status: "ONGOING",
    category: "SOCIALITY",
    createdAt: "3 mins ago",
  },
  {
    text: "Test Bug Fixes",
    status: "ON GOING",
    category: "EDUCATION",
    createdAt: "3 mins ago",
  },
  {
    text: "Update Database Schema",
    status: "ARCHIVED",
    category: "SELF CARE",
    createdAt: "3 mins ago",
  },
  {
    text: "Write Documentation",
    status: "DRAFT",
    category: "EDUCATION",
    createdAt: "3 mins ago",
  },
  {
    text: "Plan Team Building Workshop",
    status: "ONGOING",
    category: "FITNESS",
    createdAt: "3 mins ago",
  },
  {
    text: "Code Refactoring",
    status: "ONGOING",
    category: "SOCIALITY",
    createdAt: "3 mins ago",
  },
];

const filteredTasks = computed(() => {
  if (activeCtg.value) {
    const filtered = recentTasks.filter(
      (rTask) => rTask.category === activeCtg.value
    );
    if (activeStatus.value) {
      return filtered.filter((rTask) => rTask.status === activeStatus.value);
    }
    return filtered;
  }
  return recentTasks;
});

const handleStatusSelect = (status: string) => {
  activeStatus.value = status === activeStatus.value ? "" : status;
};
</script>

<template>
  <DashboardLayout title="Library | Tasks">
    <div class="max-w-[69.25rem] mx-auto pb-[4rem]">
      <p
        class="text-dark-puce font-title uppercase leading-[1.125rem] text-base"
      >
        LIBRARY / <span class="text-dark">TASKS</span>
      </p>
      <article class="max-w-[37.1875rem] mx-auto">
        <section
          class="sticky bg-conditioner top-[2rem] z-[3] pt-[4rem] mb-[2.31rem]"
        >
          <div
            class="flex flex-col lg:flex-row gap-[1.76rem] mb-[2.31rem] items-center justify-center"
          >
            <ShieButton
              v-for="(category, i) in categories"
              :key="`ctg-${i}`"
              class="flex-1 whitespace-nowrap !text-dark-puce !max-w-[7.99019rem]"
              :class="`${
                activeCtg === category
                  ? '!bg-transparent !border-x-0 !border-t-0 !border-cardinal !border-b-4 !rounded-none'
                  : '!bg-white !border-[#4D3B3C]'
              }`"
              @click="activeCtg = category"
            >
              {{ category }}
            </ShieButton>
          </div>
          <div
            class="flex flex-col lg:flex-row flex-wrap gap-4 mb-[2.31rem] items-center justify-between"
          >
            <div class="flex flex-col lg:flex-row flex-wrap gap-4">
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
            <p v-if="activeStatus && filteredTasks.length">
              {{ filteredTasks.length }} tasks filtered
            </p>
          </div>
        </section>
        <section class="flex flex-col min-h-[60vh] justify-between">
          <div class="flex flex-col gap-4">
            <TaskCard
              v-for="(task, i) in filteredTasks"
              :key="i"
              :task="task"
            />
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
.resource-tag__label {
  @apply border-2 border-dashed border-taupe-gray rounded-[0.36331rem] text-xxs font-medium text-dark leading-[0.57rem] inline-block text-center p-2.5 transition-all cursor-pointer w-[9rem];
  &:hover {
    @apply text-cardinal;
  }
  &--checked {
    @apply inline-flex gap-[1.91rem] justify-center items-center;
    @apply border-solid border-outer-space;
  }
}
.resource-tag__input:checked {
  .resource-tag__label {
    @apply border-solid;
  }
}
</style>
