<script setup lang="ts">
import ShieLink from "~/components/buttons/ShieLink.vue";

type Link = {
  name: string;
  href: string;
};
const links: Link[] = [
  { name: "Our Story", href: "/story" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Library", href: "/library" },
];
</script>

<template>
  <header class="sticky-app-nav">
    <nav class="flex items-center justify-between">
      <div class="flex gap-[4.12rem] items-center">
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

      <div class="flex items-center gap-6">
        <div>
          <ShieLink class="whitespace-nowrap" to="/auth/signup">
            Start Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.3164 13.611C15.4488 13.8765 15.5112 14.1715 15.4976 14.4679C15.484 14.7643 15.395 15.0523 15.2389 15.3046C15.0827 15.5569 14.8647 15.7652 14.6056 15.9096C14.3464 16.0541 14.0546 16.1299 13.7579 16.1299L1.98144 16.1299C1.68472 16.1299 1.39294 16.0541 1.13375 15.9096C0.87456 15.7652 0.656566 15.557 0.500447 15.3046C0.344328 15.0523 0.255261 14.7643 0.241691 14.4679C0.228121 14.1715 0.290499 13.8765 0.42291 13.611L6.31316 1.83255C6.45753 1.5433 6.67964 1.30001 6.95457 1.12996C7.2295 0.959916 7.54638 0.869837 7.86965 0.869837C8.19292 0.869837 8.5098 0.959916 8.78473 1.12996C9.05966 1.30001 9.28177 1.5433 9.42614 1.83255L15.3164 13.611Z"
                fill="currentColor"
              />
            </svg>
          </ShieLink>
        </div>

        <ShieLink variant="secondary" icon="bar-arrow-right" to="/auth/login">
          SIGN IN
        </ShieLink>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.sticky-app-nav {
  @apply max-w-[87rem] mx-auto rounded-[1.375rem] border-2 border-dark-puce p-4 bg-white sticky top-[1.5rem] hidden;
  &[data-visible="true"] {
    @apply block;
  }
  a.router-link-active {
    text-decoration: line-through;
  }
}
</style>
