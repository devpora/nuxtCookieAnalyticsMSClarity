<script setup lang="ts">
import {sendEventToAnalytics} from "~/utils/analytics";

const cookieAnalytics = useCookie('cookieAnalytics')

const text = ref(null)
const textSecond = ref(null)
const data = ref(null)
const toast = useToast()

function showToast() {
  data.value = text.value ? text.value : 'Test input'
  toast.add({title: data.value})

  // Send data to Analytics
  if (cookieAnalytics.value === true) {
    sendEventToAnalytics('input_test_text', {
      event_category: 'InputField',
      event_label: 'SubmitFirstButton',
      value: data.value,
    });
  }
}

function showSecondToast() {
  toast.add({title: textSecond.value, color: 'amber'})

  // Send data to Analytics
  if (cookieAnalytics.value === true) {
    sendEventToAnalytics('input_test_password', {
      event_category: 'InputField',
      event_label: 'SubmitSecondButton',
      value: textSecond.value,
    });
  }
}

useSeoMeta({
  titleTemplate: 'Text',
  title: 'Nuxt3 | Test Text Input for MS Clarity and Analytics',
  ogTitle: 'Nuxt3 | Test Text Input for MS Clarity and Analytics',
  description: 'Test interactions with text inputs using Nuxt3 combined with MS Clarity and Google Analytics. Perfect for developers looking for practical examples.',
  ogDescription: 'Test interactions with text inputs using Nuxt3 combined with MS Clarity and Google Analytics. Perfect for developers looking for practical examples.',
  ogImage: '/images/devpora-logo.png',
})
</script>
<template>
  <UPage>
    <UPageBody class="relative flex flex-col justify-center overflow-hidden " style="height: calc(100vh - 128px);">
      <ULandingHero
          :title="data ? data : 'My test Text'"
          :description="`You can open the Developer tools and Network tab to check if the cookie and analytics are working correctly. Cookie for Analytics is ${cookieAnalytics ? 'enabled' : 'disabled'}. Sending data is ${cookieAnalytics ? 'allowed' : 'blocked'}`"
      >
        <UInput v-model="text" type="text" size="xl" placeholder="Enter text and press enter" @keyup.enter="showToast"/>
        <UInput v-model="textSecond" type="password" size="xl" placeholder="Enter text and press enter"
                @keyup.enter="showSecondToast"/>
      </ULandingHero>
    </UPageBody>
  </UPage>
</template>
