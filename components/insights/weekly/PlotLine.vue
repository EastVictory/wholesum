<script setup lang="ts">
import { DateTime, Duration } from "luxon";
import { ComputedRef } from "vue";

type Dates = {
  color: string;
  title: string;
};

const colors = ["#F6B511", "#4F42B5"];

const options = {
  chart: {
    id: "vuechart-example",
    toolbar: {
      show: false,
    },
  },
  colors,
  legend: { show: false },
  markers: {
    size: 2,
  },
  xaxis: {
    categories: ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"],
  },
};
const dataSeries = [
  {
    data: [10, 15, 12, 20, 21, 11, 28, 32],
  },
  {
    data: [40, 42, 40, 35, 45, 50, 46, 42],
  },
];

const generateTodayDates = (days: number) => {
  const format = `ccc',' LLL L`;
  const now = DateTime.now();
  const dates = [now.toFormat(format)];

  for (let i = 1; i < days; i++) {
    dates.push(now.plus(Duration.fromObject({ days: i })).toFormat(format));
  }
  return dates;
};

const dates: ComputedRef<Dates[]> = computed(() => {
  return generateTodayDates(2).map((val, i) => ({
    color: colors[i],
    title: val,
  }));
});

const series = computed(() => {
  return generateTodayDates(2).map((val, i) => ({
    data: dataSeries[i].data,
    name: val,
  }));
});
</script>

<template>
  <div
    class="bg-white max-w-[39.5rem] min-h-[35.625rem] rounded shie-black-border flex flex-col"
  >
    <div class="flex-1 h-full flex justify-center items-center">
      <client-only>
        <apexchart
          width="500"
          type="line"
          :options="options"
          :series="series"
        ></apexchart>
      </client-only>
    </div>
    <div
      class="text-center font-title flex gap-8 items-center justify-center pb-4"
    >
      <p
        v-for="date in dates"
        :key="date.title"
        class="flex items-center gap-3"
      >
        <span class="h-4">
          {{ date.title }}
        </span>
        <span
          class="w-4 h-4 inline-block"
          :style="{
            backgroundColor: date.color,
          }"
        />
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
