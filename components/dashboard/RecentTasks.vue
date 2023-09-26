<script setup lang="ts">
type Task = {
  icon: string;
  type?: string;
  title: string;
  createdAt: string;
  status: string;
};
defineProps<{
  tasks: Task[];
}>();
</script>

<template>
  <section class="mt-4 rounded border border-platinum pb-6">
    <div
      class="flex justify-between items-center mb-[1.06rem] border-b border-platinum px-6 py-6"
    >
      <p class="text-black">Recent To Dos</p>
      <nuxt-link class="text-sm font-medium underline text-black">
        View all
      </nuxt-link>
    </div>
    <div class="tasks-row px-6">
      <div
        v-for="(task, i) in tasks"
        :key="`tasks-${i}`"
        class="flex p-4 justify-between items-center rounded transition-all hover:bg-[#F5F4F4] cursor-pointer"
      >
        <div class="flex items-center gap-3 flex-1">
          <nuxt-icon
            :name="task.icon"
            class="no-fill text-[#4D4D4D] h-[0.875rem] w-[0.875rem]"
          />
          <span
            v-if="task.type"
            class="rounded border border-platinum py-[0.4375rem] text-[#4D4D4D] font-medium text-xxs w-[4.9375rem] text-center"
          >
            {{ task.type }}
          </span>
          <span class="text-sm">{{ task.title }}</span>
        </div>
        <div class="flex items-center gap-6 min-w-[12rem] justify-start">
          <span
            class="py-1.5 px-4 bg-platinum rounded-full text-xxs min-w-[5.9375rem] text-center uppercase text-dark-liver"
            :class="{ completed: task.status === 'completed' }"
          >
            {{ task.status }}
          </span>
          <span class="text-[#4D4D4D] text-xxs">{{ task.createdAt }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
