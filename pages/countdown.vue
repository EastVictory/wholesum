<script setup lang="ts">
import ShieLink from "~/components/buttons/ShieLink.vue";

const counter = ref(5);
let intervalId: any = null;

const countDown = () => {
  counter.value = counter.value - 1;
};
onMounted(() => {
  intervalId = setInterval(() => {
    countDown();
  }, 1000);
});

watch(counter, (val) => {
  if (val === 0) {
    clearInterval(intervalId);
    navigateTo("/player");
  }
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
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
    <div class="">
      <section
        class="max-w-md mx-auto py-[3.125rem] flex flex-col items-center"
      >
        <div class="progress-circle">
          <div class="progress-inner">
            <div class="text-dark text-center">
              <p class="mb-[2.12rem]">SESSION STARTS IN</p>
              <p class="counter mb-[2.56rem] flex gap-[0.43rem]">
                <span class="progress-counter-box"> 0 </span>
                <span class="progress-counter-box"> {{ counter }} </span>
              </p>
              <p>SECONDS</p>
            </div>
          </div>
          <span class="indicator"></span>
        </div>
        <ShieLink
          to="/player"
          variant="secondary"
          class="whitespace-nowrap !px-4 !w-[12.5625rem] mx-auto !text-base"
        >
          Start now
        </ShieLink>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress {
  &-circle {
    @apply w-[26.75rem] h-[25.72113rem] rounded-full bg-white mx-auto border-[1rem] border-[#D4E88F] relative mb-[5.69rem];
    .indicator {
      @apply absolute right-[-1.375rem] w-[1.81056rem] h-[1.74594rem] bg-dark rounded-full;
      top: calc(50% - 1.4594rem);
      box-shadow: 0 1.47px 7.35px 0 rgba(0, 0, 0, 0.6);
    }
  }
  &-inner {
    @apply flex justify-center items-center  w-full h-full relative rounded-full;
    box-shadow: 0 7.0898px 7.0898px 0 rgba(0, 0, 0, 0.25);
  }
  &-counter-box {
    @apply text-[2.80894rem] font-title h-[5.18569rem] w-[4.75356rem] inline-block p-[1.08rem] rounded-[0.43213rem]  border-2 border-b-4 border-[#D9D9D9];
  }
  &-type__control {
    @apply p-[0.625rem] border border-platinum font-medium text-[0.625rem] flex items-center gap-1 text-black rounded hover:border-byzantine transition-all;
  }
  &-type__toggle {
    @apply hover:border-byzantine transition-all;
    &.active {
      @apply bg-byzantine text-white border-byzantine;
    }
  }
}
</style>
