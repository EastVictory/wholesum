<script setup lang="ts">
import EditorControls from "~/components/editor/EditorControls.vue";
import EditorMain from "~/components/editor/EditorMain.vue";

const activeControl = ref("text");
const startEditing = ref(false);
</script>

<template>
  <div class="flex gap-[1.5rem] flex-col">
    <EditorMain
      :active-control="activeControl"
      :start-editing="startEditing"
      @show-controls="startEditing = true"
    />
    <EditorControls
      v-if="startEditing"
      :active-control="activeControl"
      @toggle-controls="(name) => (activeControl = name)"
    />
  </div>
</template>

<style scoped lang="scss"></style>
