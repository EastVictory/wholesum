<script setup lang="ts">
import AppNav from "~/components/layouts/AppNav.vue";
import AppNotifications from "~/components/layouts/AppNotifications.vue";
const notificationsVisible = ref(false);
</script>

<template>
  <div data-theme="light" class="min-h-screen">
    <header class="dashboard-header">
      <div class="nav__wrapper">
        <AppNav
          @toggle-notifications="(e:boolean) => (notificationsVisible = e)"
        />
        <AppNotifications
          v-if="notificationsVisible"
          @toggle-notifications="(e:boolean) => (notificationsVisible = e)"
        />
      </div>
      <slot name="sub-header"></slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.dashboard-header {
  @apply sticky top-0 z-10 bg-white;
  .nav__wrapper {
    box-shadow: inset 0 -1px 0 #e4e4e4;
  }
}
</style>
