<script setup lang="ts">
import EditorLayout from "~/components/layouts/EditorLayout.vue";
import PageEditorMain from "~/components/editor/create/PageEditorMain.vue";
</script>

<template>
  <EditorLayout title="Editor">
    <section
      class="flex justify-between py-[1.875rem] items-center max-w-[90rem] mx-auto w-full px-12"
    >
      <EditorTimer />
      <div class="flex gap-6">
        <button class="font-mono font-medium flex items-center gap-2">
          <nuxt-icon name="print" class="h-6 w-6" filled />
          Print
        </button>
        <button class="font-mono font-medium flex items-center gap-2">
          <nuxt-icon name="download-2" class="h-6 w-6" filled />
          Download
        </button>
        <button class="font-mono font-medium flex items-center gap-2">
          <nuxt-icon name="send" class="h-6 w-6" filled />
          Send a copy
        </button>
      </div>
    </section>
    <PageEditorMain />
  </EditorLayout>
</template>

<style scoped lang="scss"></style>
