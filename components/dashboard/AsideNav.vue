<script setup lang="ts"></script>

<template>
  <aside class="aside-nav">
    <ul class="main-links">
      <li>
        <nuxt-link class="nav-link" to="/">
          <nuxt-icon name="homepage" />
          <span class="text-dark">Home page</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link">
          <nuxt-icon name="explore" />
          <span class="text-dark">Explore</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link">
          <nuxt-icon name="insights" />
          <span class="text-dark">Insights</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link">
          <nuxt-icon name="homepage" />
          <span class="text-dark">Profile</span>
        </nuxt-link>
      </li>
    </ul>
    <ul class="support-links">
      <li>
        <nuxt-link class="nav-link">Suggestions </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link">Request Support</nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link">Feedback</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<style>
.aside-nav {
  .main-links {
    @apply flex flex-col gap-[0.625rem] pb-[2.4375rem];
    .nav-link {
      @apply min-w-[9.5rem] min-h-[2.5rem] w-full py-[0.625rem] px-4 inline-flex items-center font-light;
      @apply gap-[0.625rem] text-taupe-gray text-sm cursor-pointer leading-[0.9375rem];
      &.router-link-exact-active {
        @apply bg-platinum text-dark rounded-lg font-bold;
      }
      &:hover {
        @apply text-dark font-bold;
      }
      .nuxt-icon.nuxt-icon--fill,
      .nuxt-icon.nuxt-icon--fill * {
        fill: none !important;
      }
    }
  }
  .support-links {
    @apply flex flex-col gap-[0.5625rem];
    .nav-link {
      @apply text-taupe-gray text-xs cursor-pointer font-normal leading-3;
    }
  }
}
</style>
