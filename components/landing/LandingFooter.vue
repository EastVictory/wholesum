<script setup lang="ts">
import ShieButton from "~/components/buttons/ShieButton.vue";

type Link = {
  name: string;
  href: string;
};
const footerMainLinks: Link[] = [
  { name: "Our Story", href: "/story" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
  { name: "Library", href: "/library" },
];

const socials: Link[] = [
  { name: "INSTAGRAM", href: "#" },
  { name: "Twitter (x)", href: "#" },
];
const footerAltLinks: Link[] = [
  { name: "Terms OF USE", href: "/contact" },
  { name: "Privacy policy", href: "/library" },
];
</script>

<template>
  <footer class="pt-[5rem] pb-[4.44rem] bg-dark-puce px-4">
    <div class="max-w-[71.44rem] mx-auto">
      <section
        class="flex flex-col lg:flex-row gap-y-[8.19rem] justify-between items-start mb-[6.88rem]"
      >
        <section>
          <nuxt-link
            to="/"
            class="text-white hover:text-conditioner mb-[1.66rem] inline-block -mt-4"
          >
            <nuxt-icon name="logo-text" />
          </nuxt-link>
          <p
            class="lg:max-w-[17.1875rem] text-conditioner text-xs leading-6 font-light uppercase"
          >
            We proudly acknowledge the Traditional Owners/Custodians of the land
            on which we work and live, and pay respect to their Elders past and
            present. We recognise and value the continuing rich culture and the
            contribution of Aboriginal people and communities to the Victorian
            community.
          </p>
        </section>
        <section>
          <p class="text-white font-title leading-[1.375rem] mb-8 uppercase">
            Stay in touch
          </p>
          <p
            class="lg:max-w-[17.1875rem] text-conditioner text-xs leading-6 font-light mb-6"
          >
            Get periodic updates from the Wholesum team to know what we’ve been
            up to.
          </p>
          <form action="" class="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              class="bg-white rounded-lg px-2 py-5 placeholder:font-title text-dark-puce mb-2"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              class="bg-white rounded-lg px-2 py-5 font-title text-dark-puce mb-6"
            />
            <ShieButton plain variant="secondary" type="submit">
              SUBSCRIBE
            </ShieButton>
          </form>
        </section>
        <section>
          <p class="text-white font-title leading-[1.375rem] mb-8">LINKS</p>
          <ul>
            <li
              v-for="link in footerMainLinks"
              :key="link.href"
              class="mb-[1.5rem]"
            >
              <nuxt-link
                :to="link.href"
                class="text-xs font-light leading-[1.125rem] p-2 text-conditioner hover:text-white uppercase"
              >
                {{ link.name }}
              </nuxt-link>
            </li>
          </ul>
        </section>
        <section>
          <p class="text-white font-title leading-[1.375rem] mb-8">SOCIAL</p>
          <ul>
            <li v-for="link in socials" :key="link.href" class="mb-[2rem]">
              <a
                :href="link.href"
                class="text-conditioner font-title text-[1.5rem] leading-[1.375rem] hover:text-white uppercase"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section class="flex px-4 items-center gap-1 flex-col lg:flex-row">
        <p class="text-white uppercase text-xs leading-5 font-light">
          © 2023 Wholesum is a registered trademark of DTFMEDIA, ABN 16423488320
        </p>
        <ul class="flex gap-1">
          <li v-for="link in footerAltLinks" :key="link.href">
            <nuxt-link
              :to="link.href"
              class="text-white uppercase text-xs leading-5 font-light hover:text-conditioner"
            >
              | {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
