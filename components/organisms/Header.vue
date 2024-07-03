<script setup lang="ts">
import {defineEmits} from "vue";
const emit = defineEmits(['openCookie']);
const links = [{
  label: 'Cookie',
  click: () => {
    emit('openCookie', true)
  },
}, {
  label: 'Images',
  to: '/images'
}, {
  label: 'Text',
  to: '/text'
}]
</script>
<template>
  <UHeader :links="links">

    <template #logo>
      <section class="flex flex-row gap-2 items-center">
        DevPora
        <UBadge label="cookie" variant="subtle" class=""/>
      </section>
    </template>

    <template #right>
      <UButton to="https://ui.nuxt.com/pro?aff=Ge5Bd" target="_blank" label="NuxtUI" size="xl" color="lime" variant="ghost"  class="animate-bounce"/>
      <UColorModeButton/>
      <UButton to="https://github.com/devpora/nuxtCookieAnalyticsMSClarity" target="_blank" icon="i-simple-icons-github" color="lime" variant="ghost" />
      <UTooltip
          text="Dev Pora"
      >
        <UAvatar
            src="/images/avatar.png"
            alt="Avatar"
        />
      </UTooltip>
    </template>

    <template #panel>
      <div class="flex justify-end gap-4">
        <UColorModeButton/>
      </div>
      <UDivider class="my-6"/>
    </template>

  </UHeader>
</template>
