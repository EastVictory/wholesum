<script setup lang="ts">
import VOtpInput from "vue3-otp-input";
import AuthLayout from "~/components/layouts/AuthLayout.vue";

const email = ref("");
const isValid = ref(false);
const otp = ref("");
const otpComplete = ref(false);
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const handleOnComplete = () => {
  otpComplete.value = true;
};
</script>

<template>
  <AuthLayout class="signup-layout layout">
    <Head>
      <Title>Log in</Title>
    </Head>
    <h1 class="page-title">Sign into your account</h1>
    <p>Access your account with Shie.</p>
    <form @submit.prevent="isValid = true">
      <div class="shie-input-group block">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="shie-input w-full"
          required
        />
      </div>
      <div v-if="isValid" class="input-group block">
        <small class="text-xs font-medium text-dark mb-6 inline-block">
          We just sent you a temporary log in code. Please check your inbox and
          paste the log in code below.
        </small>
        <div class="otp-container">
          <v-otp-input
            ref="otpInput"
            :value="otp"
            input-classes="otp-input"
            separator=""
            :num-inputs="4"
            :should-auto-focus="true"
            input-type="number"
            :placeholder="['0', '0', '0', '0']"
            @on-complete="handleOnComplete"
          />
        </div>
      </div>
      <div>
        <button
          v-if="isValid"
          class="shie-btn"
          type="submit"
          :disabled="!otpComplete"
        >
          login
        </button>
        <button v-else class="shie-btn" type="submit" :disabled="email === ''">
          Continue with email
        </button>
      </div>

      <div class="divider before:h-[0.0625rem] after:h-[0.0625rem]"></div>

      <button class="google-button shie-btn shie-btn--ghost" type="button">
        <nuxt-icon name="google" filled />
        <span class="flex-1 text-center">Continue with Google</span>
      </button>
    </form>
    <p class="mb-6 text-dark text-xs font-medium">
      By continuing with Email or Google, you agree to Shie’s
      <nuxt-link class="underline">Terms of Service</nuxt-link> and
      <nuxt-link class="underline">Privacy Policy</nuxt-link>
    </p>
    <p class="text-dark text-xs text-center font-medium">
      Don’t have an account?
      <nuxt-link to="/auth/signup" class="underline">Sign up</nuxt-link>
    </p>
  </AuthLayout>
</template>

<style scoped lang="scss">
.signup-layout {
  .page-title {
    @apply font-title text-left text-[2rem] leading-[2.1875rem] mb-4;
    & + p {
      @apply text-black/70 text-sm mb-[3.125rem] font-medium;
    }
  }
  .google-button {
    @apply flex items-center gap-[0.8125rem] mb-6;
  }
}
</style>
