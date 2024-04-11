<script setup lang="ts">
import AppNav from "~/components/layouts/AppNav.vue";

withDefaults(defineProps<{ title: string | null }>(), { title: null });
</script>

<template>
  <div class="min-h-screen bg-aero-blue flex flex-col">
    <slot name="head">
      <Head>
        <Title>{{ title }}</Title>
      </Head>
    </slot>

    <header class="dashboard-header">
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
              West African Jollof Recipe
            </p>
            <span class="px-4 bg-white">SELF-CARE</span>
          </div>
        </template>
      </AppNav>
    </header>
    <main class="mx-auto flex flex-col w-full h-full flex-1">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-header {
  @apply sticky top-0 z-10;
}
</style>
