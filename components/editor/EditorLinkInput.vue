<script setup lang="ts"></script>

<template>
  <div class="editor-link-input">
    <input
      type="url"
      name=""
      placeholder="Copy & paste or type url to import media"
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
