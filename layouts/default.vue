<script setup lang="ts">
const showCookie = ref(false)

function openCookie() {
  showCookie.value = true
  nextTick(() => {
    showCookie.value = false;
  });
}
</script>
<template>
  <div>
    <OrganismsHeader @openCookie="openCookie()"/>
    <UContainer>
      <slot/>
    </UContainer>
    <OrganismsCookie :showCookie="showCookie"/>
    <OrganismsFooter/>
  </div>
</template>
