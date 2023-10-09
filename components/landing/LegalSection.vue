<script setup lang="ts">
withDefaults(defineProps<{ title: string; description?: string | null }>(), {
  description: null,
});
</script>

<template>
  <section>
    <h2 class="font-title uppercase text-black text-2xl mb-6">{{ title }}</h2>
    <slot>
      <p
        class="text-dark text-2xl font-light leading-[2.5rem]"
        v-html="description"
      />
    </slot>
  </section>
</template>

<style scoped lang="scss"></style>
