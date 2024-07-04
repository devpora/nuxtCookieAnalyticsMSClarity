<template>
  <UFooter>
    <template #left>
      <NuxtLink to="https://devpora.com">DevPora</NuxtLink>
    </template>
    <template #center>
      {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>
