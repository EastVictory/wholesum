<script setup lang="ts">
import { DateTime } from "luxon";
const date = DateTime.now().toFormat("DDD");

const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    },
    (error) => {
      console.log(error.message);
    }
  );
};

onMounted(() => {
  getUserLocation();
});
</script>

<template>
  <div class="weather__report">
    <p class="mb-6 text-2xl text-licorice font-mono">WEATHER TODAY</p>
    <div class="text-licorice pl-[2.1875rem] font-mono">
      <p class="mb-6 text-2xl">{{ date }}</p>
      <p class="mb-6">Melbourne, Victoria as of 21:20 AEDT</p>
      <p class="mb-6">17° • Cloudy • Day 22° • Night 15°</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
