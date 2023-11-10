<script setup lang="ts">
const props = withDefaults(defineProps<{ content?: any }>(), {
  content: [],
});
const images = props.content.map((file: any) => {
  return { url: URL.createObjectURL(file) };
});
</script>

<template>
  <section class="editor-content-image__wrapper">
    <div class="editor-content-image">
      <p
        class="font-garamond text-xs text-black leading-[0.8378rem] mb-4 uppercase"
      >
        22 May ‘23. Images
      </p>
      <div>
        <img v-for="(image, i) in images" :key="i" :src="image.url" alt="..." />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.editor-content-image {
  &__wrapper {
    @apply px-6 py-4 border-b border-dashed border-dark-puce;
  }
  @apply w-full  p-4;
}
</style>
