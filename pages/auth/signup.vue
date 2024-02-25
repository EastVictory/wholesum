<script setup lang="ts">
import AuthLayout from "~/components/layouts/AuthLayout.vue";
const pwdRef = ref<HTMLInputElement | null>(null);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
const optionalFormData = ref({
  alias: "",
});
const togglePassword = () => {
  const type = pwdRef.value?.type;
  if (pwdRef.value?.type) {
    pwdRef.value.type = type === "password" ? "text" : "password";
  }
};
const fullyFilled = computed(() => {
  return Object.values(formData.value).filter((val) => val === "");
});

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
    <form
      class="flex flex-col gap-y-[3.125rem] mb-[3.25rem]"
      @submit.prevent="processSubmit"
    >
      <div class="shie-input-group">
        <label for="" class="shie-input-label">First Name</label>
        <input
          v-model="formData.firstName"
          type="text"
          placeholder="First name"
          class="shie-input w-full"
        />
      </div>

      <div class="shie-input-group">
        <label for="" class="shie-input-label">Last Name</label>
        <input
          v-model="formData.lastName"
          type="text"
          placeholder="Last name"
          class="shie-input w-full"
        />
      </div>

      <div class="shie-input-group">
        <label for="" class="shie-input-label">
          Alias <br />
          <span class="">(OPTIONAL)</span>
        </label>
        <input
          v-model="optionalFormData.alias"
          type="text"
          placeholder="Last name"
          class="shie-input w-full"
        />
      </div>

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
            placeholder="At least 8 characters"
            min="8"
            class="shie-input shie-input--password"
          />
          <span class="password-toggle" @click="togglePassword" />
        </div>
      </div>
      <button
        class="shie-auth-btn mt-[1.75rem]"
        type="submit"
        :disabled="fullyFilled.length > 0"
      >
        <span>Create account</span>
      </button>

      <hr class="h-[0.125rem] bg-dark-puce opacity-100 w-11/12 mx-auto" />

      <button class="shie-auth-btn shie-auth-btn--google" type="button">
        <nuxt-icon name="google" filled class="mr-[1.26rem]" />
        <span class="text-center">Continue with Google</span>
      </button>
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
      Already signed up?
      <nuxt-link to="/auth/login" class="underline hover:text-cardinal">
        Proceed to login
      </nuxt-link>
    </p>
  </AuthLayout>
</template>

<style scoped lang="scss">
.signup-layout {
  .page-title {
    @apply font-subtitle text-[2rem] leading-[2.58rem] mb-[2.81rem] text-center text-dark;
  }
}
</style>
