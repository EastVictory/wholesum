<script setup lang="ts">
import { Ref } from "vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import InsightLayout from "~/components/layouts/InsightLayout.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import NotificationsTab from "~/components/insights/daily/NotificationsTab.vue";
import BarChartTab from "~/components/insights/daily/BarChartTab.vue";

const stats = [
  { text: "WEEKLY STREAK", value: "3 weeks" },
  { text: "DAILY GOALS", value: "69/100 mins" },
  { text: "ALL TODO TIME", value: "2,017 mins" },
];

type Tab = "line plot" | "bar chart";

const tabs: Tab[] = ["line plot", "bar chart"];
const activeTab: Ref<Tab> = ref("line plot");
</script>

<template>
  <DashboardLayout title="Insights">
    <InsightLayout time="weekly">
      <section class="flex flex-col lg:flex-row gap-4 mb-[2.56rem]">
        <div
          v-for="(stat, i) in stats"
          :key="`stat-${i}`"
          class="shie-black-border rounded-[0.9075rem] p-6 bg-soap flex-1 h-[8.0625rem] flex flex-col justify-between w-[12.5rem]"
        >
          <p
            class="text-[0.99rem] text-dark leading-[1.65rem] font-title mb-4 uppercase"
          >
            {{ stat.text }}
          </p>
          <p
            class="font-title leading-[1.004rem] text-[1.3125rem] text-dark mb-2"
          >
            {{ stat.value }}
          </p>
        </div>
      </section>
      <section class="flex items-center justify-between mb-[2.56rem]">
        <p class="font-title text-dark h-4">Last 2 days</p>
        <div class="flex gap-4">
          <ShiePillButton
            v-for="tab in tabs"
            :key="tab"
            class="w-[9.125rem]"
            :class="
              activeTab === tab
                ? '!bg-transparent !border-x-0 !border-t-0 !border-cardinal !border-b-2 !rounded-none !pb-4'
                : ''
            "
            @click="activeTab = tab"
          >
            {{ tab }}
          </ShiePillButton>
        </div>
      </section>
      <section v-if="activeTab === 'line plot'">
        <NotificationsTab />
      </section>
      <section v-if="activeTab === 'bar chart'">
        <BarChartTab />
      </section>
    </InsightLayout>
  </DashboardLayout>
</template>

<style scoped lang="scss"></style>
