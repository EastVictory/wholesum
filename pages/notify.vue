<script setup lang="ts">
import { DateTime } from "luxon";
import { useModal, useModalSlot } from "vue-final-modal";
import WeatherReport from "~/components/landing/WeatherReport.vue";
import AppModal from "~/components/ui/AppModal.vue";
import MailSuccessModalComponent from "~/components/landing/MailSuccessModalComponent.vue";
const date = DateTime.now().toFormat("DDD");
const form = ref({
  email: "",
  firstName: "",
  lastName: "",
});

const isLoading = ref(false);

// Add a user to the list
async function addUserToList() {
  try {
    isLoading.value = true;
    await $fetch("https://mailchimp-mails.vercel.app/mails", {
      method: "POST",
      body: {
        email: form.value.email,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
      },
    });
    // message.value = response.success
    //   ? "Successfully subscribed!"
    //   : "Subscription failed.";
    form.value = {
      email: "",
      firstName: "",
      lastName: "",
    };
    await open();
  } catch (error) {
    // message.value = "An error occurred. Please try again later.";
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

const saveForm = () => {
  addUserToList();
};

const { close, open } = useModal({
  component: AppModal,
  attrs: {
    title: "How to reach us!",
    onClose() {
      close();
    },
  },
  slots: {
    default: useModalSlot({
      component: MailSuccessModalComponent,
    }),
  },
});
</script>

<template>
  <div class="bg-white min-h-screen flex-col flex justify-between flex-1">
    <div class="flex-1 flex flex-col">
      <header class="py-6 mb-[1.6875rem]">
        <div
          class="max-w-[34.375rem] gap-x-[3.125rem] mx-auto flex justify-between items-center pl-6"
        >
          <nuxt-link to="/" class="inline-flex">
            <nuxt-icon name="logo-icon" class="h-8" filled />
          </nuxt-link>
          <span v-if="date" class="hidden lg:block">{{ date }}</span>
          <WeatherReport hide-date />
        </div>
      </header>
      <main class="h-full flex-1 flex flex-col justify-between">
        <div
          class="max-w-[43.75rem] mx-auto w-full flex gap-x-[7.125rem] items-center mb-[7rem]"
        >
          <section class="max-w-[19.8125rem] mx-auto">
            <div class="flex flex-col items-center">
              <nuxt-icon
                name="logo-text"
                class="w-[10.4375rem] h-[1.8125rem] text-black inline-block mx-auto"
                filled
              />
              <p class="text-center px-5 mt-4 font-subtitle mb-[1.125rem]">
                Enter your details below and you’ll be the first to access
                Wholesum when it drops!
              </p>
            </div>
            <form class="notify-form" @submit.prevent="saveForm">
              <div class="notify-form__group mb-4">
                <label for="firstName">First name</label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  name="firstName"
                  placeholder="Click to edit"
                />
              </div>
              <div class="notify-form__group mb-4">
                <label for="lastName">Last name</label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  name="lastName"
                  placeholder="Click to edit"
                />
              </div>
              <div class="notify-form__group mb-7">
                <label for="email">Email address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="Click to edit"
                />
              </div>
              <div class="px-7 flex items-center gap-2.5 mb-7">
                <input id="notify-me" type="checkbox" />
                <label for="notify-me" class="text-[#1A1110BF] text-sm">
                  Notify me when it drops
                </label>
              </div>
              <div class="px-7 flex items-center gap-2.5 mb-4">
                <input id="marketing" type="checkbox" />
                <label for="marketing" class="text-[#1A1110BF] text-sm">
                  I don’t want to receive marketing promotions emails from
                  Wholesum
                </label>
              </div>
              <p class="px-8 text-sm text-[#1A111080] text-center mb-4">
                Life is not a problem to be solved, but a reality to be
                experienced - Soren Kierkegaard
              </p>
              <button
                class="w-full rounded-lg text-white font-semibold bg-[#2E52B2] px-2.5 py-4 text-center disabled:bg-[#00000080]"
                :disabled="
                  !(form.email && form.firstName && form.lastName) || isLoading
                "
              >
                {{ isLoading ? "Loading..." : "Submit" }}
              </button>
            </form>
          </section>
          <section class="hidden lg:block">
            <img
              src="/images/png/mobile.png"
              alt="mobile wholesum"
              class="max-h-[31.8125rem] max-w-[16.8125rem] object-cover"
            />
          </section>
        </div>
      </main>
    </div>
    <LandingFooter />
  </div>
</template>

<style scoped lang="scss">
.notify-form {
  &__group {
    @apply border border-[#1A111026] rounded-lg px-4 py-2 flex flex-col max-h-[4.0625rem];
    label {
      @apply font-semibold text-sm;
    }
    input {
      @apply text-[#1A1110] border-none outline-none placeholder:text-sm;
    }
  }
  input[type="checkbox"] {
    @apply w-4 h-4 flex-shrink-0 border-solid border-2 border-black rounded-[0.1875rem] appearance-none;
    @apply checked:border-[#4D3B3C] checked:bg-[#4D3B3C] relative;
    &:checked:after {
      @apply absolute content-[''] rotate-[35deg] border border-solid border-white h-2.5 w-1.5 -translate-x-[50%] left-[50%];
      border-width: 0 2px 2px 0;
    }
  }
}
</style>
