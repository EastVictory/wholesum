<script setup lang="ts">
import AuthLayout from "~/components/layouts/AuthLayout.vue";
const pwdRef = ref<HTMLInputElement | null>(null);

const togglePassword = () => {
  const type = pwdRef.value?.type;
  if (pwdRef.value?.type) {
    pwdRef.value.type = type === "password" ? "text" : "password";
  }
};
const processSubmit = () => {
  navigateTo("/");
};
</script>

<template>
  <AuthLayout class="signup-layout layout">
    <Head>
      <Title>Sign Up</Title>
    </Head>
    <h1 class="page-title">Create an account to get started</h1>
    <p>
      Try Shie for 60 Days free, pay $1 for access afterwards. <br />
      Visit <nuxt-link class="underline">Plans & Pricing</nuxt-link> for the
      full breakdown.
    </p>
    <form @submit.prevent="processSubmit">
      <div class="shie-input-group grid grid-cols-1 lg:grid-cols-2 gap-2">
        <input type="text" placeholder="Last name" class="shie-input w-full" />
        <input type="text" placeholder="First name" class="shie-input w-full" />
      </div>
      <div class="shie-input-group block">
        <input type="email" placeholder="Email" class="shie-input w-full" />
      </div>
      <div class="shie-input-group shie-input-password-group block">
        <input
          ref="pwdRef"
          type="password"
          placeholder="Password"
          class="shie-input w-full"
        />
        <span class="password-toggle" @click="togglePassword" />
      </div>
      <button class="shie-btn">Create account</button>
      <div
        class="divider before:h-[0.0625rem] after:h-[0.0625rem] my-[1.5rem]"
      ></div>

      <button class="google-button shie-btn shie-btn--ghost">
        <nuxt-icon name="google" filled />
        <span class="flex-1 text-center">Continue with Google</span>
      </button>
    </form>
    <p class="mb-6 text-dark text-xs font-medium w-11/12">
      By continuing with Email or Google, you agree to Shie’s Terms of Service
      and Privacy Policy
    </p>
    <p class="text-dark text-xs text-left font-medium">
      Already signed up?
      <nuxt-link to="/auth/login" class="underline">Proceed to login</nuxt-link>
    </p>
  </AuthLayout>
</template>

<style scoped lang="scss">
.signup-layout {
  .page-title {
    @apply font-title text-left text-[2rem] leading-[2.1875rem] mb-4;
    & + p {
      @apply text-taupe-gray text-sm mb-[3.125rem] font-medium;
    }
  }
  .google-button {
    @apply flex items-center gap-[0.8125rem] mb-6;
  }
}
</style>
