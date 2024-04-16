<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";
import TimerInput from "~/components/editor/commons/TimerInput.vue";
import { useEditorStore } from "~/store/editor";

const editorStore = useEditorStore();

const { saveEditor } = editorStore;
const noteTypes = [
  "text",
  "checklist",
  "radio button",
  "image",
  "link",
  "table",
];
const noteLabels = ["education", "sociality", "self care", "fitness"];

const config = ref({
  title: "",
  category: "text",
  label: "education",
  duration: 25,
  break: 10,
  onTimerEnd: "HARP",
});
const createNote = () => {
  saveEditor(config.value);
  navigateTo("/editor/create");
};
</script>

<template>
  <form class="px-[4.75rem]" @submit.prevent="createNote">
    <div class="mb-12">
      <input
        v-model="config.title"
        required
        type="text"
        placeholder="Start a new note..."
        class="bg-transparent text-dark-puce placeholder:text-dark-puce text-[1.5rem] leading-[1.5rem] font-title placeholder:font-title py-6 outline-0 inline-flex items-center align-middle h-8"
      />
    </div>
    <div class="flex max-w-[29.375rem] flex-wrap gap-3 mb-12">
      <div v-for="(tag, i) in noteTypes || []" :key="`cty-${i}`" class="">
        <label
          :for="`cty-${i}`"
          class="resource-tag__label"
          :class="{
            'resource-tag__label--checked': tag === config.category,
          }"
        >
          <nuxt-icon
            name="ankh"
            filled
            :class="`${tag === config.category ? 'inline-block' : 'hidden'}`"
          />{{ tag }}
        </label>
        <input
          :id="`cty-${i}`"
          v-model="config.category"
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
              'resource-tag__label--checked': tag === config.label,
            }"
          >
            <nuxt-icon
              name="ankh"
              filled
              :class="`${tag === config.label ? 'inline-block' : 'hidden'}`"
            />{{ tag }}
          </label>
          <input
            :id="`note-label-${i}`"
            v-model="config.label"
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
        <TimerInput v-model.number="config.duration" :min="0" :max="90" />
        <TimerInput v-model.number="config.break" :min="0" :max="25" />
      </div>
    </div>
    <div class="flex justify-between items-center mb-12">
      <p class="text-dark-puce font-title h-4">WHEN TIMER ENDS</p>
      <select
        id=""
        v-model="config.onTimerEnd"
        name="timerEnd"
        class="bg-transparent border-b border-outer-space px-2 py-2 font-medium text-outer-space"
      >
        <option value="HARP" selected>HARP</option>
        <option value="FLUTE">FLUTE</option>
      </select>
    </div>
    <div>
      <ShieButton class="!bg-conditioner !py-4" type="submit">
        <span
          class="h-4 font-medium text-outer-space font-title w-full text-center flex-1"
        >
          START TO-DO
        </span>
        <nuxt-icon name="logo-icon" filled class="rotate-90 w-5" />
      </ShieButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.resource-tag__label {
  @apply border-2 border-dashed border-taupe-gray rounded-[0.36331rem] text-xxs font-medium text-dark leading-[0.57rem] inline-block text-center p-2.5 transition-all cursor-pointer w-[9rem] uppercase;
  &:hover {
    @apply text-cardinal;
  }
  &--checked {
    @apply inline-flex gap-[1.91rem] justify-center items-center;
    @apply border-solid border-outer-space bg-transparent;
  }
}
.resource-tag__input:checked {
  .resource-tag__label {
    @apply border-solid;
  }
}
</style>
