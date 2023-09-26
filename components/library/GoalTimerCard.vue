<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";

withDefaults(
  defineProps<{
    title: string;
  }>(),
  {}
);
const time = ref(0);

const handleMinus = () => {
  if (time.value === 1) {
    return;
  }
  time.value -= 1;
};
</script>

<template>
  <div
    class="timer-card shie-black-border bg-white rounded pb-6 inline-flex flex-col items-center w-[18.5625rem] min-h-[15.0625rem]"
  >
    <div
      class="mb-[1.66rem] border-b-2 border-dark-puce rounded-none px-4 py-6 w-full"
    >
      <p
        class="text-dark text-sm font-title font-medium leading-[0.58rem] uppercase h-4"
      >
        {{ title }}
      </p>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center h-full">
      <div class="">
        <div
          class="flex flex-row justify-center gap-8 mb-[1.19rem] items-center"
        >
          <ShieButton
            variant="secondary"
            class="flex-1 !px-4 h-[1.875rem] text-center font-medium"
            @click="handleMinus"
          >
            -
          </ShieButton>
          <input
            v-model="time"
            type="number"
            class="appearance-none w-8 text-center outline-none text-[2.5rem] font-medium text-dark leading-[3rem]"
          />
          <ShieButton
            variant="secondary"
            class="flex-1 !px-4 h-[1.875rem] text-center font-medium"
            @click="time += 1"
          >
            +
          </ShieButton>
        </div>
        <p class="text-sm text-center leading-[1.375rem] text-dark-puce">
          MINUTES/DAY
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
