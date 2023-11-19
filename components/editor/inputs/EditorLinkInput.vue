<script setup lang="ts">
type Content = {
  type: string;
  content: any;
};

const url = ref("");
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", { type: "link", content: url.value });
  url.value = "";
};
</script>

<template>
  <div class="editor-link-input">
    <input
      v-model="url"
      type="url"
      placeholder="Copy & paste or type url to import media"
      @keyup.enter="handleSubmit"
    />
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-link-input {
    @apply w-full;
    input {
      @apply text-xs text-dark py-3 text-center w-full font-garamond;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-xs placeholder:italic placeholder:text-dark placeholder:capitalize;
    }
  }
}
</style>
