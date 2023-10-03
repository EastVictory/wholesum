<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import StartBanner from "~/components/landing/StartBanner.vue";

type Question = {
  title: string;
  answer: string;
};
const questions: Question[] = [
  {
    title: "WHAT ARE YOU CURRENTLY READING?",
    answer:
      "The sum total of our favorites is two books; Neoteny by Montagu and the Holy Bible. We can’t decide which is most loved. ",
  },
  {
    title: "COFFEE OR TEA",
    answer:
      "We like to spill the Tea when hanging out; but coffee every morning. ",
  },
  {
    title: "CATS OR DOGS?",
    answer: `We’re looking to adopt, please send your suggestions to:  <strong><a href="mailto:dropthefilter@gmail.com" class="hover:text-cardinal">dropthefilter@gmail.com</a></strong>`,
  },
];
</script>

<template>
  <LandingLayout>
    <Head>
      <Title>Our Story</Title>
    </Head>
    <div class="shie-container pt-[12.31rem] pb-[10rem]">
      <section class="mb-[5.62rem]">
        <h2
          class="text-center text-dark text-[2.5rem] mb-4 leading-[2.5rem] font-title"
        >
          DTF MULTI MEDIA CO.
        </h2>
        <div class="text-2xl font-light max-w-[32.5rem] mx-auto text-center">
          <p class="mb-8 leading-[normal]">
            We’re passionate about well-being; which takes takes into account
            all aspects of work and home life balance.
          </p>
          <p class="leading-[normal]">
            <span class="font-title leading-3">wholesum</span> is a To Do
            planner to workout what’s important.
          </p>
        </div>
      </section>
      <section class="mb-[5.62rem]">
        <h2
          class="text-center text-dark text-[2.5rem] mb-4 leading-[2.5rem] font-title"
        >
          QUESTION &amp; RESPONSE
        </h2>
        <div class="flex gap-[3.19rem] max-w-[66rem] mx-auto">
          <div
            v-for="(question, i) in questions"
            :key="i"
            class="max-w-[21.875rem] p-6"
          >
            <h3
              class="text-2xl font-subtitle leading-[2.5rem] text-dark-puce mb-4 font-normal"
            >
              {{ question.title }}
            </h3>
            <p
              class="text-dark font-light leading-6"
              v-html="question.answer"
            ></p>
          </div>
        </div>
      </section>
      <StartBanner class="mb-[7.81rem]" />
    </div>
  </LandingLayout>
</template>

<style scoped lang="scss"></style>
