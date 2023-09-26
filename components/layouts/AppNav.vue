<script setup lang="ts">
type Link = {
  title: string;
  link: string;
};
const links: Link[] = [
  { title: "Library", link: "/library" },
  { title: "Insights", link: "" },
  { title: "Account", link: "" },
  { title: "Contact", link: "" },
];
</script>

<template>
  <div
    class="max-w-[64.91375em] mx-auto flex items-center gap-[4.62rem] w-full px-[2.25rem] lg:px-0 justify-between pt-[1.12rem] pb-[1.25rem] mb-4 bg-conditioner"
  >
    <nuxt-link to="/" class="">
      <nuxt-icon name="logo-text" filled />
    </nuxt-link>
    <nav class="flex">
      <ul class="flex gap-x-[4.03rem]">
        <li
          v-for="link in links"
          :key="link.title"
          class="text-dark-puce font-title uppercase text-sm hover:text-cardinal"
        >
          <nuxt-link class="nav-link" :to="link.link">
            <span>
              {{ link.title }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  text-decoration: line-through;
}
</style>
