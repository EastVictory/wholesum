<script setup lang="ts">
import ProgressBar from "~/components/landing/ProgressBar.vue";

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

const countDown = () => {
  currentProgress.value = counter.value * 25;
  counter.value += 1;
};

onMounted(() => {
  intervalId = setInterval(() => {
    countDown();
  }, 1000);
});

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
</script>

<template>
  <section class="shie-container">
    <div class="max-w-[69.6875rem] mx-auto">
      <div class="flex justify-between gap-[7.0625rem]">
        <div class="flex-1">
          <section
            class="flex flex-col lg:flex-row gap-[1.3125rem] mb-[1.75rem] justify-center px-16"
          >
            <div
              class="management-box shie-black-border"
              :class="{ active: currentCard === 0 }"
            >
              <div class="max-h-[4.4375rem] flex-1 mb-12">
                <nuxt-icon name="txt" filled />
              </div>
            </div>
            <div
              class="management-box shie-black-border"
              :class="{ active: currentCard === 1 }"
            >
              <div class="max-h-[4.4375rem] flex-1 mb-12">
                <nuxt-icon name="pdf" filled />
              </div>
            </div>
            <div
              class="management-box shie-black-border"
              :class="{ active: currentCard === 2 }"
            >
              <div class="max-h-[4.4375rem] flex-1 mb-12">
                <nuxt-icon name="docx" filled />
              </div>
            </div>
          </section>
          <ProgressBar
            :progress="currentProgress"
            @start="start({ restart: true })"
            @stop="stop"
          />
        </div>
        <section class="max-w-[22.1875rem]">
          <h3
            class="font-subtitle text-[2.75rem] leading-[4rem] text-dark mb-[2.8125rem]"
          >
            EXTEND YOUR WORKFLOW
          </h3>
          <p class="font-title text-2xl leading-[2.5rem]">
            For extended brainstorming, & educational purposes, take your notes
            wherever you go.
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.management-box {
  @apply rounded-[1rem] w-[12.5rem] h-[22.1875rem] px-[1rem] flex flex-col pt-[3.375rem] justify-center items-center text-crayola;
  &.active {
    @apply bg-dark-puce text-[#FFE236];
  }
}
</style>
