<script setup lang="ts">
type Link = {
  name: string;
  href: string;
};
const links: Link[] = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <div
    class="sticky pt-[1.5rem] top-0 z-[10] max-w-[76.5rem] mx-auto bg-[#F7F1E5] rounded-b-[1.375rem]"
  >
    <header class="sticky-app-nav">
      <nav class="flex items-center justify-center">
        <div class="flex gap-[4.12rem] items-center py-4">
          <a href="/">
            <nuxt-icon name="logo-icon" filled />
          </a>
          <ul class="flex gap-x-[2.63rem]">
            <li
              v-for="link in links"
              :key="link.href"
              class="text-dark-puce font-title uppercase text-sm hover:text-cardinal"
            >
              <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped lang="scss">
.sticky-app-nav {
  @apply max-w-[76.5rem] mx-auto rounded-[1.375rem] border-2 border-dark-puce px-4 py-6 bg-white  hidden;
  &[data-visible="true"] {
    @apply block;
  }
  a.router-link-active {
    //text-decoration: line-through;
  }
}
</style>
