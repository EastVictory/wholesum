<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    variant?: string | null;
  }>(),
  { variant: null }
);
</script>

<template>
  <div class="py-[11.44rem] w-full">
    <section
      class="info-section"
      :class="{ [`info-section--${variant}`]: variant }"
    >
      <div class="info-image-wrapper">
        <img :src="image" :alt="title" />
      </div>
      <div class="info-text">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <nuxt-link to="/library">Learn More</nuxt-link>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.info {
  &-section {
    @apply max-w-[57rem] mx-auto w-full flex flex-col lg:flex-row gap-[2.75rem] justify-between items-center;
    &--alternate {
      @apply lg:flex-row-reverse gap-[7rem];
      .info-text {
        //@apply ml-[7.25rem];
      }
    }
  }
  &-text {
    @apply max-w-[27.25rem];
    h2 {
      @apply font-title text-[2rem] leading-[3.29819rem] text-dark mb-[2.31rem] uppercase;
    }
    p {
      @apply text-2xl font-light font-subtitle leading-[2.5rem] text-dark mb-[2.31rem];
    }

    a {
      @apply text-2xl font-medium underline leading-[2.5rem] text-dark;
    }
  }
  &-image-wrapper {
    @apply border-[3px] border-black rounded-[1.375rem] bg-white p-[3.75rem] max-w-[27.10469rem];
    img {
      @apply object-cover object-center h-full w-full max-h-[20.52281rem];
    }
  }
}
</style>
