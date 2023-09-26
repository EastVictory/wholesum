<script setup lang="ts">
import AppNav from "~/components/layouts/AppNav.vue";

withDefaults(defineProps<{ title: string | null }>(), { title: "" });
</script>

<template>
  <div class="min-h-screen bg-conditioner">
    <slot name="head">
      <Head>
        <Title>{{ title }}</Title>
      </Head>
    </slot>

    <header class="dashboard-header">
      <AppNav />
    </header>
    <main class="pb-6">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-header {
  @apply sticky top-0 z-10;
}
</style>
