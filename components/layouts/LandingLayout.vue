<script setup lang="ts">
import LandingFooter from "~/components/landing/LandingFooter.vue";
import StickyAppNav from "~/components/layouts/StickyAppNav.vue";

onMounted(() => {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelector(".sticky-app-nav")
            ?.setAttribute("data-visible", "false");
        } else {
          document
            .querySelector(".sticky-app-nav")
            ?.setAttribute("data-visible", "true");
        }
      });
    },
    { root: null, threshold: 0.5, rootMargin: "0px" }
  );
  const homeNav = document.querySelector(".home-nav");
  if (homeNav) {
    intersectionObserver.observe(homeNav);
  } else {
    document
      .querySelector(".sticky-app-nav")
      ?.setAttribute("data-visible", "true");
  }
});
</script>

<template>
  <div class="bg-conditioner">
    <slot name="header">
      <StickyAppNav />
    </slot>
    <slot></slot>
    <LandingFooter />
  </div>
</template>

<style scoped lang="scss"></style>
