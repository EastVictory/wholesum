<script setup lang="ts">
import EditorControls from "~/components/editor/EditorControls.vue";
import EditorMain from "~/components/editor/EditorMain.vue";

const activeControl = ref("text");
</script>

<template>
  <div class="flex gap-[1.5rem] flex-col">
    <EditorMain :active-control="activeControl" />
    <EditorControls
      :active-control="activeControl"
      @toggle-controls="(name) => (activeControl = name)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
