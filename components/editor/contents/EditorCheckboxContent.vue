<script setup lang="ts">
import { DateTime } from "luxon";

const props = withDefaults(
  defineProps<{ content?: any; createdAt?: string }>(),
  {
    content: {},
    createdAt: DateTime.now().toFormat(`d LLL '"'yy '.' ta`),
  }
);

const checkboxes = ref(props.content?.checkboxes || []);
const selected = computed(() => {
  return checkboxes.value.filter((check: any) => check.selected).length;
});
</script>

<template>
  <section class="editor-content-checkbox__wrapper">
    <div class="editor-content-checkbox">
      <p
        class="font-garamond text-xs text-black leading-[0.8378rem] mb-[0.91rem] uppercase"
      >
        {{ createdAt }} . LIST. {{ selected }}/{{ content?.checkboxes.length }}
      </p>
      <div class="">
        <div>
          <p
            class="text-black font-garamond text-sm font-semibold leading-5 mb-[0.91rem]]"
          >
            {{ content?.title }}
          </p>
        </div>
        <div class="list-disc">
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.editor-content-checkbox {
  &__wrapper {
    @apply px-6 py-4 border-b border-dashed border-dark-puce;
  }
  @apply w-full  p-4;
}
</style>
