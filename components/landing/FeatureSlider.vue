<script setup lang="ts">
import FeatureCircle from "~/components/landing/FeatureCircle.vue";
import { useCarousel } from "assets/composables/useCarousel";
const { handleCustomCarousel } = useCarousel();
const features = [
  {
    title: "make better decisions",
    text: "Notice your progress with intuitive insightful charts, and set intuitive goals.",
    color: "#76D7EA",
  },
  {
    title: "focus with pomodoro",
    text: "Work at a natural pace, focus, and enhance your deep work.",
    color: "#6693FA",
  },
  {
    title: "wholesome organizer",
    text: "Manage your to do, and schedule your tasks with timely reminders.",
    color: "#76D7AE",
  },
  {
    title: "reading notes",
    text: "Capture thoughts, record memos while learning, and growing.",
    color: "#DCC2EE",
  },
];
onMounted(() => {
  handleCustomCarousel("#features-slider");
});
</script>

<template>
  <div class="w-full border-b-2 border-black relative overflow-hidden">
    <section
      class="relative md:max-w-[74.4375rem] hd:max-w-full mx-auto overflow-hidden"
    >
      <button class="slider-controls slider-controls__prev">
        <nuxt-icon name="chevron-left" class="w-6 h-6 no-fill" />
      </button>
      <section id="features-slider" class="features-slider --scrollbar-hidden">
        <FeatureCircle
          v-for="feature in features"
          :key="feature.title"
          :feature="feature"
          class="slider-item"
        />
      </section>
      <button class="slider-controls slider-controls__next">
        <nuxt-icon name="chevron-right" class="w-6 h-6 no-fill" />
      </button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.slider-controls {
  @apply hidden md:inline-flex hd:hidden absolute w-[4.625rem] h-[4.625rem] bg-licorice z-[2] top-[1rem] rounded-full justify-center items-center text-white;
  @apply transition-all;
  &__next {
    @apply right-0;
  }
  &.disabled {
    @apply border-licorice/20 text-licorice/20 border-2 bg-transparent;
  }
}
.features-slider {
  @apply w-full max-w-[74.4375rem] hd:max-w-full overflow-x-auto items-center justify-start hd:justify-center flex gap-x-[3.125rem] mx-auto relative scroll-smooth px-12;
  @apply flex-col md:flex-row;
}
</style>
