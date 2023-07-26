<script setup lang="ts">
type Trend = {
  name: string;
  icon: string;
  mins: number;
  tasks: number;
};

defineProps<{
  trend: Trend;
  active?: boolean;
}>();

const emit = defineEmits<{ selectActivity: [name: string] }>();
</script>

<template>
  <div
    class="trend-card flex-1 cursor-pointer"
    :class="{ active: active }"
    @mouseover="emit('selectActivity', trend.name)"
  >
    <p class="trend-card__title">
      <nuxt-icon :name="trend.icon" class="no-fill h-[0.625rem] w-[0.625rem]" />
      <span>{{ trend.name }}</span>
    </p>
    <div class="flex flex-col items-center" :class="{ 'gap-2': !active }">
      <p class="text-[2.5rem] text-black font-medium trend-card__time">
        {{ Number(trend.mins).toFixed(active ? 2 : 0) }}
      </p>
      <p class="text-taupe-gray text-lg">mins</p>
    </div>
    <div class="text-center rounded" :class="{ hidden: active }">
      <button
        class="border border-platinum p-[0.62rem] rounded max-h-[1.826rem] w-[1.53rem] inline-flex items-center justify-center"
      >
        <span class="sr-only">Open</span>
        <nuxt-icon name="chevron-right" class="no-fill" />
      </button>
    </div>
    <div :class="{ hidden: !active }">
      <nuxt-icon name="trend-graph" filled />
    </div>
    <div :class="{ hidden: !active }" class="flex justify-between pb-3">
      <p class="text-[#191521] text-xxs font-bold">
        <b>{{ trend.tasks }}</b> tasks completed
      </p>
      <nuxt-link class="underline text-[#191521] text-xxs font-medium">
        View Trends
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.trend-card {
  @apply border border-platinum rounded p-[0.62rem] flex flex-col justify-evenly;
  @apply min-h-[14.5625rem] min-w-[6.75rem] gap-[1.5rem];
  &__title {
    @apply text-taupe-gray flex gap-2 text-xxs font-semibold justify-center;
    @apply uppercase p-[0.62rem] leading-[1.375rem] items-center;
  }
  &.active {
    @apply min-w-[13.375rem] px-4 gap-4;
    .trend-card__title {
      @apply justify-start text-dark font-semibold bg-[#F5F4F4] rounded;
    }
    .trend-card__time {
      @apply text-[1.3125rem];
    }
  }
}
</style>
