<script setup lang="ts">
type Task = {
  icon: string;
  type: string;
  title: string;
  createdAt: string;
};
defineProps<{
  tasks: Task[];
}>();
</script>

<template>
  <section class="mt-4 rounded border border-platinum p-6">
    <div class="flex justify-between items-center mb-[1.06rem]">
      <p class="text-black text-xxs font-semibold">Recent Tasks</p>
      <nuxt-link class="text-xxs font-medium underline text-black">
        Show more
      </nuxt-link>
    </div>
    <div class="tasks-row">
      <div
        v-for="(task, i) in tasks"
        :key="`tasks-${i}`"
        class="flex p-4 justify-between items-center rounded transition-all hover:bg-[#F5F4F4] cursor-pointer"
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
  </section>
</template>

<style scoped></style>
