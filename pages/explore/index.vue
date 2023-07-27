<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import TodoTab from "~/components/explore/TodoTab.vue";
</script>

<template>
  <DashboardLayout>
    <template #sub-header>
      <section class="bg-[#F5F4F4] shadow-[inset_0_-1px_0_0_#E4E4E4]">
        <div class="flex items-center max-w-[47.1875rem] mx-auto explore-tabs">
          <button class="px-[0.62rem] text-taupe-gray text-sm py-[1.34375rem]">
            JOURNEY
          </button>
          <button
            class="px-[0.62rem] text-taupe-gray text-sm py-[1.34375rem] active-tab"
          >
            TO DO
          </button>
          <button class="px-[0.62rem] text-taupe-gray text-sm py-[1.34375rem]">
            INBOX
          </button>
        </div>
      </section>
    </template>

    <div class="max-w-[47.1875rem] mx-auto">
      <TodoTab />
    </div>
  </DashboardLayout>
</template>

<style scoped lang="scss">
.explore-tabs {
  .active-tab {
    @apply border-b border-byzantine text-[#141414] font-semibold;
  }
}
</style>
