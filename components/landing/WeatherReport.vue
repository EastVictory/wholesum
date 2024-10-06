<script setup lang="ts">
import { DateTime } from "luxon";
const date = DateTime.now().toFormat("DDD");

type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

type Condition = {
  text: string;
  icon: string;
  code: number;
};

type Current = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

type WeatherData = {
  location: Location;
  current: Current;
};

const weather = ref<WeatherData | null>(null);
const getUserLocation = () => {
  const key = `4fb9229cc7d44583805144215241103`;
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const data = await $fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`
      );
      weather.value = data as WeatherData;
    },
    (error) => {
      console.error(error.message);
    }
  );
};

onMounted(() => {
  getUserLocation();
});
</script>

<template>
  <div class="max-w-[13.1875rem] font-mono text-licorice">
    <div v-if="weather">
      <p class="mb-2 text-lg">{{ date }}</p>
      <p class="mb-1 text-sm font-light">
        It is about {{ weather?.current?.temp_c }}° near
        {{ weather?.location?.name }},
        {{ weather?.location?.region }}
      </p>
    </div>
    <p v-else>Please allow user location</p>

    <button class="text-xs">Change location</button>
  </div>
</template>

<style scoped lang="scss"></style>
