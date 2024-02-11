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
  <LandingLayout title="Privacy Policy | Wholesum">
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
            PRIVACY POLICY
          </h1>
          <p class="text-[#444] text-base">Last updated: September 04, 2023</p>
        </div>
      </section>
      <article class="max-w-[65.75rem] mx-4 lg:!mx-auto mb-[4.69rem]">
        <LegalSection title="Introduction" class="">
          <slot>
            <div>
              <p
                class="text-dark-puce text-[3rem] font-subtitle mb-[4.69rem] mt-[1.31rem] leading-[3.875rem]"
              >
                DTF MEDIA ("Company," "We," "Us," or "Our") respects your
                privacy and is committed to protecting your personal
                information. This Privacy Policy ("Policy") outlines how we
                collect, use, disclose, and safeguard your personal information
                in connection with the "Wholesum" software application and
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
      <LegalSection title="Information We Collect" class="mb-[3.75rem]">
        <p class="text-dark text-[1.5rem] leading-[2.5rem] font-light mb-6">
          <strong class="font-medium">Personal Information:</strong> We may
          collect personal information, such as your name, email address,
          username, and any other information you provide to us when using the
          Service.
        </p>
        <p class="text-dark text-[1.5rem] leading-[2.5rem] font-light mb-6">
          <strong class="font-medium">Usage Information:</strong> We may collect
          information about your usage of the Service, including but not limited
          to log data, device information, and cookies.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Information" class="mb-[3.75rem]">
        <p class="text-dark text-[1.5rem] leading-[2.5rem] font-medium mb-6">
          We may use your personal information for the following purposes:
        </p>
        <ol
          class="text-dark text-2xl font-light leading-[2.5rem] space-y-[0.5rem] list-[lower-alpha] ml-8"
        >
          <li>To provide and maintain the Service.</li>
          <li>To improve the Service and customize your experience.</li>
          <li>
            To send you service-related communications, including updates and
            notifications.
          </li>
          <li>To respond to your requests, comments, or questions.</li>
        </ol>
      </LegalSection>

      <LegalSection title="Disclosure of Your Information" class="mb-[3.75rem]">
        <p class="text-dark text-[1.5rem] leading-[2.5rem] font-medium mb-6">
          We may share your personal information with third parties in the
          following situations:
        </p>
        <ol
          class="text-dark text-2xl font-light leading-[2.5rem] space-y-[0.5rem] list-[lower-alpha] ml-8"
        >
          <li>With your consent.</li>
          <li>To comply with legal obligations.</li>
          <li>
            To protect our rights, privacy, safety, or property, and that of our
            users and others.
          </li>
        </ol>
      </LegalSection>
      <LegalSection
        title="Security"
        description="We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Children's Privacy"
        description="The Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Links to Third-Party Websites"
        description="The Service may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. Please review the privacy policies of these websites."
        class="mb-[3.75rem]"
      />
      <LegalSection
        title="Changes to This Policy"
        description="We reserve the right to modify or revise this Policy at any time. Any changes will be effective immediately upon posting on the Service. Your continued use of the Service following the posting of changes constitutes your acceptance of such changes."
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
