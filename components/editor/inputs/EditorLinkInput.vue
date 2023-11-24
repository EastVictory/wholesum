<script setup lang="ts">
import { useEventBus } from "@vueuse/core";
import { DateTime } from "luxon";

const bus = useEventBus<string>("controls:save");

type Content = {
  type: string;
  content: any;
  createdAt: string;
};

const url = ref("");
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", {
    type: "link",
    content: url.value,
    createdAt: DateTime.now().toFormat(`d LLL '"'yy '.' ta`),
  });
  url.value = "";
};

bus.on((event: string) => {
  if (event && url.value) {
    handleSubmit();
  }
});
</script>

<template>
  <div class="editor-link-input">
    <input
      v-model="url"
      type="url"
      placeholder="Copy & paste or type url to import media"
    />
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-link-input {
    @apply w-full h-full;
    input {
      @apply text-sm text-dark py-3 w-full font-garamond font-medium;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:text-dark placeholder:font-medium;
    }
  }
}
</style>
