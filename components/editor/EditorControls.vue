<script setup lang="ts">
import { useEventBus } from "@vueuse/core";

const bus = useEventBus<string>("controls:save");

type Control = {
  name: string;
  icon: string;
  saveButton: string;
};

const props = withDefaults(defineProps<{ activeControl?: string }>(), {
  activeControl: "text",
});
const selectControl = (control: string) => {
  emit("toggleControls", control);
};
const emit = defineEmits<{ toggleControls: [name: string] }>();
const isActive = (control: string) => {
  return control === props.activeControl;
};

const activeControls = computed(() => {
  return controls.find((control) => control.name === props.activeControl);
});

const controls: Control[] = [
  {
    name: "text",
    icon: "abc",
    saveButton: "ADD",
  },
  {
    name: "checkbox",
    icon: "checkboxes",
    saveButton: "ADD",
  },
  {
    name: "list",
    icon: "list",
    saveButton: "ADD",
  },
  {
    name: "image",
    icon: "pic-thumb",
    saveButton: "UPLOAD",
  },
  {
    name: "link",
    icon: "link",
    saveButton: "INSERT",
  },
];

const handleSave = () => {
  bus.emit("controls:save", true);
};
</script>

<template>
  <div class="rounded-lg w-full py-6 flex flex-col items-center">
    <div class="flex gap-6 items-center">
      <button
        v-for="control in controls"
        :key="control.name"
        class="editor-control"
        :class="{ active: isActive(control.name) }"
        @click="selectControl(control.name)"
      >
        <nuxt-icon :name="control.icon" filled />
      </button>

      <button class="editor-save" @click="handleSave">
        {{ activeControls?.saveButton }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-control {
    @apply border border-transparent rounded-lg py-[0.56rem] hover:border-cardinal w-[2.5rem] inline-flex justify-center items-center h-[2.5rem] transition-all;
    &.active {
      @apply border-2 border-cardinal bg-white;
    }
  }
  &-save {
    @apply bg-[#26F] border rounded-[0.36331rem] text-white transition-all;
    @apply h-[2.9375rem] w-[5.75rem] p-6 font-medium text-xs inline-flex justify-center items-center;
    @apply hover:text-cardinal hover:border-cardinal hover:bg-transparent;
  }
}
</style>
