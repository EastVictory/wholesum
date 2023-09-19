<script setup lang="ts">
import VOtpInput from "vue3-otp-input";
import AuthLayout from "~/components/layouts/AuthLayout.vue";
const isValid = ref(false);
const route = useRoute();
const { email } = route.query;
const otp = ref("");
const otpComplete = ref(false);
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const handleOnComplete = () => {
  otpComplete.value = true;
};

const pwdRef = ref<HTMLInputElement | null>(null);

const togglePassword = () => {
  const type = pwdRef.value?.type;
  if (pwdRef.value?.type) {
    pwdRef.value.type = type === "password" ? "text" : "password";
  }
};

const processSubmit = () => {
  if (otpComplete.value && email) {
    isValid.value = true;
  }
};
</script>

<template>
  <AuthLayout class="signup-layout layout">
    <Head>
      <Title>Reset Password</Title>
    </Head>
    <h1 class="page-title">Set a new password</h1>
    <form v-if="isValid" class="flex flex-col gap-y-[0.75rem] mb-[3.25rem]">
      <div class="shie-input-group">
        <label for="" class="shie-input-label">Password</label>
        <div class="shie-input-password-group relative w-full">
          <input
            ref="pwdRef"
            type="password"
            placeholder="Password"
            class="shie-input shie-input--password"
          />
          <span class="password-toggle" @click="togglePassword" />
        </div>
      </div>
      <div class="shie-input-group">
        <label for="" class="shie-input-label">Password</label>
        <div class="shie-input-password-group relative w-full">
          <input
            ref="pwdRef"
            type="password"
            placeholder="Password"
            class="shie-input shie-input--password"
          />
          <span class="password-toggle" @click="togglePassword" />
        </div>
      </div>
      <button class="shie-auth-btn mt-[1.75rem]" type="submit">
        <span>Save Password</span>
      </button>
    </form>
    <form
      v-else
      class="flex flex-col gap-y-[2.5rem] mb-[3.25rem]"
      @submit.prevent="processSubmit"
    >
      <div class="shie-input-group">
        <label for="" class="shie-input-label">Email</label>
        <input
          type="email"
          placeholder="Email"
          class="shie-input w-full"
          readonly
          disabled
          :value="email"
        />
      </div>
      <div class="shie-input-group">
        <label for="" class="shie-input-label">Passcode</label>
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
      <p class="text-dark-puce text-xs leading-[1.125rem]">
        Retrieve the code from your email above, Paste in the space above to get
        started.
      </p>
      <div class="flex flex-col gap-4">
        <button class="shie-auth-btn" type="submit">
          <span>Set New Password</span>
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<style scoped lang="scss">
.signup-layout {
  .page-title {
    @apply font-subtitle text-[2rem] leading-[2.58rem] mb-[2.81rem] text-center;
  }
}
</style>
