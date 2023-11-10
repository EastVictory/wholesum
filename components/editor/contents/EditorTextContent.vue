<script setup lang="ts">
withDefaults(defineProps<{ content?: any }>(), {
  content: {},
});
</script>

<template>
  <section class="editor-content-text__wrapper">
    <div class="editor-content-text">
      <p
        class="font-garamond text-xs text-black leading-[0.8378rem] mb-4 uppercase"
      >
        22 May ‘23 . {{ content.length }}/102 WORDS
      </p>
      <p
        class="flex flex-row items-center font-garamond font-medium text-sm leading-5 gap-4 text-dark"
      >
        {{ content }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.editor-content-text {
  &__wrapper {
    @apply px-6 py-4 border-b border-dashed border-dark-puce;
  }
  @apply w-full  p-4;
}
</style>
