<script setup lang="ts">
import { DateTime } from "luxon";
import WeatherReport from "~/components/landing/WeatherReport.vue";
const date = DateTime.now().toFormat("DDD");
</script>

<template>
  <div class="bg-white min-h-screen flex-col flex justify-between flex-1">
    <div class="flex-1 flex flex-col">
      <header class="py-6 mb-[1.6875rem]">
        <div
          class="max-w-[34.375rem] gap-x-[3.125rem] mx-auto flex justify-between items-center pl-6"
        >
          <nuxt-link to="/" class="inline-flex">
            <nuxt-icon name="logo-icon" class="h-8" filled />
          </nuxt-link>
          <span v-if="date" class="hidden lg:block">{{ date }}</span>
          <WeatherReport hide-date />
        </div>
      </header>
      <main class="h-full flex-1 flex flex-col justify-between">
        <div class="max-w-[42rem] mx-auto w-full">
          <div class="flex justify-center mb-6">
            <nuxt-icon name="story" class="inline-block mx-auto" filled />
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 font-sf text-licorice text-sm gap-6 px-4 mb-[5.5rem]"
          >
            <section class="flex flex-col gap-4">
              <p>
                In 2021, I found myself overwhelmed by the demands of juggling
                multiple projects. Feeling stressed and unproductive, I turned
                to my coach for advice. His wisdom was straightforward yet
                transformative:
              </p>

              <p class="text-licorice/75">
                "Structure your to-do list to spend 3 hours on the most
                important project, complete 3 shorter tasks, and handle 3
                maintenance activities."
              </p>

              <p>This guidance became the foundation for Wholesum.</p>

              <p>
                The journey to creating Wholesum began with the realization that
                self-confidence is shaped by how we perceive challenges and our
                ability to overcome them. With a focus on minimizing
                distractions, eliminating compulsive activities, and embracing
                deep work, I discovered that a structured approach to
                productivity could significantly enhance my well-being and
                efficiency.
              </p>

              <p class="text-licorice/75">
                "Our doubts are traitors, And make us lose the good we oft might
                win, By fearing to attempt."
              </p>

              <p class="text-licorice/75">
                William Shakespeare on confidence and courage
              </p>
            </section>
            <section class="flex flex-col gap-4">
              <p>
                We create our everyday reality by our feelings, thoughts and
                actions, but sometimes self doubt gets in the way. Research
                indicates that around 70% of people will experience at least one
                episode of Impostor Phenomenon in their lives. In a December
                2018 talk at an all-girls school in North London, Michelle Obama
                confessed to still experiencing it, telling students, “It never
                goes away.”
              </p>
              <p>
                Join us on this adventure to experience well-being and
                productivity. Wholesum is more than just a tool; it's a
                lifestyle companion that supports you in achieving your best
                self. Whether you're managing projects, learning new skills, or
                connecting with others, Wholesum is here to help you thrive.
              </p>
              <div class="flex items-center gap-4">
                <img
                  src="/images/png/founder.png"
                  alt="founder"
                  class="rounded-full w-8 h-8"
                />
                <div class="">
                  <p class="font-semibold">Silas Onmbayugh</p>
                  <p class="text-xs text-licorice/75">
                    Founding Designer at Wholesum.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
    <LandingFooter />
  </div>
</template>

<style scoped lang="scss"></style>
