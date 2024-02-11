<script setup lang="ts">
import LandingLayout from "~/components/layouts/LandingLayout.vue";
import LegalSection from "~/components/landing/LegalSection.vue";

type Link = {
  name: string;
  href: string;
};
const links: Link[] = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <LandingLayout title="Terms of Use | Wholesum">
    <div class="shie-container pt-6">
      <section
        class="max-w-[76.5rem] mx-auto w-full rounded-[1.375rem] border-2 border-dark-puce p-6 bg-white mb-[5.31rem]"
      >
        <header class="home-nav">
          <nav
            class="flex justify-center items-center gap-[4.12rem] mb-[5.62rem]"
          >
            <a href="/">
              <nuxt-icon name="logo-icon" filled />
            </a>
            <ul class="flex gap-x-[2.63rem]">
              <li
                v-for="link in links"
                :key="link.href"
                class="text-dark-puce font-title uppercase text-sm hover:text-cardinal"
              >
                <nuxt-link :to="link.href">{{ link.name }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </header>

        <div class="flex flex-col items-center text-center mb-[4.69rem]">
          <h1
            class="font-subtitle text-[2.5rem] text-outer-space mb-[1.44rem] uppercase"
          >
            Terms of Use
          </h1>
          <p class="text-[#444] text-base">Last updated: September 04, 2023</p>
        </div>
      </section>
      <article class="max-w-[65.75rem] mx-4 lg:!mx-auto mb-[4.69rem]">
        <LegalSection title="Acceptance of Terms" class="">
          <slot>
            <div>
              <p
                class="text-dark-puce text-[3rem] font-subtitle mb-[4.69rem] mt-[1.31rem] leading-[3.875rem]"
              >
                This Agreement ("Agreement") is entered into between you ("User"
                or "You") and DTF MEDIA ("Company," "We," "Us," or "Our") and
                governs your use of the "Wholesum" software application and
                related services (collectively referred to as the "Service").
              </p>
              <p class="text-[2rem] text-dark leading-10 font-light">
                By accessing or using the Service, you consent to the practices
                described in this Policy. If you do not agree to this Policy,
                please do not use the Service.
              </p>
            </div>
          </slot>
        </LegalSection>
      </article>
    </div>
    <hr class="border-b border-dashed border-dark-puce" />

    <article
      class="max-w-[65.75rem] mx-4 lg:!mx-auto mt-[3.75rem] mb-[13.62rem]"
    >
      <LegalSection
        title="License"
        description="Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal, educational, or business purposes."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Registration and User Account"
        description="To access certain features of the Service, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update this information to keep it accurate and current. <br><br>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Privacy"
        description="Our Privacy Policy, available at <a href='#' class='underline hover:text-cardinal'>here</a>, governs the collection, use, and disclosure of your personal information. By using the Service, you consent to the terms of the Privacy Policy."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="User Content"
        description='You retain ownership of any content you submit or upload to the Service ("User Content"). By submitting User Content, you grant us a worldwide, royalty-free, non-exclusive license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such User Content for the purpose of providing and improving the Service.'
        class="mb-[3.75rem]"
      />
      <LegalSection title="Prohibited Activities" class="mb-[3.75rem]">
        <p class="text-dark text-[1.5rem] leading-[2.5rem] font-medium mb-6">
          You agree not to engage in any of the following activities while using
          the Service:
        </p>
        <ol
          class="text-dark text-2xl font-light leading-[2.5rem] space-y-[1.5rem] list-[lower-alpha] ml-8"
        >
          <li>Violating any applicable laws or regulations.</li>
          <li>
            Uploading, posting, or transmitting any content that is illegal,
            harmful, threatening, abusive, defamatory, or otherwise
            objectionable.
          </li>
          <li>
            Attempting to interfere with or disrupt the integrity or performance
            of the Service.
          </li>
        </ol>
      </LegalSection>
      <LegalSection
        title="Termination"
        description="We may terminate or suspend your access to the Service at our sole discretion, with or without cause, and with or without notice.<br><br>Upon termination, your right to use the Service will immediately cease."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Disclaimer of Warranties"
        description='The Service is provided "as-is" and "as available" without warranties of any kind, either expressed or implied.'
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Limitation of Liability"
        description="To the fullest extent permitted by applicable law, in no event shall the Company be liable for any indirect, incidental, special, consequential, or punitive damages."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Governing Law"
        description="This Agreement shall be governed by and construed in accordance with the laws of Australia."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Changes to Terms"
        description="We reserve the right to modify or revise this Agreement at any time. Any changes will be effective immediately upon posting on the Service. Your continued use of the Service following the posting of changes constitutes your acceptance of such changes."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Contact Information"
        description="For any questions or concerns regarding this Policy or our privacy practices, please contact us at dropthefilter@gmail.com or send a mail to our address found <a href='mailto:dropthefilter@gmail.com' class='underline hover:text-cardinal'>here.</a>"
        class="mb-[3.75rem]"
      />
    </article>
  </LandingLayout>
</template>

<style scoped lang="scss">
.feature {
  @apply flex flex-col min-w-[13.53613rem];

  &-top-half {
    @apply -mb-1;
    &:hover {
      .feature-bg {
        @apply opacity-100;
      }
    }
  }
  &-icon,
  &-text {
    @apply absolute z-[2] left-[50%]  -translate-x-[50%] text-center;
  }
  &-icon {
    @apply bottom-[1.5rem];
  }
  &-text {
    @apply top-[1rem] text-white text-[1.375rem] leading-[2.5rem];
  }
}
</style>
