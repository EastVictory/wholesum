import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    fontFamily: {
      title: ["Peachi", "system-ui", "sans-serif"],
    },
    extend: {
      screens: {
        xl: "1200px",
        hd: "1920px",
        "4k": "3840px",
      },
      colors: {
        platinum: "#E4E4E4",
        dark: "#141414",
        "red-orange": "#FF4000",
        byzantine: "#AB2DA0",
        capri: "#00BFFF",
        "taupe-gray": "#878A84",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};
