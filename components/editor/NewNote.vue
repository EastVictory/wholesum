<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";
import TimerInput from "~/components/editor/commons/TimerInput.vue";

const noteName = ref("");
const noteTye = ref("Entry");
const noteTypes = ["Entry", "Checklist", "radio button", "image", "link"];

const noteLabel = ref("education");

const noteLabels = ["education", "sociality", "self care", "fitness"];
const time = ref(25);
const duration = ref(5);

const createNote = () => {
  navigateTo("/editor/create");
};
</script>

<template>
  <section class="py-[3.3125rem] px-[4.75rem]">
    <div class="mb-12">
      <input
        v-model="noteName"
        type="text"
        placeholder="/New note"
        class="bg-transparent text-dark-puce placeholder:text-dark-puce text-[1.5rem] leading-[1.5rem] font-title placeholder:font-title py-6 outline-0 inline-flex items-center align-middle h-8"
      />
    </div>
    <div class="flex max-w-[29.375rem] flex-wrap gap-3 mb-12">
      <div v-for="(tag, i) in noteTypes || []" :key="`cty-${i}`" class="">
        <label
          :for="`cty-${i}`"
          class="resource-tag__label"
          :class="{
            'resource-tag__label--checked': tag === noteTye,
          }"
        >
          <nuxt-icon
            name="ankh"
            filled
            :class="`${tag === noteTye ? 'inline-block' : 'hidden'}`"
          />{{ tag }}
        </label>
        <input
          :id="`cty-${i}`"
          v-model="noteTye"
          type="radio"
          class="hidden resource-tag__input"
          name="tag"
          :value="tag"
        />
      </div>
    </div>
    <div class="mb-12">
      <p class="mb-3 font-title text-dark-puce">PICK A LABEL</p>
      <div class="flex max-w-[29.375rem] flex-wrap gap-3">
        <div
          v-for="(tag, i) in noteLabels || []"
          :key="`note-label-${i}`"
          class=""
        >
          <label
            :for="`note-label-${i}`"
            class="resource-tag__label"
            :class="{
              'resource-tag__label--checked': tag === noteLabel,
            }"
          >
            <nuxt-icon
              name="ankh"
              filled
              :class="`${tag === noteLabel ? 'inline-block' : 'hidden'}`"
            />{{ tag }}
          </label>
          <input
            :id="`note-label-${i}`"
            v-model="noteLabel"
            type="radio"
            class="hidden resource-tag__input"
            name="tag"
            :value="tag"
          />
        </div>
      </div>
    </div>
    <div class="mb-12">
      <p class="text-dark-puce mb-3">POMODORO TIMER</p>
      <div class="flex gap-[6.25rem] px-4">
        <TimerInput :min="0" :max="90" />
        <TimerInput :min="0" :max="25" />
      </div>
    </div>
    <div class="flex justify-between items-center mb-12">
      <p class="text-dark-puce font-title h-4">WHEN TIMER ENDS</p>
      <select
        id=""
        name="timerEnd"
        class="bg-transparent border-b border-outer-space px-2 py-2 font-medium text-outer-space"
      >
        <option value="HARP" selected>HARP</option>
        <option value="HARP">FLUTE</option>
      </select>
    </div>
    <div>
      <ShieButton class="!bg-conditioner !py-4" @click="createNote">
        <span
          class="h-4 font-medium text-outer-space font-title w-full text-center flex-1"
        >
          START TO-DO
        </span>
        <nuxt-icon name="logo-icon" filled class="rotate-90 w-5" />
      </ShieButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.resource-tag__label {
  @apply border-2 border-dashed border-taupe-gray rounded-[0.36331rem] text-xxs font-medium text-dark leading-[0.57rem] inline-block text-center p-2.5 transition-all cursor-pointer w-[9rem] uppercase;
  &:hover {
    @apply text-cardinal;
  }
  &--checked {
    @apply inline-flex gap-[1.91rem] justify-center items-center;
    @apply border-solid border-outer-space bg-white;
  }
}
.resource-tag__input:checked {
  .resource-tag__label {
    @apply border-solid;
  }
}
</style>
