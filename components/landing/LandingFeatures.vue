<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import FeatureRow from "~/components/landing/FeatureRow.vue";

const featuresTarget = ref(null);
const targetIsVisible = ref(false);

type Feature = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

const features: Feature[] = [
  {
    title: "Learn something new with each idea",
    description:
      "Deliberate practice is how growth takes place, the more you learn to do the better you get at your craft and experience a sense of purpose.",
    image: "books",
    tag: "EDUCATION",
  },
  {
    title: "Vitality to life",
    description:
      "Experienced well-being starts with taking care of yourself and ensuring that both your physical and emotional needs are met which is not luxury but a priority.",
    image: "heart-purple",
    tag: "LIFESTYLE",
  },
  {
    title: "Self-actualization",
    description:
      "A sense of purpose is sustained through curiosity and maintaining an open mind to what’s happening around you, and how you can serve your community.",
    image: "apple",
    tag: "FITNESS",
  },
  {
    title: "Healthy Lifestyle",
    description:
      "Healthy habits is just house cleaning eg. reading a book or doing anything with deliberate effort, planning and a strong desire to accomplish big and small ideas.",
    image: "joystick",
    tag: "SELF-CARE",
  },
];

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

watch(counter, (val) => {
  if (val > 5) {
    clearInterval(intervalId);
    if (currentCard.value < 3) {
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

useIntersectionObserver(featuresTarget, ([{ isIntersecting }]) => {
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
  <div class="flex gap-[2.625rem] justify-center">
    <section
      class="max-w-[25.8125rem] text-center flex flex-col items-center py-[3.69rem]"
    >
      <div class="w-[4.94731rem] h-[3.29819rem] mx-auto mb-[3.58rem]">
        <nuxt-icon name="logo-icon" filled />
      </div>
      <div
        ref="featuresTarget"
        class="flex flex-col items-center gap-[2.1875rem]"
      >
        <p
          class="text-dark-puce text-[2.625rem] font-subtitle mb-[1.31rem] text-left leading-[3.38625rem] max-w-[25.8125rem]"
        >
          EACH NOTE YOU <br />
          MAKE IN
          <span class="font-title h-4 inline-block">wholesum</span> DEFAULTS
          into one of the following set CATEGORIES*
        </p>
        <p
          class="text-dark font-title leading-[2.375rem] w-5/6 mx-auto max-w-[24.25rem] text-[1.5rem] text-left"
        >
          *Your notes are automatically tagged as education, lifestyle, fitness
          & self-care all you need to cover work life balance; you can adjust
          the labels in the notes editor to suit each idea.
        </p>
      </div>
    </section>
    <div class="">
      <section
        class="max-w-[52.625rem] gap-y-[11.44rem] border-dark-puce pt-[6.875rem] pb-[10.3125rem]"
      >
        <div class="flex gap-[2.125rem] flex-col">
          <FeatureRow
            v-for="(feature, i) in features"
            :key="feature.tag"
            :title="feature.title"
            :image="feature.image"
            :description="feature.description"
            :tag="feature.tag"
            :current-progress="currentProgress"
            :active="currentCard === i"
            @stop="stop"
            @start="start({ restart: true })"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
