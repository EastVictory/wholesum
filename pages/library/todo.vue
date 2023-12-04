<script setup lang="ts">
import { Ref } from "vue";
import DashboardLayout from "~/components/layouts/DashboardLayout.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";
import TimerCard from "~/components/resources/TimerCard.vue";
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";
import ShieDropdown from "~/components/buttons/ShieDropdown.vue";
import ShieModal from "~/components/modals/ShieModal.vue";

const confirmModal: any = ref(null);
const todoInput: Ref<HTMLInputElement | null> = ref(null);
const categories = ["EDUCATION", "SOCIAL", "SELF CARE", "FITNESS"];
const activeCategory = ref("EDUCATION");
const timerDuration = ref(0);
const breakDuration = ref(0);
const notEditing = ref(true);
const handleRename = () => {
  todoInput.value?.focus();
};
const handleDuplicate = () => {
  window.location.replace("/library/todo?copy=1");
};
const handleDelete = () => {
  confirmModal.value?.handleClick();
};

const confirmDelete = async () => {
  await navigateTo({ path: "/library" });
};

const taskActions = [
  {
    name: "Rename",
    action: handleRename,
  },
  {
    name: "Duplicate",
    action: handleDuplicate,
  },
  {
    name: "Delete",
    action: handleDelete,
  },
];
</script>

<template>
  <DashboardLayout title="Library | New Todo">
    <div class="shie-container">
      <section
        class="max-w-[64.91375em] mx-auto flex items-center justify-between mb-[1.84rem]"
      >
        <div class="flex flex-row items-center">
          <p
            v-if="notEditing"
            class="font-title text-dark-puce leading-[1.125rem] text-base"
          >
            TODO /
          </p>
          <input
            ref="todoInput"
            type="text"
            class="text-dark leading-[1.125rem] text-base min-w-[6.5rem] mb-0 inline-block ml-1 bg-transparent focus:hover:bg-transparent hover:bg-crayola py-2 focus-visible:outline-none placeholder:text-dark font-title"
            :placeholder="`${
              ($route.query.copy && '[COPY] ') || ''
            }UNTITLED TASK`"
            @focusin="notEditing = false"
            @blur="notEditing = true"
          />
          <ShieDropdown v-if="notEditing" auto-close="true">
            <template #default>
              <span class="rotate-90 inline-block">
                <nuxt-icon name="chevron-right" filled class="" />
              </span>
            </template>

            <template #options>
              <ul class="min-w-[14.3125rem]">
                <li
                  v-for="(taskAction, i) in taskActions"
                  :key="`task-action-${i}`"
                >
                  <button
                    class="hover:bg-crayola rounded tex-sm font-medium leading-[2.5rem] text-black px-4 py-4 uppercase w-full text-left"
                    @click="taskAction.action"
                  >
                    {{ taskAction.name }}
                  </button>
                </li>
              </ul>
            </template>
          </ShieDropdown>
        </div>
        <div class="flex flex-row items-center gap-2">
          <ShiePillButton>{{ activeCategory }}</ShiePillButton>
          <ShiePillButton>{{ timerDuration }} mins session</ShiePillButton>
          <ShiePillButton>{{ breakDuration }} mins break</ShiePillButton>
        </div>
      </section>
      <section
        class="mb-[5.62rem] max-w-[45.8125rem] p-6 mx-auto flex justify-between items-center"
      >
        <div class="flex gap-4">
          <ShieDropdown>
            <template #default>
              <span
                class="shie-black-border rounded p-5 h-[4rem] inline-block hover:bg-crayola"
              >
                <nuxt-icon name="three-dots" filled />
              </span>
            </template>
            <template #options>
              <ul class="min-w-[14.3125rem]">
                <li>
                  <button
                    class="hover:bg-crayola rounded tex-sm font-medium leading-[2.5rem] text-black px-4 py-4 uppercase w-full text-left"
                  >
                    DOWNLOAD NOTES
                  </button>
                </li>
                <li>
                  <button
                    class="hover:bg-crayola rounded tex-sm font-medium leading-[2.5rem] text-black px-4 py-4 uppercase w-full text-left"
                  >
                    SEND COPY
                  </button>
                </li>
              </ul>
            </template>
          </ShieDropdown>

          <ShieButton
            variant="secondary"
            class="!px-4 !bg-white !w-[12.5625rem] !h-[4rem]"
          >
            MARK AS DONE
          </ShieButton>
        </div>
        <div>
          <ShieButton
            variant="primary"
            class="!bg-crayola !text-black !w-[16.59644rem] !px-7 !inline-flex !justify-between"
            @click="navigateTo('/countdown')"
          >
            Start to do
            <nuxt-icon name="player" filled class="" />
          </ShieButton>
        </div>
      </section>
      <article class="mb-[5.62rem] max-w-[40.3125rem] mx-auto">
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
            :min="25"
            :max="100"
            @change="(e) => (timerDuration = e)"
          />
          <TimerCard
            title="Break"
            :min="5"
            :max="25"
            description="START BREAK AFTER TIMER"
            class="w-full lg:w-[37%]"
            @change="(e) => (breakDuration = e)"
          />
        </section>
      </article>
      <ShieModal ref="confirmModal" @yes-action="confirmDelete" />
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
