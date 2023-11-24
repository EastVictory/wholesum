<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import GoalTimerCard from "~/components/library/GoalTimerCard.vue";
const goals = ["Education", "Self care", "Sociality", "Fitness"];
</script>

<template>
  <DashboardLayout title="Library | Goals">
    <section
      class="max-w-[64.91375em] mx-auto flex items-center gap-[4.62rem] w-full px-[2.25rem] lg:px-0 justify-between mb-[2.03rem]"
    >
      <p
        class="text-dark-puce font-title uppercase leading-[1.125rem] text-base"
      >
        <nuxt-link to="/library" class="h-[1.125rem] hover:text-cardinal">
          LIBRARY
        </nuxt-link>
        /
        <span class="text-dark h-[1.125rem]">GOALS</span>
      </p>
      <button
        class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase leading-6 text-xs hover:text-cardinal h-[1.5rem] items-center inline-flex justify-center px-6"
      >
        <span class="h-[1rem]">SAVE &amp; EXIT</span>
      </button>
    </section>
    <section class="max-w-[39.625rem] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6">
        <GoalTimerCard v-for="goal in goals" :key="goal" :title="goal" />
      </div>
    </section>
  </DashboardLayout>
</template>

<style scoped lang="scss"></style>
