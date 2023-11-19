<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";
type Content = {
  type: string;
  content: any;
};

const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = (files: any) => {
  emits("submit", { type: "image", content: files });
};

const onDrop = (acceptFiles: any, _: any) => {
  handleSubmit(acceptFiles);
};
const { getRootProps, getInputProps } = useDropzone({ onDrop });
</script>

<template>
  <div class="editor-image-input" v-bind="getRootProps()">
    <input
      id="editorDropzone"
      type="file"
      class="hidden"
      v-bind="getInputProps()"
    />
    <div class="flex flex-col">
      <span class="text-center">Drag and drop or click to choose file</span>
      <span class="text-center">ℹ️ Max file size: 4mb</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-image-input {
    @apply w-full font-garamond;
    p {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:italic placeholder:text-dark;
      resize: none;
    }
  }
}
</style>
