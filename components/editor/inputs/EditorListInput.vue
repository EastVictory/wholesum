<script setup lang="ts">
type Content = {
  type: string;
  content: any;
};

const title = ref("");
const text = ref("");
const list: Ref<string[]> = ref([]);
const emits = defineEmits<{ submit: [content: Content] }>();
const handleSubmit = () => {
  emits("submit", {
    type: "list",
    content: { title: title.value, list: list.value },
  });
  title.value = "";
  list.value = [];
};
const addList = () => {
  list.value.push(text.value);
  text.value = "";
};
</script>

<template>
  <div class="editor-list-input">
    <div>
      <input v-model="title" type="text" placeholder="Title" class="mb-2" />
    </div>
    <ul class="list-disc ml-4">
      <li class="">
        <input
          v-model="text"
          type="text"
          placeholder="Add an item"
          class="placeholder:font-medium font-medium"
          @keyup.exact.enter="addList"
          @keyup.ctrl.enter="handleSubmit"
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
  </div>
</template>

<style scoped lang="scss">
.editor {
  &-list-input {
    @apply w-full;
    input {
      @apply text-sm text-dark;
      @apply focus:outline-0 placeholder:font-garamond placeholder:text-sm placeholder:italic placeholder:text-dark font-garamond;
    }
  }
}
</style>
