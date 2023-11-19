<script setup lang="ts">
type Content = {
  type: string;
  content: any;
};

const text = ref("");
const textLimit = ref(102);
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", { type: "text", content: text.value });
  text.value = "";
};
</script>

<template>
  <div class="editor-text-input">
    <textarea
      id=""
      v-model="text"
      name=""
      cols="30"
      placeholder="Start typing..."
      class="w-full"
      :maxlength="textLimit"
      @keyup.ctrl.enter="handleSubmit"
    ></textarea>
    <p class="text-right text-sm font-garamond leading-5 text-dark font-medium">
      {{ text.length }}/{{ textLimit }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-text-input {
    @apply w-full;
    textarea {
      @apply text-sm text-dark font-garamond;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:italic placeholder:text-dark;
      resize: none;
    }
  }
}
</style>
