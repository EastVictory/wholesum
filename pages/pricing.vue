<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import ShieButton from "~/components/buttons/ShieButton.vue";

const features = [
  "-> Uncommon Insights",
  "-> Make time to focus",
  "-> Custom timer interface",
  "-> Share your content",
];
</script>

<template>
  <LandingLayout>
    <Head>
      <Title>Pricing</Title>
    </Head>
    <div class="shie-container pt-[12.31rem]">
      <article class="mb-[5.62rem] max-w-[45.4375rem] mx-auto">
        <h2
          class="text-center text-dark text-[2.5rem] mb-8 leading-[2.5rem] font-title"
        >
          PRICING &amp; BENEFITS
        </h2>
        <section class="flex items-center gap-[1.56rem]">
          <div class="w-1/2 max-w-[21.875rem] px-4">
            <h3
              class="text-2xl font-subtitle leading-[2.5rem] text-dark-puce mb-6 font-normal"
            >
              60 DAYS FREE TRIAL
            </h3>
            <p class="leading-8 mb-10 text-base font-light text-dark">
              Use <span class="font-title leading-4">wholesum</span> to manage
              your to dos and it works out, upgrade for FULL ACCESS.
            </p>
            <ShieButton plain>START TRIAL TODAY</ShieButton>
          </div>
          <div
            class="rounded-[1.375rem] border-2 border-dark-puce p-6 bg-white min-w-[23.5625rem]"
          >
            <h3 class="text-dark font-title leading-[2.5rem]">CREATIVE PRO</h3>
            <p class="font-semibold leading-6 text-2xl mb-8 text-dark">
              AUD $ 7.99/mo
            </p>
            <div class="mb-[2.37rem] space-y-6">
              <p
                v-for="(feature, i) in features"
                :key="i"
                class="text-dark font-light leading-6"
              >
                {{ feature }}
              </p>
            </div>
            <ShieButton plain variant="dark">GET FULL ACCESS</ShieButton>
          </div>
        </section>
      </article>
    </div>
  </LandingLayout>
</template>

<style scoped lang="scss"></style>
