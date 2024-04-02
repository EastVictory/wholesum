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
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`
      );
      weather.value = data as WeatherData;
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
    <div v-if="weather" class="text-licorice pl-[2.1875rem] font-mono">
      <p class="mb-6 text-2xl">{{ date }}</p>
      <p class="mb-6">
        {{ weather?.location?.name }}, {{ weather?.location?.region }} as of
        {{
          DateTime.fromSeconds(weather?.location?.localtime_epoch).toFormat(
            "ttt"
          )
        }}
      </p>
      <p class="mb-6">
        {{ weather?.current?.temp_c }}° •
        {{ weather?.current?.condition?.text }}
      </p>
    </div>
    <div v-else>
      <p>Please allow user location</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
