<script setup lang="ts">
import TrendPreview from "~/components/dashboard/TrendPreview.vue";
import TrendCard from "~/components/dashboard/TrendCard.vue";

type Trend = {
  education: number;
  social: number;
  selfCare: number;
  fitness: number;
};
type Breakdown = {
  name: string;
  icon: string;
  mins: number;
  tasks: number;
};

type dayTrends = {
  day: string;
  analytics: Trend;
  breakdown: Breakdown[];
};

const days: dayTrends[] = [
  {
    day: "MON",
    analytics: { education: 20, social: 80, selfCare: 25, fitness: 40 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 5.8,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 12.5,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 23.15,
        tasks: 2,
      },
    ],
  },
  {
    day: "TUE",
    analytics: { education: 30, social: 20, selfCare: 45, fitness: 80 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 9.28,
        tasks: 2,
      },
    ],
  },
  {
    day: "WED",
    analytics: { education: 60, social: 75, selfCare: 25, fitness: 40 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 9.28,
        tasks: 2,
      },
    ],
  },
  {
    day: "THU",
    analytics: { education: 10, social: 30, selfCare: 45, fitness: 80 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 9.28,
        tasks: 2,
      },
    ],
  },
  {
    day: "FRI",
    analytics: { education: 40, social: 40, selfCare: 35, fitness: 20 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 9.28,
        tasks: 2,
      },
    ],
  },
  {
    day: "SAT",
    analytics: { education: 70, social: 80, selfCare: 35, fitness: 70 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 9.28,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 9.28,
        tasks: 2,
      },
    ],
  },
  {
    day: "SUN",
    analytics: { education: 50, social: 60, selfCare: 35, fitness: 80 },
    breakdown: [
      {
        name: "education",
        icon: "trend-education",
        mins: 23.28,
        tasks: 2,
      },
      {
        name: "social",
        icon: "trend-social",
        mins: 10.28,
        tasks: 2,
      },
      {
        name: "self care",
        icon: "trend-self-care",
        mins: 2.28,
        tasks: 2,
      },
      {
        name: "fitness",
        icon: "trend-fitness",
        mins: 1.28,
        tasks: 2,
      },
    ],
  },
];

const activeTrend = ref("SUN");

const currentTrendData = computed(() => {
  return days.find((day) => day.day === activeTrend.value);
});

const currentTrendActivity = ref("education");
</script>

<template>
  <div class="border border-platinum py-6 px-4 rounded">
    <div class="flex justify-between mb-[1.5rem]">
      <p class="text-xxs font-semibold">TRENDS</p>
      <nuxt-link class="underline font-medium text-xxs">show more</nuxt-link>
    </div>
    <div class="flex gap-1 p-4 mb-4">
      <div
        v-for="day in days"
        :key="day.day"
        class="flex-1 p-[0.62rem] flex flex-col items-center trend-preview"
        :class="{ active: activeTrend === day.day }"
        @click="activeTrend = day.day"
      >
        <p class="text-xxs text-[#191521] text-center mb-[0.62rem]">
          {{ day.day }}
        </p>
        <nuxt-icon
          v-if="activeTrend === day.day"
          name="trends"
          class="no-fill text-white"
        />
        <TrendPreview v-else :trend="day.analytics" />
      </div>
    </div>
    <div class="flex gap-2">
      <TrendCard
        v-for="(breakdown, i) in currentTrendData?.breakdown || []"
        :key="`breakdown-${i}`"
        :trend="breakdown"
        :active="currentTrendActivity === breakdown.name"
        @select-activity="(e) => (currentTrendActivity = e)"
      />
    </div>
  </div>
</template>

<style scoped>
.trend-preview {
  @apply border border-white rounded hover:border-byzantine cursor-pointer transition-all;
  &.active {
    @apply border border-dark bg-byzantine;
    p {
      @apply text-white;
    }
  }
}
</style>
