<script setup lang="ts">
import { type Component } from "vue";
import EditorTextInput from "~/components/editor/EditorTextInput.vue";
import EditorCheckboxInput from "~/components/editor/EditorCheckboxInput.vue";
import EditorListInput from "~/components/editor/EditorListInput.vue";
import EditorImageInput from "~/components/editor/EditorImageInput.vue";
import EditorLinkInput from "~/components/editor/EditorLinkInput.vue";

type Controls = {
  [key: string]: Component;
};

withDefaults(defineProps<{ activeControl?: string }>(), {
  activeControl: "text",
});

const controls: Controls = {
  text: EditorTextInput,
  checkbox: EditorCheckboxInput,
  list: EditorListInput,
  image: EditorImageInput,
  link: EditorLinkInput,
};
</script>

<template>
  <div class="editor-main">
    <hr class="border-t-2 border-dark-puce w-full" />
    <div class="p-4 w-full">
      <Component :is="controls[activeControl]" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-main {
    @apply bg-white rounded-lg border-2 border-dark-puce w-full pt-6 flex flex-col items-center;
  }
}
</style>
