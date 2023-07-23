<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
const time = ref(0);

const handleMinus = () => {
  if (time.value === 1) {
    return;
  }
  time.value -= 1;
};
</script>

<template>
  <div class="daily-card">
    <div class="">
      <nuxt-icon :name="image" filled />
      <div class="w-3/4">
        <p class="text-[0.8125rem] text-dark font-medium">{{ title }}</p>
        <p class="text-xs text-taupe-gray">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="">
      <div class="flex gap-x-8 items-start">
        <button class="control-button" @click="handleMinus">-</button>
        <div class="flex flex-col items-center">
          <input
            v-model="time"
            type="number"
            class="input input-bordered"
            min="1"
          />
          <p class="text-taupe-gray text-[0.8125rem] leading-[1.375rem]">
            MINS
          </p>
        </div>
        <button class="control-button" @click="time += 1">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.daily-card {
  @apply border border-platinum rounded hover:bg-[#F5F4F4] cursor-pointer transition;
  &:hover {
    input {
      @apply bg-white;
    }
  }
  input {
    @apply appearance-none w-[3.75rem] h-[2.5rem] inline-block mb-[0.625rem] text-black font-medium text-[1.25rem] text-center py-2;
    @apply hover:border-[#9F1D19] focus:outline-0 focus:bg-white;
  }
  & > div:first-child {
    @apply flex gap-4 py-[1.96875rem] px-4 border-b border-platinum min-h-[7.5rem] items-center;
  }
  & > div:last-child {
    @apply pt-[1.875rem] pb-[1.625rem] flex justify-center;
  }
  .control-button {
    @apply font-medium text-[1.25rem] leading-6 text-black hover:bg-platinum px-[0.8125rem] py-2 rounded-sm;
  }
}
</style>
