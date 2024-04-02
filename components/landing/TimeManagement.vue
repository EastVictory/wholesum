<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

import ProgressBar from "~/components/landing/ProgressBar.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
const timeTarget = ref(null);
const targetIsVisible = ref(false);

const time = ref(25);
const min = 0;
const max = 90;

const currentProgress = ref(0);
const currentCard = ref(0);
const counter = ref(0);
let intervalId: any = null;

const start = ({ restart }: { restart: boolean } = { restart: false }) => {
  currentProgress.value = 0;
  counter.value = 0;
  if (restart) {
    currentCard.value = 0;
  }
  intervalId = setInterval(() => {
    countDown();
  }, 1000);
};

const stop = () => {
  clearInterval(intervalId);
  counter.value = 0;
};

const handleMinus = () => {
  if (time.value === min) {
    return;
  }
  time.value -= 1;
};
const handleAddition = () => {
  if (time.value === max) {
    return;
  }
  time.value += 1;
};

const countDown = () => {
  currentProgress.value = counter.value * 25;
  counter.value += 1;
};

watch(counter, (val) => {
  if (val > 5) {
    clearInterval(intervalId);
    if (currentCard.value < 2) {
      currentCard.value += 1;
      start();
    } else {
      start({ restart: true });
    }
  }
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

useIntersectionObserver(timeTarget, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    intervalId = setInterval(() => {
      countDown();
    }, 1000);
  } else {
    clearInterval(intervalId);
  }
  targetIsVisible.value = isIntersecting;
});
</script>

<template>
  <section ref="timeTarget" class="shie-container">
    <div class="max-w-[69.6875rem] mx-auto">
      <div class="flex justify-between gap-[7.0625rem]">
        <section class="max-w-[22.1875rem]">
          <h3
            class="font-subtitle text-[2.75rem] leading-[4rem] text-dark mb-[2.8125rem]"
          >
            MASTER TIME MANAGEMENT
          </h3>
          <p class="font-title text-2xl leading-[2.5rem]">
            Use the pomododro technique to break your work into intervals and
            enhance deep work.
          </p>
        </section>
        <div class="flex-1">
          <section
            class="flex flex-col lg:flex-row gap-[1.3125rem] mb-[1.75rem] justify-center px-16"
          >
            <div
              class="management-box shie-black-border"
              :class="{ active: currentCard === 0 }"
            >
              <div class="max-h-[4.4375rem] flex-1 mb-12">
                <nuxt-icon name="abc" />
              </div>
              <p class="font-title text-2xl leading-10 text-center">
                Easy to use notes Editor
              </p>
            </div>
            <div
              class="management-box shie-black-border"
              :class="{ active: currentCard === 1 }"
            >
              <div class="mb-6">
                <p
                  class="font-medium leading-[0.58rem] text-base uppercase mb-[1.66rem] text-center font-title"
                >
                  Timer <span class="lowercase">(mins)</span>
                </p>
                <div class="w-[6.875rem] mx-auto">
                  <div
                    class="flex items-center justify-center w-full border-2 shie-black-border rounded-[0.36rem] py-4 h-[2.875rem] mb-2 text-[1.25rem] bg-conditioner"
                  >
                    <input
                      v-model="time"
                      type="number"
                      :min="min"
                      :max="max"
                      class="appearance-none inline-block focus-visible:border-cardinal outline-none w-1/2 text-right font-semibold bg-conditioner text-dark"
                    />
                    <span class="w-1/2 font-semibold text-dark"
                      >/{{ max }}</span
                    >
                  </div>

                  <div class="flex flex-row gap-2">
                    <ShieButton
                      variant=""
                      class="flex-1 !px-2 h-[1.875rem] text-center font-medium border-2 border-dark-puce text-black !bg-crayola"
                      @click="handleMinus"
                    >
                      -
                    </ShieButton>
                    <ShieButton
                      variant=""
                      class="flex-1 !px-2 h-[1.875rem] text-center font-medium border-2 border-dark-puce text-black !bg-crayola"
                      @click="handleAddition"
                    >
                      +
                    </ShieButton>
                  </div>
                </div>
              </div>
              <p class="font-title text-2xl leading-10 text-center">
                Pomodoro time manager
              </p>
            </div>
            <div
              class="management-box shie-black-border"
              :class="{ active: currentCard === 2 }"
            >
              <div class="mb-12">
                <p class="uppercase font-title whitespace-nowrap">
                  House Cleaning
                </p>
                <div class="flex flex-col gap-4">
                  <ShiePillButton class="w-full !bg-crayola">
                    45 MINS
                  </ShiePillButton>
                  <ShiePillButton class="w-full !bg-crayola">
                    11:01AM - 11:52AM
                  </ShiePillButton>
                </div>
              </div>
              <p class="font-title text-2xl leading-10 text-center">
                Review each session activity
              </p>
            </div>
          </section>
          <ProgressBar
            :progress="currentProgress"
            @start="start({ restart: true })"
            @stop="stop"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.management-box {
  @apply rounded-[1rem] w-[12.5rem] h-[22.1875rem] px-[1rem] flex flex-col pt-[3.375rem] justify-center items-center text-dark;
  &.active {
    @apply bg-dark-puce text-conditioner;
  }
}
</style>
