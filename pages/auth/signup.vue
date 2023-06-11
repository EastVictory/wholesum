<script setup lang="ts"></script>

<template>
  <AuthLayout class="signup-layout layout">
    <Head>
      <Title>Sign Up</Title>
    </Head>
    <h1 class="page-title">Sign up to get started</h1>
    <p>Create a free account</p>
    <form action="">
      <div class="input-group grid grid-cols-1 lg:grid-cols-2 gap-2">
        <input type="text" placeholder="Last name" class="input w-full" />
        <input type="text" placeholder="First name" class="input w-full" />
      </div>
      <div class="input-group block">
        <input type="email" placeholder="Email" class="input w-full" />
      </div>
      <div class="input-group block">
        <input type="password" placeholder="Password" class="input w-full" />
      </div>
      <button
        class="btn btn-block text-dark normal-case bg-capri font-medium text-[0.8125rem]"
      >
        Create account
      </button>
      <div class="divider before:h-[0.0625rem] after:h-[0.0625rem]"></div>

      <button class="google-button">
        <nuxt-icon name="google" filled />
        <span>Continue with Google</span>
      </button>
    </form>
    <p class="mb-6 text-dark text-xs font-medium">
      By continuing with Email or Google, you agree to Shie’s Terms of Service
      and Privacy Policy
    </p>
    <p class="text-dark text-xs text-center font-medium">
      Already signed up? <a href="" class="underline">Proceed to login</a>
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
      @apply rounded placeholder:text-taupe-gray placeholder:font-normal focus:outline-0 font-medium;
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
