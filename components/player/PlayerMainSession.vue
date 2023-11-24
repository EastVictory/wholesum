<script setup lang="ts">
type Countdown = {
  mins: number;
  seconds: number;
};
withDefaults(defineProps<{ countdown: Countdown; speed: number }>(), {});

const lottiePlayer: any = ref(null);

const padZero = (unit: number) => {
  return new Intl.NumberFormat("en", { minimumIntegerDigits: 2 }).format(unit);
};

const startPlayer = () => {
  lottiePlayer?.value?.play();
};
const stopPlayer = () => {
  lottiePlayer?.value?.stop();
};
const pausePlayer = () => {
  lottiePlayer?.value?.pause();
};

defineEmits<{ onComplete: [] }>();

defineExpose({
  startPlayer,
  stopPlayer,
  pausePlayer,
});
</script>

<template>
  <section class="">
    <div class="px-6 flex justify-between mb-[2.81rem]">
      <div class="flex gap-4">
        <p class="text-[2rem] font-alt text-dark font-bold leading-[1.875rem]">
          {{ countdown.mins }} :
          {{ padZero(countdown.seconds) }}
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
          :loop="true"
          :height="280"
          :width="500"
          :speed="speed"
        />
      </client-only>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
