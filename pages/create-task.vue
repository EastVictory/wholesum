<script setup lang="ts">
import DashboardLayout from "~/components/layouts/HomeLayout.vue";
type activityToggle = {
  title: string;
  icon: string;
};
const clockIcons = ref(["analog", "digital", "track"]);
const currentClockIcon = ref("analog");
const activityToggles: activityToggle[] = [
  { title: "DETAILS", icon: "details" },
  { title: "JOURNAL", icon: "journal" },
  { title: "AUDIO", icon: "audio" },
  { title: "ACTIVITY", icon: "activity" },
];
const currentActivity = ref("DETAILS");

const activityTypes = ref(["SELF CARE", "JOURNAL", "AUDIO", "DETAILS"]);
const currentActivityType = ref("SELF CARE");

const duration = ref(25);
</script>

<template>
  <DashboardLayout>
    <template #current-link>
      <span class="text-dark">What are you working on?</span>
    </template>

    <template #actions>
      <div class="flex items-center gap-[1.25rem]">
        <p class="text-[0.625rem] text-taupe-gray">
          Untitled • Last saved 3 mins ago
        </p>
        <button
          class="rounded p-[0.62rem] text-xxs flex justify-center items-center gap-1 btn-ghost border border-platinum normal-case leading-[0.57663rem]"
        >
          <span>Close</span>
          <nuxt-icon class="no-fill" name="play" />
        </button>
      </div>
    </template>
    <template #default>
      <div class="">
        <section class="max-w-md mx-auto py-[3.125rem]">
          <div class="progress-circle">
            <div class="progress-inner">
              <div class="text-taupe-gray text-center">
                <p class="font-light text-[1.625rem]">1 of 3</p>
                <p class="font-medium text-[0.625rem] mb-2">COMPLETED</p>
                <p class="font-light text-[1.625rem]">{{ duration }}</p>
                <p class="font-medium text-[0.625rem]">MINS</p>
              </div>
            </div>
            <span class="indicator"></span>
          </div>
          <div
            class="progress-controls border border-platinum rounded px-[2rem] flex"
          >
            <div class="flex-1 flex gap-4 py-[2.12rem]">
              <button class="progress-type__control">
                Stopwatch
                <nuxt-icon name="stopwatch" filled />
              </button>
              <button class="progress-type__control">
                Play
                <nuxt-icon name="play" filled />
              </button>
            </div>
            <div
              class="divider divider-horizontal before:w-[0.0625rem] after:w-[0.0625rem] text-platinum"
            ></div>
            <div class="flex-1 flex gap-4 py-[2.12rem]">
              <button
                v-for="clockIcon in clockIcons"
                :key="clockIcon"
                class="rounded border border-platinum text-black progress-type__toggle p-3"
                :class="{ active: currentClockIcon === clockIcon }"
                type="button"
                @click="currentClockIcon = clockIcon"
              >
                <nuxt-icon :name="clockIcon" class="no-fill" />
              </button>
            </div>
          </div>
        </section>
        <div
          class="divider before:h-[0.0625rem] after:h-[0.0625rem] text-platinum"
        ></div>
        <section class="max-w-md mx-auto py-[3.125rem]">
          <div class="flex gap-4 w-full mb-4">
            <button
              v-for="activity in activityToggles"
              :key="activity.title"
              class="activity__toggle"
              :class="{ active: currentActivity === activity.title }"
              @click="currentActivity = activity.title"
            >
              {{ activity.title }}
              <nuxt-icon :name="activity.icon" class="no-fill" />
            </button>
          </div>
          <div class="border border-platinum p-[2rem] rounded">
            <div class="flex gap-4 w-full mb-[2.38rem]">
              <button
                v-for="activityType in activityTypes"
                :key="activityType"
                class="activity__type"
                :class="{ active: currentActivityType === activityType }"
                @click="currentActivityType = activityType"
              >
                {{ activityType }}
              </button>
            </div>
            <div class="mb-[3.12rem]">
              <p class="text-taupe-gray text-sm mb-[1.25rem]">
                Duration (Mins)
              </p>
              <div class="flex items-center">
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="duration-25"
                    v-model="duration"
                    type="radio"
                    name="radio-1"
                    class="radio"
                    checked
                    value="25"
                  />
                  <label
                    for="duration-25"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    25 mins
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="duration-50"
                    v-model="duration"
                    type="radio"
                    name="radio-1"
                    class="radio"
                    value="50"
                  />
                  <label
                    for="duration-50"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    <span class="sr-only">50 mins</span>
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="duration-75"
                    v-model="duration"
                    type="radio"
                    name="radio-1"
                    class="radio"
                    value="75"
                  />
                  <label
                    for="duration-75"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    75mins
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="duration-100"
                    v-model="duration"
                    type="radio"
                    name="radio-1"
                    class="radio"
                    value="100"
                  />
                  <label
                    for="duration-100"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    <span class="sr-only">100 mins</span>
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="duration-125"
                    v-model="duration"
                    type="radio"
                    name="radio-1"
                    class="radio"
                    value="125"
                  />
                  <label
                    for="duration-125"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    125 mins
                  </label>
                </div>
              </div>
            </div>
            <div class="">
              <p class="text-taupe-gray text-sm mb-[1.25rem]">Break (Mins)</p>
              <div class="flex items-center">
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="break-5"
                    type="radio"
                    name="break"
                    class="radio"
                    checked
                  />
                  <label
                    for="break-5"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    5 mins
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="break-10"
                    type="radio"
                    name="break"
                    class="radio"
                  />
                  <label
                    for="break-10"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    <span class="sr-only">10 mins</span>
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="break-15"
                    type="radio"
                    name="break"
                    class="radio"
                  />
                  <label
                    for="break-15"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    15 mins
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="break-20"
                    type="radio"
                    name="break"
                    class="radio"
                  />
                  <label
                    for="break-20"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    <span class="sr-only">20 mins</span>
                  </label>
                </div>
                <div class="divider"></div>
                <div
                  class="flex flex-col items-center gap-[0.56rem] mins-radio"
                >
                  <input
                    id="break-25"
                    type="radio"
                    name="break"
                    class="radio"
                  />
                  <label
                    for="break-25"
                    class="text-xxs text-taupe-gray font-semibold"
                  >
                    25 mins
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </DashboardLayout>
</template>

<style scoped lang="scss">
.progress {
  &-circle {
    @apply w-[16.8125rem] h-[16.16588rem] rounded-full bg-[#F5F4F4] mx-auto border-[1rem] border-[#DDF395] relative mb-[2.02rem];
    .indicator {
      @apply absolute right-[-1.375rem] w-[1.81056rem] h-[1.74594rem] bg-dark rounded-full;
      top: calc(50% - 1.4594rem);
      box-shadow: 0 1.47px 7.35px 0 rgba(0, 0, 0, 0.6);
    }
  }
  &-inner {
    @apply flex justify-center items-center  w-full h-full relative rounded-full;
    box-shadow: 0 4.1px 4.1px 0 rgba(0, 0, 0, 0.25);
  }
  &-type__control {
    @apply p-[0.625rem] border border-platinum font-medium text-[0.625rem] flex items-center gap-1 text-black rounded hover:border-byzantine transition-all;
  }
  &-type__toggle {
    @apply hover:border-byzantine transition-all;
    &.active {
      @apply bg-byzantine text-white border-byzantine;
    }
  }
}
.activity__toggle {
  @apply flex items-center justify-center border border-platinum p-3;
  @apply text-black gap-2 rounded text-[0.625rem] font-medium hover:border-black flex-1 max-w-[6.25rem];
  &.active {
    @apply text-white bg-dark border-black;
  }
}
.activity__type {
  @apply py-[0.5rem] text-xxs border border-dashed border-taupe-gray font-medium;
  @apply rounded flex-1 text-taupe-gray px-2 hover:border-cardinal hover:text-black transition-all;
  &.active {
    @apply text-dark border-cardinal border-solid;
  }
}

.mins-radio {
  @apply relative;
  .radio {
    width: 12px;
    height: 12px;
    border-width: 2px;
    &:checked,
    &[aria-checked="true"] {
      height: 16px;
      width: 16px;
      box-shadow: 0 0 0 2px #00bfff inset, 0 0 0 2px hsl(var(--b1)) inset;
    }
    &:checked + label {
      @apply text-dark;
    }
  }
  label {
    @apply absolute w-full whitespace-nowrap cursor-pointer;
    bottom: -1.56rem;
    left: -0.5rem;
  }
  & + .divider {
    @apply flex-1 before:bg-capri after:bg-capri;
  }
}
</style>
