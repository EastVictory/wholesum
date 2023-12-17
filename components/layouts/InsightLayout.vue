<script setup lang="ts">
import { Ref } from "vue";
import { DateTime, Duration } from "luxon";
import ShieButton from "~/components/buttons/ShieButton.vue";
type Time = "today" | "weekly" | "monthly" | "calendar";

withDefaults(defineProps<{ time?: Time }>(), { time: "today" });

const durations: Array<Time> = ["today", "weekly", "monthly", "calendar"];
const activeDuration: Ref<Time> = ref("today");
const activeDay = ref("");

const generateTodayDates = () => {
  const format = `ccc',' LLL L`;
  const now = DateTime.now();
  activeDay.value = now.toFormat(format);
  const dates = [now.toFormat(format)];

  for (let i = 1; i < 7; i++) {
    dates.push(now.plus(Duration.fromObject({ days: i })).toFormat(format));
  }
  return dates;
};

const times = {
  today: generateTodayDates(),
  weekly: generateTodayDates(),
  monthly: [],
  calendar: [],
};

const toggleActiveDuration = (duration: Time) => {
  activeDuration.value = duration;
  const url = duration === "today" ? "" : duration;
  navigateTo(`/insights/${url}`);
};
</script>

<template>
  <section
    class="max-w-[74.135rem] flex w-full gap-[6rem] mx-auto mb-[1.81rem] flex-row justify-between mt-[5.5rem]"
  >
    <div>
      <p>Date</p>
      <div class="flex flex-col gap-[2.25rem]">
        <div v-for="(day, i) in times[time]" :key="`day-${i}`" class="w-full">
          <label
            :for="`day-${i}`"
            class="resource-tag__label"
            :class="{
              'resource-tag__label--checked': day === activeDay,
            }"
          >
            <nuxt-icon
              name="ankh"
              filled
              :class="`${day === activeDay ? 'inline-block' : 'hidden'}`"
            />{{ day }}
          </label>
          <input
            :id="`day-${i}`"
            v-model="activeDay"
            type="radio"
            class="hidden resource-tag__input"
            name="tag"
            :value="day"
          />
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="flex flex-col gap-6">
      <ShieButton
        v-for="(duration, i) in durations"
        :key="`status-${i}`"
        class="flex-1 whitespace-nowrap !text-dark-puce !max-w-[12.16681rem] capitalize !max-h-[2.375rem]"
        :class="`${
          activeDuration === duration
            ? '!bg-transparent !border-x-0 !border-t-0 !border-cardinal !border-b-4 !rounded-none'
            : '!bg-white !border-[#4D3B3C] !border-b-[0.44rem] !border-x-[0.15rem] !border-t-[0.12rem]'
        }`"
        @click="toggleActiveDuration(duration)"
      >
        {{ duration }}
      </ShieButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.resource-tag__label {
  @apply border-2 border-dashed border-taupe-gray rounded-[0.36331rem] text-xxs font-medium text-dark leading-[0.57rem] inline-block text-center p-2.5 transition-all cursor-pointer w-[9rem];
  &:hover {
    @apply text-cardinal;
  }
  &--checked {
    @apply inline-flex gap-[1.91rem] justify-center items-center;
    @apply border-solid border-outer-space;
  }
}
.resource-tag__input:checked {
  .resource-tag__label {
    @apply border-solid;
  }
}
</style>
