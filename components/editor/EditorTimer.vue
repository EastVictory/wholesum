<script setup lang="ts">
import { useEditorStore } from "~/store/editor";
const editorStore = useEditorStore();
const { configuration } = storeToRefs(editorStore);

const sessionActive = ref(true);
const isPlaying = ref(false);

const durationInSeconds = ref(configuration.value.duration * 60);
const breaksInSeconds = ref(configuration.value.break * 60);

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
  } else {
    isPlaying.value = true;
    stopInterval(breaksInterval);
    countInterval = setInterval(() => {
      progressCountdown();
    }, 1000);
  }
  stopInterval(breaksInterval);
};

const stopPlayer = () => {
  isPlaying.value = false;
  durationInSeconds.value = configuration.value.duration * 60;
  breaksInSeconds.value = configuration.value.break * 60;
  stopInterval(countInterval);
  stopInterval(breaksInterval);
};

const pausePlayer = () => {
  isPlaying.value = false;
  stopInterval(countInterval);
  stopInterval(breaksInterval);
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
};

onMounted(() => {
  startPlayer();
});
</script>

<template>
  <section class="flex flex-1 w-full">
    <div>
      <p class="text-licorice text-[1.5625rem] font-mono">
        <span v-if="isPlaying || sessionActive">
          {{ countdown.mins }} Mins : {{ countdown.seconds }} Secs
        </span>
        <span v-else-if="!sessionActive">
          {{ breaksCountdown.mins }} Mins : {{ breaksCountdown.seconds }} Secs
        </span>
      </p>
    </div>
    <div class="flex gap-8 w-full flex-1 justify-center">
      <button v-if="isPlaying" class="p-3" @click="pausePlayer">
        <nuxt-icon name="pause" class="h-3 w-3" filled />
      </button>
      <button v-else class="p-3" @click="startPlayer">
        <nuxt-icon name="start" class="h-3 w-3" filled />
      </button>
      <button class="p-3" @click="stopPlayer">
        <nuxt-icon name="stop" class="h-3 w-3" filled />
      </button>
      <button
        class="bg-conditioner px-5 py-4 rounded-lg text-licorice font-mono text-xs whitespace-nowrap"
        @click="startBreak"
      >
        START BREAK
      </button>
      <button>
        <nuxt-icon name="audio" class="h-3 w-3" filled />
      </button>
      <button
        class="bg-[#2E52B2] px-3 py-4 rounded-lg text-white font-mono text-xs whitespace-nowrap"
        @click="startBreak"
      >
        END POMO SESSION
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
