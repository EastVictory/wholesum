<script setup lang="ts">
const activities = [
  {
    title: "GROCERY LIST",
    duration: 26,
    range: "2:13 - 2:47PM",
  },
  {
    title: "CLEANING SCHEDULE",
    duration: 26,
    range: "2:13 - 2:47PM",
  },
  {
    title: "WELL-NESS CHECKIN",
    duration: 26,
    range: "2:13 - 2:47PM",
  },
];
</script>

<template>
  <div class="daily-calendar">
    <div class="flex justify-between items-center mb-[2.6875rem]">
      <p class="text-2xl font-mono text-licorice">RECENT ACTIVITY</p>
      <nuxt-link class="shie-button px-3 bg-white gap-1 py-2" to="#">
        <span class="text-xs font-title h-2 text-black">ALL TODO</span>
        <nuxt-icon name="chevron-right" class="text-dark-puce h-2 w-2" filled />
      </nuxt-link>
    </div>
    <section class="flex flex-col gap-3">
      <div class="flex bg-white justify-between py-7 rounded-lg px-4">
        <p class="font-title text-licorice h-4 text-sm">
          🪷 <span>Day 4</span> • <span>DAILY STREAK</span>
        </p>
        <p class="font-title text-licorice h-4 text-xs">2 M ago</p>
      </div>
      <div
        v-for="activity in activities"
        :key="activity.title"
        class="flex bg-white justify-between py-7 rounded-lg px-4 hover:bg-conditioner cursor-pointer group"
      >
        <p class="font-title text-licorice h-4">
          {{ activity.title }}
        </p>
        <p
          class="inline-flex gap-4 text-licorice text-xs font-title h-4 items-center"
        >
          <span class="h-4"> {{ activity.duration }} M </span>
          <span class="h-4">
            {{ activity.range }}
          </span>
          <nuxt-icon
            name="eye"
            filled
            class="w-4 hidden group-hover:inline-block h-4 mb-1"
          />
          <nuxt-icon
            name="padlock"
            filled
            class="w-4 hidden group-hover:inline-block h-4 mb-2"
          />
          <nuxt-icon
            name="dots-horizontal"
            filled
            class="w-4 hidden group-hover:inline-block h-4 mb-2"
          />
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
