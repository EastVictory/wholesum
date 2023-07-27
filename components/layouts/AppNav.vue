<script setup lang="ts">
type Link = {
  title: string;
  link: string;
  icon: string;
};
const links: Link[] = [
  { title: "DASHBOARD", link: "/", icon: "home" },
  { title: "EXPLORE", link: "/explore", icon: "explore" },
  { title: "INSIGHTS", link: "/insights", icon: "insights" },
  { title: "ACCOUNT", link: "/profile", icon: "profile" },
];
defineEmits<{
  (e: "toggleNotifications", value: boolean): void;
}>();
</script>

<template>
  <div
    class="max-w-[90rem] mx-auto flex items-center gap-[4.62rem] w-full px-[6.25rem] justify-between"
  >
    <nuxt-link to="/" class="">
      <nuxt-icon name="logo" class="w-[2.25rem] h-[2.25rem]" filled />
    </nuxt-link>
    <nav class="flex">
      <ul class="flex items-center">
        <li v-for="link in links" :key="link.title">
          <nuxt-link class="nav-link" :to="link.link">
            <nuxt-icon
              :name="link.icon"
              class="w-[1.3125rem] h-[1.3125rem]"
              filled
            />
            <span>
              {{ link.title }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-4 p-[0.625rem]">
      <nuxt-link class="text-taupe-gray">Help Center</nuxt-link>
      <button
        class="text-cardinal px-2.5 py-1"
        @click.prevent="$emit('toggleNotifications', true)"
      >
        <nuxt-icon name="alarm" filled class="" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-link {
  @apply py-[0.62rem] px-4 text-taupe-gray text-sm inline-flex items-center gap-4;
  @apply min-w-[12.3125rem] h-[4.6875rem] justify-center hover:text-dark transition-all;
}
.router-link-exact-active {
  @apply text-dark font-medium;
}
</style>
