<script setup lang="ts">
type Suggestion = {
  icon: string;
  type: string;
  title: string;
  text: string;
};

const suggestions: Suggestion[] = [
  {
    icon: "trend-education",
    type: "education",
    title: "Lorem ipsum dolor sit amet",
    text: "The Gospel of John plays a unique and influential role in the Christian Bible.",
  },
  {
    icon: "trend-social",
    type: "social",
    title: "Lorem ipsum dolor sit amet",
    text: "The Gospel of John plays a unique and influential role in the Christian Bible.",
  },
  {
    icon: "trend-self-care",
    type: "self-care",
    title: "Lorem ipsum dolor sit amet",
    text: "The Gospel of John plays a unique and influential role in the Christian Bible.",
  },
  {
    icon: "trend-fitness",
    type: "fitness",
    title: "Lorem ipsum dolor sit amet",
    text: "The Gospel of John plays a unique and influential role in the Christian Bible.",
  },
];
</script>

<template>
  <section>
    <div class="flex justify-between py-2.5 mb-6">
      <p class="text-sm text-[#191521]">Suggested Resources</p>
      <nuxt-link class="text-xxs underline capitalize font-medium">
        View all Resources
      </nuxt-link>
    </div>
    <div class="flex justify-between gap-4">
      <div
        v-for="(suggestion, i) in suggestions"
        :key="`suggestion-${i}`"
        class="p-2.5 rounded suggestion"
        :class="`suggestion-${suggestion.type}`"
      >
        <p class="flex gap-2 text-dark p-2.5">
          <nuxt-icon
            :name="suggestion.icon"
            class="no-fill text-dark h-[0.875rem] w-[0.875rem]"
          />
          <span class="text-sm uppercase">{{
            suggestion.type.replace("-", " ")
          }}</span>
        </p>
        <p class="text-[#191521] mb-2.5">
          {{ suggestion.title }}
        </p>
        <p class="px-2.5 text-dark-liver font-light text-sm mb-4">
          {{ suggestion.text }}
        </p>
        <div class="text-right">
          <nuxt-link
            class="text-xxs text-[#191521] font-medium underline opacity-0 transition-all"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.suggestion {
  @apply lg:max-w-[10.625rem] min-h-[13.875rem];
  &-education {
    @apply bg-[#6693FA];
  }
  &-social {
    @apply bg-[#DCC2EE];
  }
  &-self-care {
    @apply bg-[#76D7AE];
  }
  &-fitness {
    @apply bg-[#FAF0BE];
  }
  &:hover {
    a {
      @apply opacity-100;
    }
  }
}
</style>
