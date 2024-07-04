<script setup lang="ts">
const props = defineProps(
    {
      showCookie: Boolean,
    }
)

const isOpen = ref<boolean>(false)
const isSettingsOpen = ref<boolean>(false)

const cookieAnalytics = useCookie('cookieAnalytics')

const form = ref({
  cookieFunctional: true,
  cookieAnalytics: cookieAnalytics.value === undefined || cookieAnalytics.value === 'true' || cookieAnalytics.value === true
})

function init() {
  isOpen.value = typeof cookieAnalytics.value === 'undefined'
}

function saveSelected() {
  if (form.value.cookieAnalytics !== cookieAnalytics.value) {
    cookieAnalytics.value = JSON.stringify(form.value.cookieAnalytics)
    location.reload()
  }
  isOpen.value = false
  isSettingsOpen.value = false
}

function saveAll() {
  form.value.cookieAnalytics = true
  if (form.value.cookieAnalytics !== cookieAnalytics.value) {
    cookieAnalytics.value = JSON.stringify(form.value.cookieAnalytics)
    location.reload()
  }
  isOpen.value = false
  isSettingsOpen.value = false
}

watch(() => props.showCookie, (newValue: boolean) => {
  if (newValue) {
    isOpen.value = true
  }
}, {
  immediate: true
})

onMounted(() => {
  init();
});
</script>

<template>
  <div class="w-full fixed bottom-0">
    <div
        v-if="isOpen"
        class="p-2 lg:p-4">
      <ULandingCard
          v-if="!isSettingsOpen"
          color="primary"
          orientation="horizontal"
          :ui="{
            background: 'bg-primary-300 dark:bg-primary-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]',
          }"
      >
        <template #title>
          <UIcon name="i-simple-icons-cookiecutter" class="animate-pulse"/>
          ookie
        </template>
        <template #description>
          <span class="text-sm md:text-base">
            Cookies enhance your experience on our site. By clicking 'Agree' or continuing to browse, you consent to their use.
          </span>
        </template>
        <div>
          <div class="flex flex-row md:flex-col items-center gap-0 md:gap-2">
            <UButton block class="w-1/4 md:w-1/2" variant="link" @click="isSettingsOpen = true">Settings</UButton>
            <UButton block class="w-3/4 md:w-1/2 justify-content-center" @click="saveAll()">Accept</UButton>
          </div>
        </div>
      </ULandingCard>
      <ULandingCard
          v-if="isSettingsOpen"
          icon="i-simple-icons-cookiecutter"
          color="primary"
          orientation="vertical"
          :ui="{
            background: 'bg-primary-300 dark:bg-primary-900 bg-opacity-90 hover:bg-opacity-100 dark:bg-opacity-90 dark:hover:bg-opacity-100 transition-[background-opacity]',
          }"
      >
        <template #title>
          We Use Cookies on Our Site
        </template>
        <template #description>
          <span class="text-sm lg:text-base">
            Our website uses cookies to ensure its proper functioning and to enhance your user experience. Some of these cookies are essential for the functionality of the site, while others help us analyze how you use the site.
            You can choose which cookies you want to allow.
          </span>
        </template>
        <div>
          <div class="overflow-y-auto max-h-48 lg:max-h-max">
            <div class="pb-4">
              <UCheckbox
                  v-model="form.cookieFunctional" required disabled
                  label="Functional Cookies"
                  help="Functional cookies are necessary for the proper functioning of our website. These cookies enable basic functions like navigation, access to secure areas of the site, login, and saving your preferences. Without these cookies, the website would not function properly."
              />
            </div>
            <div class="pb-4">
              <UCheckbox
                  v-model="form.cookieAnalytics"
                  label="Analytical Cookies"
                  help="Analytical cookies help us understand how visitors use our website. These cookies collect information anonymously and are used to improve the site's functionality and user experience."
              />
            </div>

            <div class="pt-4 pb-8">
              <span class="text-gray-900 dark:text-white text-sm lg:text-base font-semibold md:font-bold">
                By consenting to the use of cookies, you enable us to improve our website and provide you with a better experience. Allowing analytical cookies helps us analyze how you use the site and improve its functionality and content for you.
              </span>
            </div>
          </div>

          <div class="flex flex-row items-center gap-0 md:gap-2 pt-2">
            <UButton class="w-1/4 md:w-1/2 justify-center" variant="link" @click="saveSelected()">Save selected
            </UButton>
            <UButton class="w-3/4 md:w-1/2 justify-center" @click="saveAll()">Save All</UButton>
          </div>
        </div>
      </ULandingCard>
    </div>
  </div>
</template>
