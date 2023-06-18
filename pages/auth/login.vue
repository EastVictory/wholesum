<script setup lang="ts">
const email = ref("");
const isValid = ref(false);
</script>

<template>
  <AuthLayout class="signup-layout layout">
    <Head>
      <Title>Log in</Title>
    </Head>
    <h1 class="page-title">log in</h1>
    <p>Sign in to access your account</p>
    <form @submit.prevent="isValid = true">
      <div class="input-group block">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="input w-full"
          required
        />
      </div>
      <div v-if="isValid" class="input-group block">
        <small class="text-xs font-medium text-dark mb-6 inline-block">
          We just sent you a temporary log in code. Please check your inbox and
          paste the log in code below.
        </small>
        <input
          type="text"
          placeholder="Paste log in code"
          class="input w-full placeholder:text-center"
        />
      </div>
      <button
        class="btn btn-block text-dark normal-case bg-capri font-medium text-[0.8125rem]"
        type="submit"
      >
        Continue with email
      </button>
      <div class="divider before:h-[0.0625rem] after:h-[0.0625rem]"></div>

      <button class="google-button" type="button">
        <nuxt-icon name="google" filled />
        <span>Continue with Google</span>
      </button>
    </form>
    <p class="mb-6 text-dark text-xs font-medium">
      By continuing with Email or Google, you agree to Shie’s Terms of Service
      and Privacy Policy
    </p>
    <p class="text-dark text-xs text-center font-medium">
      Don’t have an account?
      <nuxt-link to="/auth/signup" class="underline">Sign up</nuxt-link>
    </p>
  </AuthLayout>
</template>

<style scoped>
.signup-layout {
  @apply px-4 lg:px-0;
  .page-title {
    @apply font-title text-center text-[2rem] leading-[2.1875rem] mb-4;
    & + p {
      @apply text-black/70 text-sm text-center mb-[3.125rem];
    }
  }
  .input-group {
    @apply mb-4;
    .input {
      @apply rounded placeholder:text-taupe-gray placeholder:text-sm placeholder:font-normal focus:outline-0 font-medium text-sm;
      box-shadow: inset 0 -1px 1px #e4e4e4;
      &:focus {
        box-shadow: inset 0 -1px 0 #ff4000;
        @apply rounded-none;
      }
    }
  }
  .google-button {
    @apply btn btn-block bg-transparent text-dark normal-case font-medium text-[0.8125rem] border border-platinum mb-6;
    @apply flex items-center gap-[0.8125rem];
  }
}
</style>
