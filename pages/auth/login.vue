<script setup lang="ts">
import AuthLayout from "~/components/layouts/AuthLayout.vue";

const pwdRef = ref<HTMLInputElement | null>(null);

const formData = ref({
  email: "",
  password: "",
});
const togglePassword = () => {
  const type = pwdRef.value?.type;
  if (pwdRef.value?.type) {
    pwdRef.value.type = type === "password" ? "text" : "password";
  }
};
const processSubmit = () => {
  navigateTo("/library");
};

const fullyFilled = computed(() => {
  return Object.values(formData.value).filter((val) => val === "");
});
</script>

<template>
  <AuthLayout class="signup-layout layout" title="Sign into your account">
    <Head>
      <Title>Sign Up</Title>
    </Head>
    <form
      class="flex flex-col gap-y-[1rem] mb-[3.25rem]"
      @submit.prevent="processSubmit"
    >
      <div class="flex flex-col gap-y-[3.125rem]">
        <div class="shie-input-group">
          <label for="" class="shie-input-label">Email</label>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="shie-input w-full"
          />
        </div>

        <div class="shie-input-group">
          <label for="" class="shie-input-label">Password</label>
          <div class="shie-input-password-group relative w-full">
            <input
              ref="pwdRef"
              v-model="formData.password"
              type="password"
              placeholder="Password"
              class="shie-input shie-input--password"
            />
            <span class="password-toggle" @click="togglePassword" />
          </div>
        </div>
      </div>

      <p class="text-xs text-dark">
        Forgot password?
        <nuxt-link to="/auth/request" class="underline hover:text-cardinal"
          >Reset password</nuxt-link
        >
      </p>
      <button
        class="shie-auth-btn mt-[1.75rem]"
        type="submit"
        :disabled="fullyFilled.length > 0"
      >
        <span>Sign in</span>
      </button>

      <button class="shie-auth-btn shie-auth-btn--google" type="button">
        <nuxt-icon name="google" filled class="mr-[1.26rem]" />
        <span class="text-center">Continue with Google</span>
      </button>
    </form>
    <p class="mb-6 text-dark text-lg font-medium w-4/5 text-center mx-auto">
      By continuing with Email or Google, you agree to Shie’s
      <nuxt-link class="underline hover:text-cardinal">
        Terms of Service
      </nuxt-link>
      and
      <nuxt-link class="underline hover:text-cardinal">
        Privacy Policy
      </nuxt-link>
    </p>
    <p class="text-dark text-lg font-medium text-center">
      Don’t have an account?
      <nuxt-link to="/auth/signup" class="underline hover:text-cardinal">
        Sign up
      </nuxt-link>
    </p>
  </AuthLayout>
</template>

<style scoped lang="scss">
.signup-layout {
  .page-title {
    @apply font-subtitle text-[2rem] leading-[2.58rem] mb-[2.81rem] text-center;
  }
}
</style>
