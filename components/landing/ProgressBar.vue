<script setup lang="ts">
withDefaults(
  defineProps<{
    progress?: number;
    backgroundColor?: string;
    textColor?: string;
  }>(),
  {
    progress: 0,
    backgroundColor: "bg-dark-puce",
    textColor: "text-dark",
  }
);

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
  <section class="flex gap-4 items-center">
    <button
      :class="`h-10 w-10 py-2 text-conditioner ${textColor}`"
      @click="start"
    >
      <nuxt-icon name="restart" />
    </button>
    <div
      :class="`h-5 w-full rounded-[1.0625rem] overflow-hidden ${backgroundColor}`"
    >
      <div
        class="h-5 bg-crayola rounded-[1.0625rem]"
        :style="`width: ${progress}%`"
      ></div>
    </div>
    <button :class="`h-10 w-10 p-[0.875rem] ${textColor}`" @click="stop">
      <nuxt-icon name="pausev2" />
    </button>
  </section>
</template>

<style scoped lang="scss"></style>
