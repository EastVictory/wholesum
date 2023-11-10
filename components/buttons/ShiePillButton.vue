<script setup lang="ts">
withDefaults(defineProps<{ text?: string }>(), { text: "" });
</script>

<template>
  <button
    class="shie-black-border rounded-[1.375rem] text-dark-puce font-title uppercase px-4 leading-6 text-xs hover:text-cardinal h-[1.5rem] items-center inline-flex justify-center whitespace-nowrap"
  >
    <slot name="content">
      <span class="h-[0.8125rem]">
        <slot>{{ text }}</slot>
      </span>
    </slot>
  </button>
</template>

<style scoped lang="scss"></style>
