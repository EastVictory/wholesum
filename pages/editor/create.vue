<script setup lang="ts">
import EditorLayout from "~/components/layouts/EditorLayout.vue";
</script>

<template>
  <EditorLayout title="Editor">
    <section
      class="flex justify-between py-[1.875rem] items-center max-w-[90rem] mx-auto"
    >
      <div>
        <p class="text-outer-space text-[1.5625rem] font-mono">
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
          class="bg-conditioner px-3 py-4 rounded-lg text-outer-space font-mono text-xs whitespace-nowrap"
        >
          START BREAK
        </button>
        <button>
          <nuxt-icon name="audio" class="h-3 w-3" filled />
        </button>
      </div>
      <div class="flex gap-6">
        <button class="font-mono font-medium">Print</button>
        <button class="font-mono font-medium">Download</button>
        <button class="font-mono font-medium">Send a copy</button>
      </div>
    </section>
    <section></section>
  </EditorLayout>
</template>

<style scoped lang="scss"></style>
