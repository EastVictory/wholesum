import LottiePlayer from "vue3-lottie";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LottiePlayer, { name: "Vue3Lottie" });
});
