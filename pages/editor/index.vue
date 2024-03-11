<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import WeatherReport from "~/components/editor/WeatherReport.vue";
import DailyCalendar from "~/components/editor/DailyCalendar.vue";
import DailyCharts from "~/components/editor/DailyCharts.vue";
import RecentActivity from "~/components/editor/RecentActivity.vue";
</script>

<template>
  <DashboardLayout title="Editor">
    <section class="flex">
      <div
        class="w-full lg:w-1/2 pl-[9.4375rem] pr-[3.375rem] pt-4 editor-half"
      >
        <WeatherReport class="mb-12" />
        <DailyCalendar class="mb-12" />
        <DailyCharts class="mb-12" />
        <RecentActivity />
      </div>
      <div class="w-full lg:w-1/2"></div>
    </section>
  </DashboardLayout>
</template>

<style scoped lang="scss">
.editor-half {
  @apply bg-[url('/images/svg/border-dashes.svg')] bg-no-repeat bg-right-top bg-contain;
}
</style>
