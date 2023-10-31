<script setup lang="ts"></script>

<template>
  <div class="editor-text-input">
    <textarea
      id=""
      name=""
      cols="30"
      placeholder="Start typing..."
      class="w-full"
      maxlength="102"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-text-input {
    @apply w-full;
    textarea {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:italic placeholder:text-dark;
      resize: none;
    }
  }
}
</style>
