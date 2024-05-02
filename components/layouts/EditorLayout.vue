<script setup lang="ts">
import AppNav from "~/components/layouts/AppNav.vue";
import { useEditorStore } from "~/store/editor";
const editorStore = useEditorStore();
const { configuration } = storeToRefs(editorStore);
withDefaults(defineProps<{ title: string | null }>(), { title: null });
</script>

<template>
  <div class="min-h-screen bg-aero-blue flex flex-col">
    <slot name="head">
      <Head>
        <Title>{{ title }}</Title>
      </Head>
    </slot>

    <header class="editor-header">
      <AppNav>
        <template #left-content>
          <div class="flex items-center gap-4">
            <nuxt-link to="/" class="text-black">
              <nuxt-icon
                name="logo-icon"
                class="w-[12.0625rem] h-[2.6875rem] text-black"
                filled
              />
            </nuxt-link>
            <p class="font-title text-2xl h-4 text-licorice">
              {{ configuration.title }}
            </p>
            <span
              class="px-5 bg-white uppercase rounded-full py-1 h-6 inline-flex items-center justify-center"
            >
              <span class="font-title h-3 text-xs inline-block mt-1">
                {{ configuration.category }}
              </span>
            </span>
          </div>
        </template>
      </AppNav>
    </header>
    <main class="mx-auto flex flex-col w-full h-full flex-1">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.editor-header {
  @apply sticky top-0 z-10;
  .navbar__wrapper {
    @apply pt-[1.875rem] pb-[2.5625rem];
  }
}
</style>
