<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    min: number;
    max: number;
  }>(),
  {
    min: 0,
    max: 0,
  }
);
const time = ref(props.min);

const handleMinus = () => {
  if (time.value === props.min) {
    return;
  }
  time.value -= 1;
};
const handleAddition = () => {
  if (time.value === props.max) {
    return;
  }
  time.value += 1;
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
      <div
        class="flex items-center justify-center w-full border-2 shie-black-border rounded-[0.36rem] py-4 h-[2.875rem] mb-2 text-[1.25rem]"
      >
        <input
          v-model="time"
          type="number"
          :min="min"
          :max="max"
          class="appearance-none inline-block focus-visible:border-cardinal outline-none w-1/2 text-right font-semibold"
        />
        <span class="w-1/2 font-semibold">/{{ max }}</span>
      </div>

      <div class="flex flex-row gap-2">
        <ShieButton
          variant=""
          class="flex-1 !px-2 h-[1.875rem] text-center font-medium border-2 border-dark-puce bg-transparent text-black hover:bg-crayola"
          @click="handleMinus"
        >
          -
        </ShieButton>
        <ShieButton
          variant=""
          class="flex-1 !px-2 h-[1.875rem] text-center font-medium border-2 border-dark-puce bg-transparent text-black hover:bg-crayola"
          @click="handleAddition"
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
      @apply border-cardinal border-b-2;
    }
    &:not(.timer-card__condition--active) {
      @apply border-2 border-dark-puce bg-crayola text-black rounded-[0.326rem];
    }
  }
}
</style>
