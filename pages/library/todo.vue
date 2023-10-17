<script setup lang="ts">
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
import TimerCard from "~/components/resources/TimerCard.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";

const categories = ["EDUCATION", "SOCIAL", "SELF CARE", "FITNESS"];
const activeCategory = ref("EDUCATION");
const timerDuration = ref(0);
const breakDuration = ref(0);
</script>

<template>
  <DashboardLayout title="Library | New Todo">
    <div class="shie-container">
      <div
        class="max-w-[64.91375em] mx-auto flex items-center justify-between mb-[1.84rem]"
      >
        <div class="flex flex-row items-center">
          <p class="font-title text-dark-puce leading-[1.125rem] text-base h-4">
            TODO /
          </p>
          <input
            type="text"
            class="text-dark leading-[1.125rem] text-base w-[8.5rem] mb-0 inline-block ml-1 bg-transparent hover:bg-[#FFC700] focus-visible:outline-none placeholder:text-dark"
            placeholder="UNTITLED TASK"
          />
          <button class="">
            <nuxt-icon name="chevron-right" filled />
          </button>
        </div>
        <div class="flex flex-row items-center gap-2">
          <ShiePillButton>{{ activeCategory }}</ShiePillButton>
          <ShiePillButton>{{ timerDuration }} mins session</ShiePillButton>
          <ShiePillButton>{{ breakDuration }} mins break</ShiePillButton>
        </div>
      </div>
      <article class="mb-[5.62rem] max-w-[40.3125rem] mx-auto">
        <section
          class="flex flex-col lg:flex-row gap-8 items-center mb-[4.06rem]"
        >
          <div class="w-full lg:w-1/2">
            <div
              class="resource-image__wrapper border-2 border-dark-puce bg-white rounded-[1.375rem] h-[22.375rem] w-[21.375rem] flex items-center justify-center"
            >
              <img src="/images/png/resource.png" alt="resource" />
            </div>
          </div>
          <div class="flex flex-col gap-[1.78rem] w-full lg:w-1/2">
            <ShieButton
              variant="primary"
              class="!px-4"
              @click="navigateTo('/countdown')"
            >
              Start to do
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M15.3164 13.611C15.4488 13.8765 15.5112 14.1715 15.4976 14.4679C15.484 14.7643 15.395 15.0523 15.2389 15.3046C15.0827 15.5569 14.8647 15.7652 14.6056 15.9096C14.3464 16.0541 14.0546 16.1299 13.7579 16.1299L1.98144 16.1299C1.68472 16.1299 1.39294 16.0541 1.13375 15.9096C0.87456 15.7652 0.656566 15.557 0.500447 15.3046C0.344328 15.0523 0.255261 14.7643 0.241691 14.4679C0.228121 14.1715 0.290499 13.8765 0.42291 13.611L6.31316 1.83255C6.45753 1.5433 6.67964 1.30001 6.95457 1.12996C7.2295 0.959916 7.54638 0.869837 7.86965 0.869837C8.19292 0.869837 8.5098 0.959916 8.78473 1.12996C9.05966 1.30001 9.28177 1.5433 9.42614 1.83255L15.3164 13.611Z"
                  fill="currentColor"
                />
              </svg>
            </ShieButton>

            <div class="flex gap-2">
              <ShieButton variant="secondary" class="whitespace-nowrap !px-4">
                Mark as done
              </ShieButton>
              <ShieButton variant="secondary" class="!w-[4rem] !px-2">
                <span class="sr-only">Download</span>
                <nuxt-icon name="download" filled class="w-6 h-6" />
              </ShieButton>
            </div>
          </div>
        </section>
        <section class="flex flex-col lg:flex-row gap-8">
          <div class="w-full lg:!w-[26%]">
            <p
              class="mb-8 text-dark-puce font-title leading-[1.5rem] uppercase"
            >
              Choose a category tag
            </p>
            <div class="flex flex-col gap-8">
              <div
                v-for="(category, i) in categories"
                :key="`cty-${i}`"
                class="w-full"
              >
                <label
                  :for="`cty-${i}`"
                  class="resource-tag__label"
                  :class="{
                    'resource-tag__label--checked': category === activeCategory,
                  }"
                >
                  <nuxt-icon
                    name="ankh"
                    filled
                    :class="`${
                      category === activeCategory ? 'inline-block' : 'hidden'
                    }`"
                  />{{ category }}
                </label>
                <input
                  :id="`cty-${i}`"
                  v-model="activeCategory"
                  type="radio"
                  class="hidden resource-tag__input"
                  name="tag"
                  :value="category"
                />
              </div>
            </div>
          </div>
          <TimerCard
            title="Timer"
            description="STOP PLAYING WHEN TIMER ENDS"
            class="w-full lg:w-[37%]"
            @change="(e) => (timerDuration = e)"
          />
          <TimerCard
            title="Break"
            description="START BREAK AFTER TIMER"
            class="w-full lg:w-[37%]"
            @change="(e) => (breakDuration = e)"
          />
        </section>
      </article>
    </div>
  </DashboardLayout>
</template>

<style scoped lang="scss">
.resource-tag__label {
  @apply border-2 border-dashed border-taupe-gray rounded-[0.36331rem] text-xxs font-medium text-dark leading-[0.57rem] inline-block text-center p-2.5 transition-all cursor-pointer w-[9rem];
  &:hover {
    @apply text-cardinal;
  }
  &--checked {
    @apply inline-flex gap-[1.91rem] justify-center items-center;
    @apply border-solid border-outer-space;
  }
}
.resource-tag__input:checked {
  .resource-tag__label {
    @apply border-solid;
  }
}
</style>
