<script setup lang="ts">
import ShieLink from "~/components/buttons/ShieLink.vue";
import CuratedResource from "~/components/landing/CuratedResource.vue";
import { useCarousel } from "assets/composables/useCarousel";

const { handleCustomCarousel } = useCarousel();
type CResource = {
  title: string;
  icon: string;
  description: string;
  color: string;
};
const resources: CResource[] = [
  {
    title: "Grow Young",
    icon: "books",
    description:
      "New learnings come with a price, spend time learning to grow young.",
    color: "#DCC2EE",
  },
  {
    title: "Sociality",
    icon: "joystick",
    description: "Sociality means involvement, interaction with others.",
    color: "#76D7AE",
  },
  {
    title: "An apple a day",
    icon: "carrot",
    description:
      "New learnings come with a price, spend time learning to grow young.",
    color: "#76D7EA",
  },
  {
    title: "Self Care",
    icon: "heart-purple",
    description: "Life is movement",
    color: "#6693FA",
  },
];
onMounted(() => {
  handleCustomCarousel(".curated-resources-carousel");
});
</script>

<template>
  <div class="shie-container">
    <section class="max-w-[76.5rem] mx-auto">
      <div class="flex flex-row justify-between items-center mb-[3.36rem]">
        <h2 class="text-dark font-subtitle text-[2.5rem]">
          Start right now with curated resource
        </h2>
        <div class="flex gap-2">
          <button class="carousel-prev-btn">
            <nuxt-icon name="arrow-left" class="no-fill" />
          </button>
          <button class="carousel-next-btn">
            <nuxt-icon name="arrow-right" class="no-fill" />
          </button>
        </div>
      </div>
      <div class="curated-resources-carousel --scrollbar-hidden">
        <CuratedResource
          v-for="resource in resources"
          :key="resource.title"
          class="carousel-item"
          :title="resource.title"
          :description="resource.description"
          :icon="resource.icon"
          :color="resource.color"
        />
      </div>
      <div class="flex gap-[3.56rem] justify-center items-center mb-[2.27rem]">
        <div>
          <ShieLink to="/auth/login">Start Now</ShieLink>
        </div>
        <div>
          <ShieLink variant="secondary" to="/resources">
            VISIT FULL LIBRARY
          </ShieLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.carousel-prev-btn,
.carousel-next-btn {
  @apply text-black border-2 border-dark-puce rounded px-2 py-[0.3125rem] hover:text-cardinal bg-crayola;
  &.disabled {
    @apply bg-taupe-gray border-taupe-gray text-conditioner pointer-events-none;
  }
}
.curated-resources-carousel {
  @apply flex flex-col lg:flex-row overflow-x-scroll scroll-smooth snap-x snap-mandatory touch-pan-x mb-[7.45rem] gap-6 w-full;
}
</style>
