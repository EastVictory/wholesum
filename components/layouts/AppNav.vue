<script setup lang="ts">
import { useEditorStore } from "~/store/editor";

const editorStore = useEditorStore();

const { saveEditor } = editorStore;

type Link = {
  title: string;
  url: string;
};
const links: Link[] = [
  { title: "Home", url: "/editor" },
  { title: "Library", url: "/library" },
  { title: "Charts", url: "" },
];

const config = ref({
  title: "Untitled Note",
  category: "Text",
  label: "education",
  duration: 25,
  break: 10,
  onTimerEnd: "HARP",
});
const createNote = () => {
  saveEditor(config.value);
  navigateTo("/editor/create");
};
</script>

<template>
  <div class="navbar">
    <div
      class="pt-[1.12rem] pb-[1.25rem] max-w-[90rem] mx-auto flex items-center gap-[4.62rem] w-full lg:px-0 justify-between bg-aero-blue px-12"
    >
      <slot name="left-content">
        <nuxt-link to="/" class="text-black">
          <nuxt-icon
            name="logo-text"
            class="w-[12.0625rem] h-[2.6875rem] text-black"
            filled
          />
        </nuxt-link>
        <section class="kyc-progress flex">
          <ul class="flex items-center gap-6">
            <li v-for="link in links" :key="link.title">
              <nuxt-link
                :to="link.url"
                class="font-title text-sm text-dark-puce uppercase"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </section>

        <div class="flex gap-[2.0625rem]">
          <button
            class="bg-[#2E52B2] rounded inline-flex gap-4 items-center text-white py-3 px-4 font-medium font-mono min-w-[11.5625rem]"
            @click="createNote"
          >
            <span
              class="rounded-lg border border-white h-6 w-6 inline-flex justify-center items-center"
              >+</span
            >
            Quick Pomo
          </button>
          <button>
            <nuxt-icon name="info" filled />
          </button>
        </div>
      </slot>

      <div>
        <button class="inline-flex gap-2 items-center text-dark h-6">
          <span class="w-6 h-6 bg-dark rounded text-[#F7F1E5]">S</span>
          <span class="font-title text-xs h-2">Silas</span>
          <nuxt-icon name="chevron-right" class="no-fill w-2 h-[1.15rem]" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar,
.navbar > div {
  @apply bg-[url('/images/svg/border-dashes-horizontal.svg')] bg-no-repeat bg-left-bottom  bg-contain;
  background-size: 100%;
}
.router-link-exact-active {
  @apply text-licorice;
  text-decoration: underline;
}
</style>
