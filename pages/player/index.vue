<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import TaskEditor from "~/components/editor/TaskEditor.vue";
</script>

<template>
  <div class="mx-auto bg-conditioner min-h-screen pt-[3.09rem]">
    <div class="logo-wrapper flex justify-center pb-[3.69rem]">
      <nuxt-link to="/" class="text-black">
        <nuxt-icon
          name="wholesum"
          class="inline-block w-[7.80319rem] h-[1.8125rem] text-black"
          filled
        />
      </nuxt-link>
    </div>
    <section class="max-w-[90rem] mx-auto pb-[5.72rem]">
      <div
        class="max-w-[72.5rem] mx-auto flex items-center justify-between mb-[5rem]"
      >
        <nuxt-link
          to="/library/todo"
          class="flex items-center gap-2 text-dark font-title text-base leading-[1.125rem] uppercase"
        >
          <nuxt-icon name="chevron-left" filled />

          <span class="h-[1.125rem]">Untitled task</span>
        </nuxt-link>
        <div class="flex gap-2 items-center">
          <ShiePillButton>SESSION 001</ShiePillButton>
          <ShiePillButton>EDUCATION</ShiePillButton>
          <ShiePillButton>25 MINS SESSION</ShiePillButton>
          <ShiePillButton>5 MINS BREAK</ShiePillButton>
        </div>
      </div>
      <div class="flex gap-6 justify-between max-w-[57.5625rem] mx-auto">
        <section class="max-w-[24.3125rem] w-full">
          <TaskEditor />
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
