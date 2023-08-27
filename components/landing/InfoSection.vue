<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    variant?: string;
  }>(),
  { variant: null }
);
</script>

<template>
  <div class="border-b border-dotted border-dark-puce py-[9.37rem] w-full">
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
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.info {
  &-section {
    @apply max-w-[74.5rem] mx-auto w-full flex flex-col lg:flex-row gap-[7.25rem] justify-between items-center;
    &--alternate {
      @apply lg:flex-row-reverse;
      .info-text {
        @apply ml-[7.25rem];
      }
    }
  }
  &-text {
    @apply max-w-[23.41719rem];
    h2 {
      @apply font-title text-[1.97894rem] leading-[3.29819rem] text-dark w-4/5 mb-[2.31rem];
    }
    p {
      @apply text-xl font-light font-subtitle leading-[2.5rem];
    }
  }
  &-image-wrapper {
    @apply border-[3px] border-black rounded-[1.375rem] bg-white p-[3.75rem];
    img {
      @apply object-cover object-center max-h-[20.52281rem];
    }
  }
}
</style>
