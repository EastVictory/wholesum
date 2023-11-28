<script setup lang="ts">
import { type Component, Ref } from "vue";
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

type Content = {
  type: string;
  content?: any;
  createdAt?: string;
};

withDefaults(defineProps<{ activeControl?: string; startEditing: boolean }>(), {
  activeControl: "text",
  startEditing: false,
});

const contents: Ref<Content | object> = ref({});
const editorMain: Ref<HTMLDivElement | null> = ref(null);

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
const emit = defineEmits<{
  (e: "showControls", value: boolean): void;
}>();

const showControls = () => {
  emit("showControls", true);
  setTimeout(() => {
    window.scroll({
      top: editorMain.value?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }, 500);
};
</script>

<template>
  <section ref="editorMain" class="editor-main">
    <div
      class="shie-black-border pt-6 flex-1 flex flex-col h-full min-h-[47.0625rem] rounded-lg"
      :class="{
        'border-b-0': startEditing,
        '!rounded-br-none': startEditing,
        '!rounded-bl-none': startEditing,
      }"
    >
      <div v-if="!Object.entries(contents).length" class="mb-4 px-10 pt-6">
        <p class="text-black font-alt text-xs">
          {{ DateTime.now().toFormat(`d LLL '‘'yy '.' t a`) }}
        </p>
        <p
          v-if="startEditing"
          class="text-sm font-medium text-taupe-gray font-garamond mt-4"
        >
          You don’t have any Notes added yet
        </p>
      </div>
      <div v-if="!startEditing" class="flex justify-start px-10">
        <button
          class="text-dark font-garamond font-medium text-sm hover:bg-[#F8F8F8] rounded py-2 px-3 w-full text-left"
          @click="showControls"
        >
          + Add a note
        </button>
      </div>
      <div v-else class="flex-1 flex flex-col w-full">
        <Component
          :is="getDisplay(content?.type)"
          v-for="[key, content] in Object.entries(contents)"
          :key="key"
          :content="content?.content"
          :created-at="content?.createdAt"
        />
      </div>
    </div>
    <div
      v-if="startEditing"
      class="flex flex-col h-[6rem] rounded-lg shie-black-border focus-within:border-[#26F] transition-all overflow-auto"
      :class="{
        '!rounded-tr-none': startEditing,
        '!rounded-tl-none': startEditing,
      }"
    >
      <div class="p-4 w-full flex-1">
        <Component :is="controls[activeControl]" @submit="handleSubmit" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.editor {
  &-main {
    @apply bg-white rounded-lg w-full flex flex-col min-h-[47.0625rem];
  }
}
</style>
