<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";

const recentActivities = ["Resource", "Shelf", "All to do"];
</script>

<template>
  <DashboardLayout title="Library">
    <section class="max-w-[36.6875rem] flex w-full gap-6 mx-auto mb-[1.81rem]">
      <div
        class="shie-black-border rounded-[0.9075rem] px-4 py-6 bg-soap flex-1"
      >
        <p
          class="text-[0.99rem] text-dark leading-[1.65rem] font-title mb-4 pr-6 uppercase"
        >
          Weekly Streak
        </p>
        <p
          class="font-title leading-[1.004rem] text-[1.3125rem] text-dark mb-2"
        >
          0
        </p>
      </div>
      <div
        class="shie-black-border rounded-[0.9075rem] px-4 py-6 bg-soap flex-1"
      >
        <p
          class="text-[0.99rem] text-dark leading-[1.65rem] font-title mb-4 pr-6 uppercase"
        >
          Daily Goal
        </p>
        <button
          v-if="true"
          class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs hover:text-cardinal w-full h-[1.5rem] items-center inline-flex justify-center"
        >
          <span class="h-[0.8125rem]"> Set Goals </span>
        </button>
        <p
          v-else
          class="font-title leading-[1.004rem] text-[1.3125rem] text-dark mb-2"
        >
          25 mins
        </p>
      </div>
      <button
        class="shie-black-border rounded-[0.9075rem] p-4 bg-white flex items-center justify-center hover:border-cardinal transition-all"
      >
        <span class="font-title text-[1.3125rem] text-dark">New Todo</span>
      </button>
    </section>

    <section class="max-w-[36.6875rem] w-full gap-6 mx-auto mb-[3rem]">
      <p class="text-base font-title leading-[2rem]">Trial Progress</p>
      <div class="flex gap-2 py-[1.12rem]">
        <div v-for="n in 6" :key="n" class="flex-1">
          <span
            class="bg-[#D9D9D9] rounded-lg h-[1.625rem] inline-block w-full"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-dark font-title text-base leading-8">
          59/60 days left of trial
        </p>
        <button
          class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs pt-2 hover:text-cardinal"
        >
          UPGRADE NOW
        </button>
      </div>
    </section>

    <section
      class="max-w-[36.6875rem] w-full gap-6 mx-auto mb-[2.32rem] flex items-center"
    >
      <p
        class="font-title text-base text-dark uppercase max-w-[8.25rem] text-center"
      >
        Recent Activity
      </p>
      <div class="flex gap-6 flex-1">
        <div
          v-for="(recentActivity, i) in recentActivities"
          :key="`rc-${i}`"
          class="shie-black-border rounded-[0.9075rem] p-4 bg-crayola flex items-center justify-center h-[7.49088rem] flex-1"
        >
          <p class="font-title text-base text-dark uppercase h-[1rem]">
            {{ recentActivity }}
          </p>
        </div>
      </div>
    </section>
    <section
      class="max-w-[36.6875rem] w-full mx-auto bg-[#D9D9D9] rounded min-h-[14rem] flex justify-center items-center flex-col"
    >
      <div class="flex justify-center mb-[2.14rem]">
        <nuxt-icon name="box" filled />
      </div>
      <p
        class="max-w-[14.0625rem] mx-auto text-center text-dark text-base leading-6"
      >
        You don’t have any To Dos in your Library
      </p>
    </section>
  </DashboardLayout>
</template>

<style scoped lang="scss"></style>
