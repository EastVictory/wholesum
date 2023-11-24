<script setup lang="ts">
import { Ref } from "vue";
import { useEventBus } from "@vueuse/core";
import { DateTime } from "luxon";

type Content = {
  type: string;
  content: any;
  createdAt: string;
};
const bus = useEventBus<string>("controls:save");

const text = ref("");
const textLimit = ref(102);
const totalTextLimit = computed(() => {
  return list.value.join().length;
});

const list: Ref<string[]> = ref([]);
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", {
    type: "list",
    content: { list: list.value },
    createdAt: DateTime.now().toFormat(`d LLL '"'yy '.' ta`),
  });
  list.value = [];
};
const addList = () => {
  if (text.value.length) {
    list.value.push(text.value);
    text.value = "";
  }
};

bus.on((event: string) => {
  if (event && list.value.length) {
    handleSubmit();
  }
});
</script>

<template>
  <div class="editor-list-input">
    <ul class="list-disc ml-4">
      <li class="">
        <input
          v-model="text"
          type="text"
          placeholder="Start typing"
          class="placeholder:font-medium font-medium"
          :disabled="totalTextLimit > textLimit"
          @keyup.exact.enter="addList"
        />
      </li>
      <li v-for="(entry, i) in list" :key="`entry-${i}`" class="">
        <p
          :for="`entry-${i}`"
          class="font-medium font-garamond text-sm text-dark"
        >
          {{ entry }}
        </p>
      </li>
    </ul>
    <p
      class="text-sm font-garamond leading-5 text-dark font-medium absolute right-1 bottom-0"
    >
      {{ totalTextLimit }}/{{ textLimit }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-list-input {
    @apply w-full relative h-full;
    input {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:text-dark font-garamond;
    }
  }
}
</style>
