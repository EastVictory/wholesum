<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";

withDefaults(
  defineProps<{
    title: string;
    description: string;
  }>(),
  {}
);
const time = ref(0);

const handleMinus = () => {
  if (time.value === 1) {
    return;
  }
  time.value -= 1;
};

const id = Math.random();

const activeCondition = ref("no");

const emit = defineEmits<{ change: [time: number] }>();

watch(time, (val) => {
  emit("change", val);
});
</script>

<template>
  <div
    class="timer-card border-2 border-dark-puce bg-white rounded py-6 px-4 inline-flex flex-col items-center"
  >
    <p
      class="text-dark font-medium leading-[0.58rem] text-base uppercase mb-[1.66rem] text-center"
    >
      {{ title }} <span class="lowercase">(mins)</span>
    </p>
    <div class="w-[6.875rem] mb-[2.37rem]">
      <input
        v-model="time"
        type="number"
        class="appearance-none w-full shie-black-border rounded-[0.36rem] py-4 text-center inline-block mb-2 focus-visible:border-cardinal outline-none h-[2.875rem]"
      />
      <div class="flex flex-row gap-2">
        <ShieButton
          variant="secondary"
          class="flex-1 !px-2 h-[1.875rem] text-center font-medium"
          @click="handleMinus"
        >
          -
        </ShieButton>
        <ShieButton
          variant="secondary"
          class="flex-1 !px-2 h-[1.875rem] text-center font-medium"
          @click="time += 1"
        >
          +
        </ShieButton>
      </div>
    </div>
    <p
      class="text-outer-space text-xxs leading-[0.58rem] font-medium mb-[1.22rem] text-center"
    >
      {{ description }}
    </p>
    <div class="flex flex-row gap-2 w-[6.875rem]">
      <div
        v-for="(condition, i) in ['yes', 'no']"
        :key="`cd-${i}-${id}`"
        class="w-full"
      >
        <label
          :for="`cd-${i}-${id}`"
          class="timer-card__condition"
          :class="{
            'timer-card__condition--active': condition === activeCondition,
          }"
        >
          {{ condition }}
        </label>
        <input
          :id="`cd-${i}-${id}`"
          v-model="activeCondition"
          type="radio"
          class="hidden resource-tag__input"
          name="condition"
          :value="condition"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timer-card {
  &__condition {
    @apply uppercase cursor-pointer transition-all;
    @apply py-[0.6375rem] text-center w-full justify-center items-center gap-[0.92rem] inline-flex;
    @apply flex-1 h-[1.875rem] text-center font-medium text-outer-space text-xxs px-2;
    &--active {
      @apply border-2 border-dark-puce bg-crayola text-black rounded-[0.326rem];
    }
    &:not(.timer-card__condition--active) {
      @apply border-cardinal border-b-2;
    }
  }
}
</style>
