<script setup lang="ts">
import { DateTime } from "luxon";

const props = withDefaults(
  defineProps<{ content?: any; createdAt?: string }>(),
  {
    content: {},
    createdAt: DateTime.now().toFormat(`d LLL '‘'yy '.' t a`),
  }
);

const textLimit = ref(102);

const totalTextLimit = computed(() => {
  const { content } = props;
  if (content?.list) {
    return content?.list.join().length;
  }
  return 0;
});
</script>

<template>
  <section class="editor-content-list__wrapper">
    <div class="editor-content-list">
      <p
        class="font-garamond text-xs text-black leading-[0.8378rem] mb-[0.91rem] uppercase"
      >
        {{ createdAt }} . {{ totalTextLimit }}/{{ textLimit }} WORDS
      </p>
      <div class="">
        <ul class="list-disc ml-4">
          <li
            v-for="(entry, i) in content?.list || []"
            :key="`entry-${i}`"
            class=""
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
