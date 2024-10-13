<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

withDefaults(
  defineProps<{
    title?: string;
    containerClass?: string;
    contentClass?: string;
  }>(),
  {
    title: "",
    containerClass: "flex justify-center items-center",
    contentClass:
      "lg:min-w-[34.875rem] flex flex-col max-w-xl mx-4 py-5 px-[3.25rem] bg-white rounded-[0.625rem] space-y-2",
  }
);

const emit = defineEmits<{ close: void }>();
</script>

<template>
  <VueFinalModal :class="containerClass" :content-class="contentClass">
    <div class="flex justify-end">
      <button
        class="w-[1.875rem] h-[1.875rem] rounded-full inline-flex justify-center items-center bg-licorice/10"
        @click.prevent="emit('close')"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.82172 0.152344L4.99997 3.98132L1.17822 0.152344L0.152344 1.17822L3.98132 4.99997L0.152344 8.82172L1.17822 9.8476L4.99997 6.01862L8.82172 9.8476L9.8476 8.82172L6.01862 4.99997L9.8476 1.17822L8.82172 0.152344Z"
            fill="#1A1110"
            fill-opacity="0.5"
          />
        </svg>
      </button>
    </div>
    <slot></slot>
  </VueFinalModal>
</template>
