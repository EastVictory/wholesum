<script setup lang="ts">
import { useEventBus } from "@vueuse/core";
import { DateTime } from "luxon";

type Content = {
  type: string;
  content: any;
  createdAt: string;
};
type Check = {
  check: string;
  selected: boolean;
};

const bus = useEventBus<string>("controls:save");

const title = ref("");
const checkbox = ref("");
const checkboxes: Ref<Check[]> = ref([]);
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", {
    type: "checkbox",
    content: { title: title.value, checkboxes: checkboxes.value },
    createdAt: DateTime.now().toFormat(`d LLL '‘'yy '.' t a`),
  });
  title.value = "";
  checkboxes.value = [];
};
const addCheckbox = () => {
  if (checkbox.value.length) {
    checkboxes.value.push({ check: checkbox.value, selected: true });
    checkbox.value = "";
  }
};

bus.on((event: string) => {
  if (event && checkboxes.value.length) {
    handleSubmit();
  }
});
</script>

<template>
  <div class="editor-checkbox-input">
    <div>
      <input
        v-model="title"
        type="text"
        placeholder="Checklist"
        class="mb-2 focus:hover:bg-transparent hover:bg-[#76D7EA] p-1"
      />
    </div>
    <div class="flex gap-2">
      <input type="checkbox" readonly disabled />
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
    @apply w-full h-full;
    input {
      @apply text-sm text-dark font-garamond;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:text-dark;
    }
  }
}
</style>
