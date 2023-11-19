<script setup lang="ts">
import { type Component } from "vue";
import { DateTime } from "luxon";
import EditorTextInput from "~/components/editor/inputs/EditorTextInput.vue";
import EditorCheckboxInput from "~/components/editor/inputs/EditorCheckboxInput.vue";
import EditorListInput from "~/components/editor/inputs/EditorListInput.vue";
import EditorImageInput from "~/components/editor/inputs/EditorImageInput.vue";
import EditorLinkInput from "~/components/editor/inputs/EditorLinkInput.vue";
import EditorTextContent from "~/components/editor/contents/EditorTextContent.vue";
import EditorCheckboxContent from "~/components/editor/contents/EditorCheckboxContent.vue";
import EditorListContent from "~/components/editor/contents/EditorListContent.vue";
import EditorImageContent from "~/components/editor/contents/EditorImageContent.vue";
import EditorLinkContent from "~/components/editor/contents/EditorLinkContent.vue";

type Controls = {
  [key: string]: Component;
};
type Displays = {
  [key: string]: Component;
};

withDefaults(defineProps<{ activeControl?: string; startEditing: boolean }>(), {
  activeControl: "text",
  startEditing: false,
});

const contents = ref({});

const controls: Controls = {
  text: EditorTextInput,
  checkbox: EditorCheckboxInput,
  list: EditorListInput,
  image: EditorImageInput,
  link: EditorLinkInput,
};

const displays: Displays = {
  text: EditorTextContent,
  checkbox: EditorCheckboxContent,
  list: EditorListContent,
  image: EditorImageContent,
  link: EditorLinkContent,
};
const handleSubmit = (data: any) => {
  const id: number = Object.keys(contents.value).length;
  contents.value = { ...contents.value, [id]: data };
};
const getDisplay = (key: string) => {
  return displays[key];
};
defineEmits<{
  (e: "showControls", value: boolean): void;
}>();
</script>

<template>
  <section class="editor-main">
    <p
      v-if="!Object.entries(contents).length"
      class="mb-4 px-10 pt-6 text-black font-alt text-xs"
    >
      {{ DateTime.now().toFormat(`d LLL '"'yy '.' ta`) }}
    </p>
    <div v-if="startEditing" class="flex flex-col h-full min-h-[47.0625rem]">
      <div class="flex-1 flex flex-col w-full">
        <Component
          :is="getDisplay(content?.type)"
          v-for="[key, content] in Object.entries(contents)"
          :key="key"
          :content="content?.content"
        />
      </div>
      <hr class="border-t-2 border-dark-puce w-full" />
      <div class="p-4 w-full">
        <Component :is="controls[activeControl]" @submit="handleSubmit" />
      </div>
    </div>
    <div v-else class="flex justify-start px-10">
      <button
        class="text-dark font-garamond font-medium text-sm"
        @click="$emit('showControls', true)"
      >
        + Add a note
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.editor {
  &-main {
    @apply bg-white rounded-lg border-2 border-dark-puce w-full pt-6 flex flex-col min-h-[47.0625rem];
  }
}
</style>
