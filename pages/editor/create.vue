<script setup lang="ts">
import EditorLayout from "~/components/layouts/EditorLayout.vue";
import PageEditorMain from "~/components/editor/create/PageEditorMain.vue";
</script>

<template>
  <EditorLayout title="Editor">
    <section
      class="flex justify-between py-[1.875rem] items-center max-w-[90rem] mx-auto w-full px-12"
    >
      <div>
        <p class="text-licorice text-[1.5625rem] font-mono">
          22 minutes : 09 seconds left
        </p>
      </div>
      <div class="flex gap-4">
        <button class="p-3">
          <nuxt-icon name="pause" class="h-3 w-3" filled />
        </button>
        <button class="p-3">
          <nuxt-icon name="stop" class="h-3 w-3" filled />
        </button>
        <button
          class="bg-conditioner px-5 py-4 rounded-lg text-licorice font-mono text-xs whitespace-nowrap"
        >
          START BREAK
        </button>
        <button>
          <nuxt-icon name="audio" class="h-3 w-3" filled />
        </button>
      </div>
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
