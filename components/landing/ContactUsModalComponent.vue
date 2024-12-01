<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const url = ref("info@whole-sum.com.au");
const { copy, copied } = useClipboard({ source: url });
</script>

<template>
  <section class="flex flex-col items-center py-[3.25rem]">
    <p class="font-title text-2xl lg:text-[2rem] text-licorice mb-4">
      ...how to reach us
    </p>
    <div
      class="max-w-[21.25rem] w-full flex justify-center items-center py-4 lg:px-[3.0625rem] bg-[#F3F2ED] rounded-lg mb-4"
    >
      <p class="px-2 lg:px-4 text-sm font-medium font-mono">{{ url }}</p>
      <button>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click.prevent="copy"
        >
          <path
            d="M19 3H13C12.337 3 11.7011 3.26339 11.2322 3.73223C10.7634 4.20107 10.5 4.83696 10.5 5.5V8.5H11.5V5.5C11.5 5.10218 11.658 4.72064 11.9393 4.43934C12.2206 4.15804 12.6022 4 13 4H19C19.3978 4 19.7794 4.15804 20.0607 4.43934C20.342 4.72064 20.5 5.10218 20.5 5.5V11.5C20.5 11.8978 20.342 12.2794 20.0607 12.5607C19.7794 12.842 19.3978 13 19 13H16V14H19C19.663 14 20.2989 13.7366 20.7678 13.2678C21.2366 12.7989 21.5 12.163 21.5 11.5V5.5C21.5 4.83696 21.2366 4.20107 20.7678 3.73223C20.2989 3.26339 19.663 3 19 3Z"
            fill="#1A1110"
            fill-opacity="0.75"
          />
          <path
            d="M11 11H5C4.33696 11 3.70107 11.2634 3.23223 11.7322C2.76339 12.2011 2.5 12.837 2.5 13.5V19.5C2.5 20.163 2.76339 20.7989 3.23223 21.2678C3.70107 21.7366 4.33696 22 5 22H11C11.663 22 12.2989 21.7366 12.7678 21.2678C13.2366 20.7989 13.5 20.163 13.5 19.5V13.5C13.5 12.837 13.2366 12.2011 12.7678 11.7322C12.2989 11.2634 11.663 11 11 11ZM12.5 19.5C12.5 19.8978 12.342 20.2794 12.0607 20.5607C11.7794 20.842 11.3978 21 11 21H5C4.60218 21 4.22064 20.842 3.93934 20.5607C3.65804 20.2794 3.5 19.8978 3.5 19.5V13.5C3.5 13.1022 3.65804 12.7206 3.93934 12.4393C4.22064 12.158 4.60218 12 5 12H11C11.3978 12 11.7794 12.158 12.0607 12.4393C12.342 12.7206 12.5 13.1022 12.5 13.5V19.5Z"
            fill="#1A1110"
            fill-opacity="0.75"
          />
        </svg>
      </button>
    </div>
    <p class="text-licorice/75 text-sm">
      <span v-if="copied"> Copied! </span>
      <span v-else> "People with self-esteem work better" </span>
    </p>
  </section>
</template>

<style scoped lang="scss"></style>
