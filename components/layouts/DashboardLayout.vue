<script setup lang="ts">
import AppNav from "~/components/layouts/AppNav.vue";

withDefaults(defineProps<{ title: string | null }>(), { title: null });
</script>

<template>
  <div class="min-h-screen bg-aero-blue">
    <slot name="head">
      <Head>
        <Title>{{ title }}</Title>
      </Head>
    </slot>

    <header class="dashboard-header">
      <AppNav />
    </header>
    <main class="pb-6 max-w-[90rem]">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-header {
  @apply sticky top-0 z-10;
}
</style>
