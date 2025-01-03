<script setup lang="ts">
import { useModal, useModalSlot } from "vue-final-modal";
import ContactUsModalComponent from "~/components/landing/ContactUsModalComponent.vue";
import AppModal from "~/components/ui/AppModal.vue";
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
      component: ContactUsModalComponent,
    }),
  },
});
</script>

<template>
  <footer
    class="max-w-[69.25rem] mx-auto flex flex-col md:flex-row px-8 lg:px-0 py-6 text-licorice font-light justify-between w-full gap-y-6"
  >
    <p class="max-w-[11.4375rem] 2xl:max-w-[23.75rem] w-full gap-y-6">
      Made at Orne Media ABN 16423488320
    </p>
    <ul
      class="flex flex-col md:flex-row items-start md:items-center justify-start lg:justify-around md:list-disc gap-8"
    >
      <li>
        <nuxt-link to="/why" class="underline">
          Why we started Wholesum
        </nuxt-link>
      </li>
      <!--      <li class="hidden lg:block">-->
      <!--        <a href="" class="underline">Join the Substack conversation</a>-->
      <!--      </li>-->
      <li>
        <button class="underline" @click.prevent="open">Contact email</button>
      </li>
      <li>
        <p class="">© 2024</p>
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
//.route
</style>
