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
  <div
    class="bg-white rounded-lg border-2 border-dark-puce w-full py-6 flex flex-col items-center"
  >
    <div class="flex gap-6">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-control {
    @apply border-2 border-platinum rounded-lg py-[0.56rem] hover:border-cardinal w-[2.5rem] inline-flex justify-center items-center h-[2.5rem];
    &.active {
      @apply border-cardinal;
    }
  }
}
</style>
