<script setup lang="ts">
type Content = {
  type: string;
  content: any;
};
type Check = {
  check: string;
  selected: boolean;
};
const title = ref("");
const checkbox = ref("");
const checkboxes: Ref<Check[]> = ref([]);
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", {
    type: "checkbox",
    content: { title: title.value, checkboxes: checkboxes.value },
  });
  title.value = "";
  checkboxes.value = [];
};
const addCheckbox = () => {
  checkboxes.value.push({ check: checkbox.value, selected: true });
  checkbox.value = "";
};
</script>

<template>
  <div class="editor-checkbox-input">
    <div>
      <input v-model="title" type="text" placeholder="Title" class="mb-2" />
    </div>
    <div class="flex gap-2">
      <input type="checkbox" readonly />
      <input
        v-model="checkbox"
        type="text"
        placeholder="Add an item"
        class="placeholder:font-medium font-medium"
        @keyup.exact.enter="addCheckbox"
        @keyup.ctrl.exact="handleSubmit"
      />
    </div>
    <div>
      <div
        v-for="(check, i) in checkboxes"
        :key="`check-${i}`"
        class="flex gap-2"
      >
        <input
          :id="`check-${i}`"
          v-model="checkboxes[i].selected"
          type="checkbox"
        />
        <label
          :for="`check-${i}`"
          class="font-medium font-garamond text-sm text-dark"
        >
          {{ check.check }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-checkbox-input {
    @apply w-full;
    input {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:italic placeholder:text-dark;
    }
  }
}
</style>
