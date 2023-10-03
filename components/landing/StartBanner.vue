<script setup lang="ts">
import ShieLink from "~/components/buttons/ShieLink.vue";
</script>

<template>
  <section
    class="mx-auto max-w-[69.25rem] bg-[#B2C4C3] py-[3.55rem] shie-black-border rounded-[1.375rem] lg:pl-[6.25rem] pr-[3.125rem]"
  >
    <p class="font-subtitle text-[2.5rem] text-dark-puce mb-6">
      <slot name="title"> Take life easy, one task at a time </slot>
    </p>
    <p class="mb-8 text-dark-puce text-2xl font-title">
      <slot name="subtitle"> Start with 60 days free and AUD $ 7.99/mo </slot>
    </p>
    <div class="flex items-center justify-end gap-6">
      <div>
        <ShieLink to="/auth/login" class="inline-block">Start Now</ShieLink>
      </div>
      <div>
        <ShieLink variant="secondary" to="/resources" class="inline-block">
          VISIT FULL LIBRARY
        </ShieLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
