<script setup lang="ts">
withDefaults(defineProps<{ content?: any }>(), {
  content: {},
});
</script>

<template>
  <div class="editor-main"></div>
</template>

<style scoped lang="scss">
.editor {
  &-main {
    @apply bg-white rounded-lg border-2 border-dark-puce w-full py-6 flex flex-col items-center;
  }
}
</style>
