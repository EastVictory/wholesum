<script setup lang="ts">
import { useEventBus } from "@vueuse/core/index";
import { DateTime } from "luxon";

type Content = {
  type: string;
  content: any;
  createdAt: string;
};
const bus = useEventBus<string>("controls:save");

const text = ref("");
const textLimit = ref(102);
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", {
    type: "text",
    content: text.value,
    createdAt: DateTime.now().toFormat(`d LLL '‘'yy '.' t a`),
  });
  text.value = "";
};
bus.on((event: string) => {
  if (event && text.value.length > 0 && text.value.length <= textLimit.value) {
    handleSubmit();
  }
});
</script>

<template>
  <div class="editor-text-input">
    <textarea
      id=""
      v-model="text"
      name=""
      cols="30"
      placeholder="Start typing..."
      class="w-full"
      :maxlength="textLimit"
    ></textarea>
    <p class="text-right text-sm font-garamond leading-5 text-dark font-medium">
      {{ text.length }}/{{ textLimit }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-text-input {
    @apply w-full;
    textarea {
      @apply text-sm text-dark font-garamond;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:text-dark;
      resize: none;
    }
  }
}
</style>
