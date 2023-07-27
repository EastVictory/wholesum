<script setup lang="ts">
import AppNav from "~/components/layouts/AppNav.vue";
import AppNotifications from "~/components/layouts/AppNotifications.vue";
const showSub = ref(false);
const notificationsVisible = ref(false);
</script>

<template>
  <div data-theme="light" class="min-h-screen">
    <header class="dashboard-header">
      <AppNav
        @toggle-notifications="(e:boolean) => (notificationsVisible = e)"
      />
      <slot v-if="showSub" name="sub-header"></slot>
      <AppNotifications
        v-if="notificationsVisible"
        @toggle-notifications="(e:boolean) => (notificationsVisible = e)"
      />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.dashboard-header {
  @apply sticky top-0 z-10;
  box-shadow: inset 0 -1px 0 #e4e4e4;
}
</style>
