<script setup lang="ts">
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
</script>

<template>
  <div class="rounded-lg w-full py-6 flex flex-col items-center">
    <div class="flex gap-6 items-center">
      <button
        class="editor-control"
        :class="{ active: isActive('text') }"
        @click="selectControl('text')"
      >
        <nuxt-icon name="abc" filled />
      </button>
      <button
        class="editor-control"
        :class="{ active: isActive('checkbox') }"
        @click="selectControl('checkbox')"
      >
        <nuxt-icon name="checkboxes" filled />
      </button>
      <button
        class="editor-control"
        :class="{ active: isActive('list') }"
        @click="selectControl('list')"
      >
        <nuxt-icon name="list" filled />
      </button>
      <button
        class="editor-control"
        :class="{ active: isActive('image') }"
        @click="selectControl('image')"
      >
        <nuxt-icon name="pic-thumb" filled />
      </button>
      <button
        class="editor-control"
        :class="{ active: isActive('link') }"
        @click="selectControl('link')"
      >
        <nuxt-icon name="link" filled />
      </button>
      <button class="editor-save">ADD</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-control {
    @apply border border-transparent rounded-lg py-[0.56rem] hover:border-cardinal w-[2.5rem] inline-flex justify-center items-center h-[2.5rem] transition-all;
    &.active {
      @apply border-2 border-cardinal;
    }
  }
  &-save {
    @apply bg-[#26F] border rounded-[0.36331rem] text-white transition-all;
    @apply h-[2.9375rem] w-[5.75rem] p-6 font-medium text-xs inline-flex justify-center items-center;
    @apply hover:text-cardinal hover:border-cardinal hover:bg-transparent;
  }
}
</style>
