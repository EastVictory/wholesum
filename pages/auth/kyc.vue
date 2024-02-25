<script setup lang="ts">
import ShieLink from "~/components/buttons/ShieLink.vue";

const questions = [
  {
    key: 2,
    title: "Which of the following best describes you?",
    questions: [
      {
        key: "Student",
        value: "Student",
      },
      {
        key: "Artist",
        value: "Artist",
      },
      {
        key: "Designer",
        value: "Designer",
      },
      {
        key: "None of the above",
        value: "None of the above",
      },
    ],
  },
  {
    key: 3,
    title: "How do you intend to use wholesum?",
    questions: [
      {
        key: "Study",
        value: "Study",
      },
      {
        key: "Brainstorming",
        value: "Brainstorming",
      },
      {
        key: "Planning & Goal setting",
        value: "Planning & Goal setting",
      },
      {
        key: "None of the above",
        value: "None of the above",
      },
    ],
  },
  {
    key: 4,
    title: "What industry are you most closely associated with?",
    questions: [
      {
        key: "Science and Technology",
        value: "Science and Technology",
      },
      {
        key: "Food Technology",
        value: "Food Technology",
      },
      {
        key: "Accommodation and Hospitality",
        value: "Accommodation and Hospitality",
      },
      {
        key: "Aged Care",
        value: "Aged Care",
      },
      {
        key: "I’m a business owner",
        value: "I’m a business owner",
      },
      {
        key: "None of the above",
        value: "None of the above",
      },
    ],
  },
];

console.log(questions);
const currentState = ref(1);
</script>

<template>
  <div class="kyc-layout mx-auto bg-[#F7F1E5] min-h-screen">
    <section class="border-b-2 border-dotted border-dark">
      <div
        class="logo-wrapper flex justify-between max-w-[90rem] px-[8.375rem] py-3 items-center"
      >
        <nuxt-link to="/" class="text-black">
          <nuxt-icon
            name="logo-text"
            class="w-[12.0625rem] h-[2.6875rem] text-black"
            filled
          />
        </nuxt-link>
        <section class="kyc-progress">
          <div
            v-for="i in 4"
            :key="`kyc-progress__indicator-${i}`"
            class="kyc-progress__indicator"
            :class="{ completed: i <= currentState }"
          ></div>
        </section>
        <div>
          <button class="inline-flex gap-2 items-center text-dark h-6">
            <span class="w-6 h-6 bg-dark rounded text-[#F7F1E5]">S</span>
            <span class="font-title text-xs h-2">Silas</span>
            <nuxt-icon name="chevron-right" class="no-fill w-2 h-[1.15rem]" />
          </button>
        </div>
      </div>
    </section>
    <div class="kyc-layout__contents">
      <div class="w-full flex flex-col flex-1">
        <div
          v-if="currentState === 1"
          class="pt-[3.125rem] flex flex-col justify-between h-full flex-1"
        >
          <div>
            <p
              class="text-center font-title text-black text-[1.375rem] leading-[2rem] mb-[1.5rem]"
            >
              Hello, Silas
            </p>
            <p
              class="text-center font-subtitle text-[2rem] mb-[1.34375rem] text-dark"
            >
              To create an enjoyable experience in app, we want to know you a
              little better.
            </p>
            <p
              class="text-center w-4/5 text-[1.375rem] mx-auto font-title text-black"
            >
              Please answer the following questions as best as you can to help
              us serve you better
            </p>
          </div>

          <form>
            <button class="shie-auth-btn mb-[1.75rem]" type="submit">
              <span>LET'S DO IT</span>
            </button>
            <ShieLink variant="secondary" to="/auth/login" class="!bg-white">
              <template #content>
                <span class="w-full inline-flex justify-between items-center">
                  <span> SKIP THIS </span>
                  <span>
                    <nuxt-icon name="chevron-right" filled />
                  </span>
                </span>
              </template>
            </ShieLink>
          </form>
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.kyc-layout {
  @apply flex flex-col;
  .page-title {
    @apply font-subtitle text-[2rem] leading-[2.58rem] mb-[2.81rem] text-center py-[2.6875rem] border-b-2 border-dotted border-dark;
  }

  &__contents {
    @apply max-w-[45.1875rem] mx-auto flex-1 flex flex-col;
    @apply px-5 pb-4  lg:pb-[11.5rem] h-full;
  }
  .kyc-progress {
    @apply flex gap-6 items-center;
    &__indicator {
      @apply block w-[3.1875rem] h-[1.25rem] border-2 border-dark-puce bg-white rounded;
      &.completed {
        @apply bg-dark-puce;
      }
    }
  }
}
</style>
