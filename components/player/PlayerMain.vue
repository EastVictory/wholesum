<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";
import PlayerMainSession from "~/components/player/PlayerMainSession.vue";
import PlayerMainBreak from "~/components/player/PlayerMainBreak.vue";
const playerSession: any = ref(null);

const sessionActive = ref(true);
const isPlaying = ref(false);
const duration = 1;
const breaks = 5;
const speed = ref(1);
const durationInSeconds = ref(duration * 60);
const breaksInSeconds = ref(breaks * 60);

const countdown = computed(() => {
  return {
    mins: Math.floor(durationInSeconds.value / 60),
    seconds: Math.floor(durationInSeconds.value % 60),
  };
});

const breaksCountdown = computed(() => {
  return {
    mins: Math.floor(breaksInSeconds.value / 60),
    seconds: Math.floor(breaksInSeconds.value % 60),
  };
});

let countInterval: NodeJS.Timer | null = null;
let breaksInterval: NodeJS.Timer | null = null;

const stopInterval = (interval: NodeJS.Timer | null) => {
  if (interval) {
    clearInterval(interval);
  }
};

onBeforeUnmount(() => {
  stopInterval(countInterval);
  stopInterval(breaksInterval);
});

watch(durationInSeconds, (val) => {
  if (val === 0) {
    stopInterval(countInterval);
    playerSession.value?.stopPlayer();
  }
});
watch(breaksInSeconds, (val) => {
  if (val === 0) {
    stopInterval(breaksInterval);
  }
});

const startPlayer = () => {
  sessionActive.value = true;
  if (isPlaying.value) {
    isPlaying.value = false;
    stopInterval(countInterval);
    playerSession.value?.pausePlayer();
  } else {
    isPlaying.value = true;
    playerSession.value?.startPlayer();
    stopInterval(breaksInterval);
    countInterval = setInterval(() => {
      progressCountdown();
    }, 1000);
  }
  stopInterval(breaksInterval);
};

const stopPlayer = () => {
  isPlaying.value = false;
  durationInSeconds.value = duration * 60;
  breaksInSeconds.value = breaks * 60;
  stopInterval(countInterval);
  stopInterval(breaksInterval);
  playerSession.value?.stopPlayer();
};

const progressCountdown = () => {
  durationInSeconds.value -= 1;
};
const progressBreaksCountdown = () => {
  breaksInSeconds.value -= 1;
};

const startBreak = () => {
  stopPlayer();
  sessionActive.value = false;
  isPlaying.value = false;
  stopInterval(countInterval);
  breaksInterval = setInterval(() => {
    progressBreaksCountdown();
  }, 1000);
  playerSession.value?.pausePlayer();
};
const handlePlayerComplete = () => {
  stopInterval(countInterval);
  stopInterval(breaksInterval);

  // console.log("handlePlayerComplete");
};
</script>

<template>
  <section class="w-full flex-1">
    <PlayerMainSession
      v-if="sessionActive"
      ref="playerSession"
      :countdown="countdown"
      :speed="speed"
      @on-complete="handlePlayerComplete"
    />
    <PlayerMainBreak v-else :countdown="breaksCountdown" />

    <div class="px-6 flex gap-[1.5rem] justify-center">
      <ShieButton
        variant="primary"
        class="!bg-white !border-x-[0.12rem] !border-t-[0.13rem]"
        @click="stopPlayer"
      >
        <nuxt-icon name="stop" filled />
      </ShieButton>
      <ShieButton
        variant="primary"
        class="!bg-conditioner !border-x-[0.12rem] !border-t-[0.13rem]"
        @click="startPlayer"
      >
        <nuxt-icon v-if="isPlaying" name="pause" filled />
        <nuxt-icon v-else name="start" filled />
      </ShieButton>
      <ShieButton
        variant="secondary"
        class="whitespace-nowrap !px-4 !w-[7.625rem] mx-auto !text-[0.75rem] !bg-dark-puce !text-conditioner"
        @click="startBreak"
      >
        Start break
      </ShieButton>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
