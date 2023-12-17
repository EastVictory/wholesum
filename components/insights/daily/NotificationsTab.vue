<script setup lang="ts">
import NotificationCard from "~/components/insights/NotificationCard.vue";
type Notification = {
  subtitle: string;
  title: string;
  isRead: boolean;
  createdAt: string;
  description?: string;
  tags?: string[];
};
const notifications: Notification[] = [
  {
    subtitle: "daily streak",
    createdAt: "2 secs ago",
    isRead: false,
    title: "🎉 18 Days",
    description: "You’ve reviewed a Task for 18 days in a roll ",
  },
  {
    subtitle: "TASK CREATED",
    createdAt: "8 mins ago",
    isRead: false,
    title: "Conduct User Interviews",
    tags: ["ongoing", "education"],
  },
  {
    subtitle: "DAILY REPORT ",
    createdAt: "8 hrs ago",
    isRead: true,
    title: "🎉 87 Mins",
    description: "You averaged 3.48 Pomodoros in the last 8hrs",
  },
  {
    subtitle: "TASK CREATED",
    createdAt: "8 mins ago",
    isRead: false,
    title: "Complete Designs for wholesum",
    tags: ["ongoing", "education"],
  },
  {
    subtitle: "TASK CREATED",
    createdAt: "8 mins ago",
    isRead: true,
    title: "Update Database Schema",
    tags: ["draft", "education"],
  },
];
</script>

<template>
  <div class="flex flex-col gap-3 items-center mx-auto">
    <NotificationCard
      v-for="(notification, i) in notifications"
      :key="`notifications-${i}`"
      :notification="notification"
    />
  </div>
</template>

<style scoped lang="scss"></style>
