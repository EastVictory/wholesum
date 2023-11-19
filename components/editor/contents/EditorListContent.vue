<script setup lang="ts">
withDefaults(defineProps<{ content?: any }>(), {
  content: {},
});
</script>

<template>
  <section class="editor-content-list__wrapper">
    <div class="editor-content-list">
      <p
        class="font-garamond text-xs text-black leading-[0.8378rem] mb-[0.91rem] uppercase"
      >
        22 May ‘23 . LIST. 0/{{ content?.list.length }}
      </p>
      <div class="">
        <div>
          <p
            class="text-black font-garamond text-sm font-semibold leading-5 mb-[0.91rem]]"
          >
            {{ content?.title }}
          </p>
        </div>
        <ul class="list-disc ml-4">
          <li
            v-for="(entry, i) in content?.list || []"
            :key="`entry-${i}`"
            class="mb-[0.91rem]"
          >
            <p
              :for="`entry-${i}`"
              class="font-medium font-garamond text-sm text-dark leading-5"
            >
              {{ entry }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.editor-content-list {
  &__wrapper {
    @apply px-6 py-4 border-b border-dashed border-dark-puce;
  }
  @apply w-full  p-4;
}
</style>
