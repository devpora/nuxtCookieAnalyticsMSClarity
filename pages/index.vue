<script setup>
useSeoMeta({
  titleTemplate: 'Index',
  title: 'Nuxt3 + MS Clarity + Analytics | Practical Implementation',
  ogTitle: 'Nuxt3 + MS Clarity + Analytics | Practical Implementation',
  description: 'Learn practical implementation of Nuxt3 along with MS Clarity and Google Analytics. This project is intended for developers as a testing tool to quickly get their projects up and running.',
  ogDescription: 'Learn practical implementation of Nuxt3 along with MS Clarity and Google Analytics. This project is intended for developers as a testing tool to quickly get their projects up and running.',
  ogImage: '/images/devpora-logo.png',
})
</script>
<template>
  <UPage>
    <UPageBody class="relative flex flex-col justify-center" style="min-height: calc(100vh - 120px);">
      <ULandingCTA
          title="Enhance Your Nuxt Projects with Cookies, Analytics, and Clarity"
          card
      >
        <template #description>
          <p class="py-8">
            Explore our practical demonstrations on integrating cookies for GDPR compliance, setting up Google Analytics
            for insightful user data, and utilizing Microsoft Clarity for in-depth user behavior analysis.
          </p>
          <p class="text-red-500">
            All texts on this website are for guidance only. Before using them on your website, they should be reviewed,
            approved, and legally compliant with the laws of the country or countries where you provide the service.
          </p>

        </template>
      </ULandingCTA>
    </UPageBody>
  </UPage>
</template>
