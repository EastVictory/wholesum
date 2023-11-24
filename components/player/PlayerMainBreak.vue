<script setup lang="ts">
type Countdown = {
  mins: number;
  seconds: number;
};
const props = withDefaults(defineProps<{ countdown: Countdown }>(), {});
const padZero = (unit: number) => {
  return new Intl.NumberFormat("en", { minimumIntegerDigits: 2 }).format(unit);
};

const isComplete = computed(() => {
  const { countdown } = props;
  return countdown.mins === 0 && countdown.seconds === 0;
});

defineEmits<{ onComplete: [] }>();
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
      <div class="flex justify-center items-center">
        <img v-if="isComplete" src="/images/svg/break-over-bg.svg" alt="" />
        <img v-else src="/images/svg/break-bg.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
