<script setup lang="ts">
// import {useEventBus} from "@vueuse/core/index";
import { useDropzone } from "vue3-dropzone";
import { DateTime } from "luxon";

// const bus = useEventBus<string>("controls:save");

type Content = {
  type: string;
  content: any;
  createdAt: string;
};

const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = (files: any) => {
  emits("submit", {
    type: "image",
    content: files,
    createdAt: DateTime.now().toFormat(`d LLL '"'yy '.' ta`),
  });
};

const onDrop = (acceptFiles: any, _: any) => {
  handleSubmit(acceptFiles);
};
const { getRootProps, getInputProps } = useDropzone({ onDrop });

// bus.on((event: string) => {
//   if (event) {
//     handleSubmit();
//   }
// });
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
    @apply w-full font-garamond h-full;
    p {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:text-dark;
      resize: none;
    }
  }
}
</style>
