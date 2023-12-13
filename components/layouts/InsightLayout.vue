<script setup lang="ts">
import { Ref } from "vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
type Duration = "today" | "weekly" | "monthly" | "yearly";
const durations: Array<Duration> = ["today", "weekly", "monthly", "yearly"];

const activeDuration: Ref<Duration> = ref("today");
</script>

<template>
  <section
    class="max-w-[74.135rem] flex w-full gap-[6rem] mx-auto mb-[1.81rem] flex-row justify-between mt-[5.5rem]"
  >
    <div>
      <p>Date</p>
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
        @click="activeDuration = duration"
      >
        {{ duration }}
      </ShieButton>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
