<script setup lang="ts">
const activities = [
  {
    title: "GROCERY LIST",
    duration: 26,
  },
];
</script>

<template>
  <div class="daily-calendar">
    <div class="flex justify-between items-center">
      <p class="text-2xl font-mono text-licorice">RECENT ACTIVITY</p>
      <nuxt-link class="shie-button px-3 bg-white gap-1 py-2" to="#">
        <span class="text-xs font-title h-2 text-black">ALL TODO</span>
        <nuxt-icon name="chevron-right" class="text-dark-puce h-2 w-2" filled />
      </nuxt-link>
    </div>
    <section v-if="false" class="flex flex-col gap-3">
      <div
        v-for="activity in activities"
        :key="activity.title"
        class="flex bg-white justify-between"
      >
        <p>
          {{ activity.title }}
        </p>
        <p>
          {{ activity.duration }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
