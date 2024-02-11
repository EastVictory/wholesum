<script setup lang="ts">
import ProgressBar from "~/components/landing/ProgressBar.vue";

withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    tag: string;
    active: boolean;
    currentProgress: number;
  }>(),
  {
    active: false,
    currentProgress: 0,
  }
);
const show = ref(false);

const emit = defineEmits<{
  (e: "start", value: boolean): void;
  (e: "stop", value: boolean): void;
}>();

const start = () => {
  emit("start", true);
};
const stop = () => {
  emit("stop", false);
};
</script>

<template>
  <section
    class="feature-row"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <Transition :duration="{ enter: 200, leave: 2000 }">
      <div>
        <div
          class="rounded"
          :class="{ ['feature-row__preview']: !active, hidden: active }"
        >
          <nuxt-icon
            :name="image"
            filled
            class="w-[4rem] h-[4rem] inline-block"
          />
          <h3 class="font-subtitle text-[2rem] leading-[1.5rem] text-dark h-0">
            {{ title }}
          </h3>
        </div>
        <div :class="{ ['feature-row__main']: active, hidden: !active }">
          <div class="flex gap-[2.625rem] mb-[3rem]">
            <nuxt-icon
              :name="image"
              filled
              class="w-[4rem] h-[4rem] inline-block"
            />
            <div>
              <p class="text-sm text-conditioner font-jetbrains">{{ tag }}</p>
              <h3
                class="text-[2rem] leading-[2.625rem] text-conditioner font-subtitle"
              >
                {{ title }}
              </h3>
            </div>
          </div>
          <p
            class="text-white/50 font-title text-[1.5rem] leading-[2.375rem] mb-4"
          >
            {{ description }}
          </p>
          <ProgressBar
            :progress="currentProgress"
            background-color="bg-white"
            text-color="text-conditioner"
            @stop="stop"
            @start="start"
          />
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped lang="scss">
.feature-row {
  @apply max-w-[52.625rem] w-full;
  &__preview {
    @apply flex bg-crayola w-full pt-[1.6875rem] pb-[2.5rem] cursor-pointer w-full;
    @apply rounded-[1.25rem] gap-[2.5rem] items-center pl-[4.5625rem] pr-4 transition-all;
    transition-delay: 3000ms;
  }
  &__main {
    @apply rounded cursor-pointer w-full;
    @apply bg-dark-puce px-[5.625rem] pt-[2.5rem] pb-[3.375rem] transition-all;
    transition-delay: 3000ms;
  }
}
</style>
