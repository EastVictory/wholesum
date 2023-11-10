<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
import PlayerEditor from "~/components/editor/PlayerEditor.vue";

const lottiePlayer: any = ref(null);

const duration = 30;
const breaks = 5;
const speed = ref(1);
const durationInSeconds = ref(duration * 60);
const breaksInSeconds = ref(breaks * 60);

const countdown = computed(() => {
  return {
    mins: Math.floor(durationInSeconds.value / 60),
    seconds: Math.floor(durationInSeconds.value % 60),
  };
});

const breaksCountdown = computed(() => {
  return {
    mins: Math.floor(breaksInSeconds.value / 60),
    seconds: Math.floor(breaksInSeconds.value % 60),
  };
});

let countInterval: NodeJS.Timer | null = null;
let breaksInterval: NodeJS.Timer | null = null;

const stopInterval = (interval: NodeJS.Timer | null) => {
  if (interval) {
    clearInterval(interval);
  }
};

onBeforeUnmount(() => {
  stopInterval(countInterval);
  stopInterval(breaksInterval);
});

watch(durationInSeconds, (val) => {
  if (val === 0) {
    stopInterval(countInterval);
  }
});
const padZero = (unit: number) => {
  return new Intl.NumberFormat("en", { minimumIntegerDigits: 2 }).format(unit);
};
const startPlayer = () => {
  lottiePlayer?.value?.play();
  stopInterval(breaksInterval);

  countInterval = setInterval(() => {
    progressCountdown();
  }, 1000);
};

const stopPlayer = () => {
  durationInSeconds.value = duration * 60;
  breaksInSeconds.value = breaks * 60;
  stopInterval(countInterval);
  stopInterval(breaksInterval);
  lottiePlayer?.value?.stop();
};

const progressCountdown = () => {
  durationInSeconds.value -= 1;
};
const progressBreaksCountdown = () => {
  breaksInSeconds.value -= 1;
};

const pausePlayer = () => {
  stopInterval(countInterval);
  breaksInterval = setInterval(() => {
    progressBreaksCountdown();
  }, 1000);
  lottiePlayer?.value?.pause();
};
const handlePlayerComplete = () => {
  stopInterval(countInterval);
  stopInterval(breaksInterval);

  // console.log("handlePlayerComplete");
};
</script>

<template>
  <div class="mx-auto bg-conditioner min-h-screen pt-[3.09rem]">
    <div class="logo-wrapper flex justify-center pb-[3.69rem]">
      <nuxt-link to="/" class="text-black">
        <nuxt-icon
          name="logo-text"
          class="w-[1.9375rem] h-[1.8125rem] text-black"
          filled
        />
      </nuxt-link>
    </div>
    <section class="max-w-[90rem] mx-auto pb-[5.72rem]">
      <div
        class="max-w-[72.5rem] mx-auto flex items-center justify-between mb-[5rem]"
      >
        <button
          class="flex items-center gap-8 text-dark font-title text-base leading-[1.125rem] uppercase"
        >
          <span class="h-[1.125rem]">Untitled task</span>
          <nuxt-icon name="chevron-right" filled />
        </button>
        <div class="flex gap-2 items-center">
          <ShiePillButton>SESSION 001</ShiePillButton>
          <ShiePillButton>EDUCATION</ShiePillButton>
          <ShiePillButton>25 MINS SESSION</ShiePillButton>
          <ShiePillButton>5 MINS BREAK</ShiePillButton>
        </div>
      </div>
      <div class="flex gap-6 justify-between max-w-[57.5625rem] mx-auto">
        <section class="w-full flex-1">
          <div class="px-6 flex justify-between mb-[2.81rem]">
            <div class="flex gap-4">
              <p
                class="text-[2rem] font-alt text-dark font-bold leading-[1.875rem]"
              >
                {{ countdown.mins }} :
                {{ padZero(countdown.seconds) }}
                <span class="text-[1.4375rem]">MINS</span>
              </p>
              <p
                class="text-[2rem] font-alt text-dark font-bold leading-[1.875rem]"
              >
                {{ breaksCountdown.mins }} :
                {{ padZero(breaksCountdown.seconds) }}
                <span class="text-[1.4375rem]">MINS</span>
              </p>
            </div>

            <span class="">
              <nuxt-icon name="audio" filled />
            </span>
          </div>
          <div class="mb-[4.41rem]">
            <client-only>
              <Vue3Lottie
                ref="lottiePlayer"
                animation-link="https://lottie.host/cececf82-6251-4554-bd57-905e2fbbcb0a/0aZtY0B81L.json"
                :auto-play="false"
                :loop="false"
                :height="280"
                :width="500"
                :speed="speed"
                @on-complete="handlePlayerComplete"
              />
            </client-only>
          </div>

          <div class="px-6 flex gap-[1.5rem] justify-center">
            <ShieButton
              variant="primary"
              class="!bg-white !border-x-[0.12rem] !border-t-[0.13rem]"
              @click="stopPlayer"
            >
              <nuxt-icon name="stop" filled />
            </ShieButton>
            <ShieButton
              variant="primary"
              class="!bg-conditioner !border-x-[0.12rem] !border-t-[0.13rem]"
              @click="startPlayer"
            >
              <nuxt-icon name="start" filled />
            </ShieButton>
            <ShieButton
              variant="secondary"
              class="whitespace-nowrap !px-4 !w-[7.625rem] mx-auto !text-[0.75rem] !bg-dark-puce !text-conditioner"
              @click="pausePlayer"
            >
              Start break
            </ShieButton>
          </div>
        </section>
        <section class="max-w-[24.3125rem] w-full">
          <PlayerEditor />
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
