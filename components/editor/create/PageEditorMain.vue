<script setup lang="ts">
const fontSize = ref(12);
</script>

<template>
  <section class="bg-white min-h-[80vh] flex-1 h-full">
    <div class="border-b border-[#CCCCCC]">
      <section
        class="max-w-[90rem] mx-auto flex justify-between items-center pt-[2.125rem] pb-[1.5rem] px-12"
      >
        <div class="flex gap-12 items-center">
          <button class="p-2">
            <nuxt-icon name="restart" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="stop-2" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="duo-view" filled />
          </button>
          <button class="p-2">
            <nuxt-icon name="trio-view" filled />
          </button>
        </div>
        <div></div>
        <div class="flex items-center gap-6">
          <div class="flex gap-1 items-center">
            <button
              class="p-3 text-licorice font-mono"
              @click="fontSize = fontSize -= 1"
            >
              -
            </button>
            <input
              v-model="fontSize"
              type="number"
              class="text-center border border-[#cccccc] rounded py-2 w-10 h-10 appearance-none"
            />
            <button
              class="p-3 text-licorice font-mono"
              @click="fontSize = fontSize += 1"
            >
              +
            </button>
          </div>

          <button class="p-3">
            <nuxt-icon name="undo" filled />
          </button>
          <button class="p-3">
            <nuxt-icon name="redo" filled />
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
