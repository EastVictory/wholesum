<script setup lang="ts">
type Notification = {
  date: string;
  text: string;
  icon: string;
};
const notifications: Notification[] = [
  {
    date: "Thu",
    text: "You’ve hit your daily goals 7 days in a roll",
    icon: "noty-1",
  },
  {
    date: "Thu",
    text: "Single longest session to date",
    icon: "noty-2",
  },
  {
    date: "Thu",
    text: "More than 100 minutes today 🔥",
    icon: "noty-3",
  },
];

defineEmits<{
  (e: "toggleNotifications", value: boolean): void;
}>();
</script>

<template>
  <div class="notifications__wrapper">
    <section class="notifications">
      <div class="flex items-center gap-4 flex-1 justify-between">
        <p
          v-for="(notification, i) in notifications"
          :key="`notification-${i}`"
          class="notification"
        >
          <nuxt-icon :name="notification.icon" filled />
          {{ notification.date }} &#x2022; {{ notification.text }}
          <nuxt-link class=""> View Insights </nuxt-link>
        </p>
      </div>
      <button
        class="text-dark p-4 hover:text-cardinal"
        @click.prevent="$emit('toggleNotifications', false)"
      >
        <nuxt-icon name="x" class="no-fill" />
      </button>
    </section>
  </div>
</template>

<style scoped lang="scss">
.notifications {
  @apply max-w-[90rem] mx-auto px-[6.25rem] flex justify-between items-center h-full gap-[6.25rem];
  &__wrapper {
    @apply absolute h-[3.5rem] py-2 bg-platinum w-full;
  }
  .notification {
    @apply text-[#4D4D4D] flex items-center gap-2.5 text-sm cursor-pointer;
    &:hover {
      a {
        @apply inline-block;
      }
    }
    a {
      @apply text-dark underline text-sm font-medium hidden;
    }
  }
}
</style>
