<template>
  <div class="min-h-screen">
    <slot />
    <ModalsContainer />
  </div>
</template>
<script setup>
import "tw-elements/dist/css/tw-elements.min.css";
import { ModalsContainer } from "vue-final-modal";
</script>
