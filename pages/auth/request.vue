<script setup lang="ts">
import AuthLayout from "~/components/layouts/AuthLayout.vue";
const email = ref("");
const processSubmit = () => {
  navigateTo(`/auth/reset?email=${email.value}`);
};
</script>

<template>
  <AuthLayout class="signup-layout layout">
    <Head>
      <Title>Request Password Reset</Title>
    </Head>
    <h1 class="page-title">Set a new password</h1>
    <form
      class="flex flex-col gap-y-[2.5rem] mb-[3.25rem]"
      @submit.prevent="processSubmit"
    >
      <div class="shie-input-group">
        <label for="" class="shie-input-label">Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="shie-input w-full"
        />
      </div>
      <p class="text-dark-puce text-xs leading-[1.125rem]">
        You’ll receive a temporary log in code. Please check your inbox and
        paste the log in code below.
      </p>
      <div class="flex flex-col gap-4">
        <button class="shie-auth-btn" type="submit" :disabled="email === ''">
          <span>Send code</span>
        </button>

        <hr class="h-[0.125rem] bg-dark-puce opacity-100 w-11/12 mx-auto" />

        <button class="shie-auth-btn shie-auth-btn--google" type="button">
          <nuxt-icon name="google" filled class="mr-[1.26rem]" />
          <span class="text-center">Continue with Google</span>
        </button>
      </div>
    </form>
    <p class="mb-6 text-dark text-xs font-medium w-4/5 text-center mx-auto">
      By continuing with Email or Google, you agree to Shie’s
      <nuxt-link class="underline hover:text-cardinal">
        Terms of Service
      </nuxt-link>
      and
      <nuxt-link class="underline hover:text-cardinal">
        Privacy Policy
      </nuxt-link>
    </p>
    <p class="text-dark text-xs font-medium text-center">
      Don’t have an account?
      <nuxt-link to="/auth/login" class="underline hover:text-cardinal">
        Proceed to login
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
