<script setup lang="ts">
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

const fontSize = ref(12);
const quillEditor = ref();
const quillEditorToolbar = ref();

onMounted(() => {
  quillEditor.value = new Quill(quillEditor.value, {
    modules: {
      toolbar: quillEditorToolbar.value,
    },
    theme: "snow",
    placeholder: "Let’s rock and roll...",
  });
});
</script>

<template>
  <section
    class="bg-white min-h-[80vh] flex-1 h-full wholesum-page-editor flex flex-col"
  >
    <div
      id="toolbar"
      ref="quillEditorToolbar"
      class="border-b border-[#CCCCCC]"
    >
      <section
        class="max-w-[90rem] mx-auto flex justify-between items-center pt-[2.125rem] pb-[1.5rem] px-12"
      >
        <div class="flex gap-12 items-center">
          <button class="p-2">
            <nuxt-icon name="restart" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="stop-2" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="duo-view" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="trio-view" filled />
          </button>
        </div>
        <div class="flex gap-12 items-center">
          <button
            class="!h-10 !w-10 !p-2 !border-solid !border-2 !border-dark-puce rounded"
          >
            <nuxt-icon name="toolbar-text" filled class="h-4 w-4" />
          </button>
          <button
            class="!h-10 !w-10 !p-2 !border-solid !border-2 !border-dark-puce rounded"
          >
            <nuxt-icon name="toolbar-checkbox" filled class="h-4 w-4" />
          </button>
          <button
            class="!h-10 !w-10 !p-2 !border-solid !border-2 !border-dark-puce rounded ql-list"
            value="bullet"
          >
            <nuxt-icon name="toolbar-radio" filled class="h-4 w-4" />
          </button>
          <button
            class="!h-10 !w-10 !p-2 !border-solid !border-2 !border-dark-puce rounded ql-image"
          >
            <nuxt-icon name="toolbar-image" filled class="h-4 w-4" />
          </button>
          <button
            class="!h-10 !w-10 !p-2 !border-solid !border-2 !border-dark-puce rounded"
          >
            <nuxt-icon name="toolbar-link" filled class="h-4 w-4" />
          </button>
          <button
            class="!h-10 !w-10 !p-2 !border-solid !border-2 !border-dark-puce rounded"
          >
            <nuxt-icon name="toolbar-table" filled class="h-4 w-4" />
          </button>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex gap-1 items-center">
            <button
              class="p-3 text-licorice font-mono"
              @click="fontSize = fontSize -= 1"
            >
              -
            </button>
            <input
              v-model="fontSize"
              type="number"
              class="text-center border border-[#cccccc] rounded py-2 w-10 h-10 appearance-none"
            />
            <button
              class="p-3 text-licorice font-mono"
              @click="fontSize = fontSize += 1"
            >
              +
            </button>
          </div>

          <button class="p-3">
            <nuxt-icon name="undo" filled />
          </button>
          <button class="p-3">
            <nuxt-icon name="redo" filled />
          </button>
        </div>
      </section>
    </div>
    <section id="editor" ref="quillEditor"></section>
  </section>
</template>

<style scoped lang="scss">
.wholesum-page-editor {
  .ql-toolbar.ql-snow {
    @apply border-t-0 border-l-0 border-r-0 border-b border-[#CCCCCC];
  }
  .ql-container.ql-snow {
    @apply border-none flex-1 h-full max-w-[50rem] mx-auto w-full pt-6;
  }
}
</style>
