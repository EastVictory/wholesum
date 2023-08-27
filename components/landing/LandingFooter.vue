<script setup lang="ts">
type Link = {
  name: string;
  href: string;
};
const footerMainLinks: Link[] = [
  { name: "Our Story", href: "/story" },
  { name: "Contact", href: "/pricing" },
  { name: "Sign Up", href: "/contact" },
  { name: "log in", href: "/library" },
];

const socials: Link[] = [
  { name: "Twitter", href: "/story" },
  { name: "IG", href: "/pricing" },
  { name: "Threads", href: "/contact" },
];
const footerAltLinks: Link[] = [
  { name: "Pricing", href: "/story" },
  { name: "Library", href: "/pricing" },
  { name: "Terms and condition", href: "/contact" },
  { name: "Privacy policy", href: "/library" },
];
</script>

<template>
  <footer class="pt-[8.5rem] pb-[9.75rem]">
    <div
      class="max-w-[48.9375rem] flex flex-col lg:flex-row mx-auto gap-y-[8.19rem] justify-between items-center"
    >
      <section>
        <p
          class="max-w-[12.5rem] text-dark-puce font-medium leading-6 mb-[2.5rem]"
        >
          Wholesum is a registered trademark of DTFMEDIA ABN 16423488320
        </p>
        <ul>
          <li
            v-for="link in footerMainLinks"
            :key="link.href"
            class="mb-[2.5rem]"
          >
            <nuxt-link
              :to="link.href"
              class="text-[#191521] text-xxs font-medium p-2 uppercase hover:text-cardinal"
            >
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li
            v-for="link in footerAltLinks"
            :key="link.href"
            class="mb-[1.5rem]"
          >
            <nuxt-link
              :to="link.href"
              class="text-sm font-light leading-[1.125rem] p-2 text-dark-liver hover:text-cardinal"
            >
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li v-for="link in socials" :key="link.href" class="mb-[2rem]">
            <a
              :href="link.href"
              class="text-[#191521] font-title text-[2.5rem] leading-[1.375rem] hover:text-cardinal uppercase"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
