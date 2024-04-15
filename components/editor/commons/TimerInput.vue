<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";

const props = withDefaults(
  defineProps<{
    min: number;
    max: number;
  }>(),
  {
    min: 0,
    max: 0,
  }
);

const value = defineModel<number | null>();
defineEmits(["input"]);

const handleMinus = () => {
  if (value?.value === props.min) {
    return;
  }
  value.value = value.value ? value.value - 1 : 0;
};

const handleAddition = () => {
  if (value?.value === props.max) {
    return;
  }
  value.value = value.value ? value.value + 1 : 0;
};
</script>

<template>
  <div class="w-[8.875rem]">
    <div class="flex gap-2 items-center">
      <div
        class="flex items-center justify-center w-full border-2 shie-black-border rounded-[0.36rem] py-4 h-[2.875rem] mb-2 text-[1.25rem] bg-transparent min-w-[6.875rem]"
      >
        <input
          v-bind="$attrs"
          v-model="value"
          type="number"
          :min="min"
          :max="max"
          class="appearance-none inline-block focus-visible:border-cardinal outline-none w-1/2 text-right font-semibold bg-transparent text-dark"
        />
        <span class="w-1/2 font-semibold text-[#87848A]">/{{ max }}</span>
      </div>
      <p class="font-medium text-outer-space font-mono">Mins</p>
    </div>

    <div class="flex flex-row gap-2 w-[6.875rem]">
      <ShieButton
        variant=""
        class="flex-1 !px-2 h-[1.875rem] text-center font-medium border-2 border-dark-puce text-black !bg-crayola"
        @click="handleMinus"
      >
        -
      </ShieButton>
      <ShieButton
        variant=""
        class="flex-1 !px-2 h-[1.875rem] text-center font-medium border-2 border-dark-puce text-black !bg-crayola"
        @click="handleAddition"
      >
        +
      </ShieButton>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
