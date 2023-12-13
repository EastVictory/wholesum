<script setup lang="ts">
import ShiePillButton from "~/components/buttons/ShiePillButton.vue";

type Notification = {
  subtitle: string;
  title: string;
  isRead: boolean;
  createdAt: string;
  description?: string;
  tags?: string[];
};
withDefaults(
  defineProps<{
    notification: Notification;
  }>(),
  {}
);
</script>

<template>
  <div class="notification-card" :class="{ read: notification.isRead }">
    <div class="flex justify-between items-center mb-5">
      <p class="font-title text-xs text-dark uppercase">
        {{ notification.subtitle }}
      </p>
      <p class="font-title text-xs text-dark">
        <span class="font-title text-dark">{{ notification.createdAt }}</span> .
        <span class="capitalize font-title">{{
          notification.isRead ? "Read" : "Unread"
        }}</span>
      </p>
    </div>
    <p class="text-2xl leading-[2rem] font-title mb-2 text-dark">
      {{ notification.title }}
    </p>
    <p v-if="notification?.description" class="text-sm font-medium text-dark">
      {{ notification.description }}
    </p>
    <div v-if="notification?.tags" class="flex justify-end gap-2 items-center">
      <ShiePillButton v-for="tag in notification.tags" :key="tag">{{
        tag
      }}</ShiePillButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification-card {
  @apply w-full max-w-[37.25rem] bg-[#E1E120] rounded-lg px-4 pt-4 pb-5;
  &.read {
    @apply bg-[#F2F3F4];
  }
}
</style>
