// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Wholesum" || process.env.npm_package_name,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "Shie",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Shie",
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: "Shie",
        },
        { hid: "og:title", name: "og:title", content: "Shie" },
        { name: "msapplication-TileColor", content: "#D55816" },
        {
          name: "msapplication-TileImage",
          content: "/favicon/mstile-150x150.png",
        },
        { name: "theme-color", content: "#D55816" },
      ],
      link: [
        // Favicons
        {
          rel: "apple-touch-icon",
          sizes: "",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon/favicon.ico",
        },
      ],
    },
  },
  css: [
    "@/assets/fonts/fonts.css",
    "/assets/scss/utilities.scss",
    "/assets/scss/components.scss",
    "/assets/scss/main.scss",
  ],
  modules: [
    "nuxt-icons",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: true,
          Borel: true,
          "Cormorant+SC": true,
          "Cormorant+Garamond": true,
          "JetBrains+Mono": true,
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/eslint-module",
      {
        /* module options */
      },
    ],
  ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
});
