<script setup lang="ts">
type Task = {
  text: string;
  status: string;
  category: string;
  createdAt: string;
};
defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="recent-activity_card shie-black-border">
    <div class="flex flex-row items-center gap-[0.44rem] flex-1">
      <div class="flex justify-between items-center flex-1">
        <div class="flex items-center">
          <p
            class="flex items-center text-base leading-[1.1875rem] text-dark-puce ml-3 font-title"
          >
            {{ task?.text }}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <span class="recent-activity_tag shie-black-border">
            <span class="h-[0.8125rem]">{{ task?.status }}</span>
          </span>
          <span class="recent-activity_tag shie-black-border">
            <span class="h-[0.8125rem]">{{ task?.category }}</span>
          </span>
        </div>
      </div>
    </div>
    <p class="text-xs font-medium text-dark-puce font-title">
      {{ task?.createdAt }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.recent-activity_card {
  @apply rounded-[0.875rem] flex flex-row items-center px-8 py-4 min-h-[7.125rem] w-full justify-between gap-[1.22rem] bg-white hover:bg-crayola transition-all;
  .recent-activity_tag {
    @apply rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs w-[6.4rem] h-[1.5rem] items-center inline-flex justify-center bg-crayola transition-all;
  }
  &:hover {
    .recent-activity_tag {
      @apply bg-dark-puce text-white;
    }
  }
}
</style>
