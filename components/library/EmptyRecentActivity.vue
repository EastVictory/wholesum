<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
</script>

<template>
  <section
    class="max-w-[36.6875rem] w-full mx-auto bg-[#CEC8EF] rounded-[1.375rem] min-h-[14rem] flex justify-center items-center flex-col shie-black-border py-10"
  >
    <div class="flex justify-center mb-[2.14rem]">
      <nuxt-icon name="box" filled />
    </div>
    <p
      class="max-w-[14.0625rem] mx-auto text-center text-dark text-base leading-6 mb-6"
    >
      You don’t have any To Dos in your Library
    </p>
    <ShiePillButton class="min-w-[12.875rem]">CREATE A NEW TASK</ShiePillButton>
  </section>
</template>

<style scoped lang="scss"></style>
