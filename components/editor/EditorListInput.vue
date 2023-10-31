<script setup lang="ts"></script>

<template>
  <div class="editor-list-input">
    <div>
      <input type="text" placeholder="Title" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-list-input {
    @apply w-full;
    input {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:italic placeholder:text-dark;
    }
  }
}
</style>
