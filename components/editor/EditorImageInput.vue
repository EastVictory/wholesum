<script setup lang="ts"></script>

<template>
  <div class="editor-image-input">
    <p class="text-center">Drag and drop or click to choose file</p>
    <p class="text-center">ℹ️ Max file size: 4mb</p>
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
