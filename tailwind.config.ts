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
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      title: ["Borel", "system-ui", "sans-serif"],
      subtitle: ["Peachi", "system-ui", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      screens: {
        xl: "1200px",
        hd: "1920px",
        "4k": "3840px",
      },
      colors: {
        conditioner: "#ffffcc",
        "outer-space": "#444444",
        platinum: "#E4E4E4",
        dark: "#141414",
        cardinal: "#BF1F2F",
        byzantine: "#AB2DA0",
        capri: "#00BFFF",
        "taupe-gray": "#87848A",
        soap: "#CEC8EF",
        gunmetal: "#16262A",
        crayola: "#76D7EA",
        "dark-liver": "#4D4D4D",
        "dark-puce": "#4D3B3C",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
