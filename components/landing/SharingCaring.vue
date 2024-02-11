<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
</script>

<template>
  <section class="shie-container">
    <div class="max-w-[69.6875rem] mx-auto">
      <div class="flex justify-center gap-[7.0625rem] items-center">
        <section class="max-w-[22.1875rem]">
          <h3
            class="font-subtitle text-[2.75rem] uppercase leading-[4rem] text-dark mb-[1.4375rem]"
          >
            Sharing is caring
          </h3>
          <p class="font-title text-2xl leading-[2.5rem]">
            Rather than just a standard PDF, wholesum makes it easy to take
            action with interactive notes.
          </p>
        </section>
        <div
          class="shie-black-border rounded-2xl w-[35.5rem] h-[30.375rem] bg-white border-[3.5px]"
        >
          <div
            class="flex flex-col justify-between items-center h-full text-dark"
          >
            <div class="pt-[4.5rem]">
              <p class="font-subtitle text-[2rem] leading-[2.5625rem]">
                CLEANING SCHEDULE
              </p>
            </div>
            <div
              class="border-b border-dotted border-dark-puce h-4 w-full"
            ></div>
            <div class="pb-[2.5rem] text-center">
              <p class="font-title text-[1.5rem] leading-[3rem] mb-10">
                BY @BORNONAWEDNESDAY
              </p>
              <ShiePillButton>Edit Note</ShiePillButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
