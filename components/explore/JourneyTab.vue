<script setup lang="ts"></script>

<template>
  <section class="flex justify-between items-center py-4">
    <p>Today</p>
    <div class="flex items-center gap-2">
      <button
        class="rounded p-[0.62rem] text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem]"
      >
        <nuxt-icon name="setting" class="no-fill" />
        ALL TIME
      </button>
      <button
        class="rounded p-[0.62rem] text-xxs inline-flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem] min-w-[5.625rem]"
      >
        <nuxt-icon name="all-activity" class="no-fill" />

        ALL ACTIVITY
      </button>
    </div>
  </section>
</template>

<style scoped></style>
