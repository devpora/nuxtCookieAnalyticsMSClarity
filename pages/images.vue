<script setup lang="ts">
const items = [
  '/images/devpora_img_1.webp',
  '/images/devpora_img_2.webp',
  '/images/devpora_img_3.webp',
  '/images/devpora_img_4.webp',
  '/images/devpora_img_5.webp',
  '/images/devpora_img_6.webp',
  '/images/devpora_img_7.webp',
  '/images/devpora_img_8.webp',
  '/images/devpora_img_9.webp'
]

const isOpen = ref(false)
const currentImage = ref(null)

function openModal(image: string) {
  isOpen.value = true;
  currentImage.value = image;
}

function closeModal() {
  isOpen.value = false;
  currentImage.value = null;
}

useSeoMeta({
  titleTemplate: 'Images',
  title: 'Nuxt3 | Test Images for MS Clarity and Analytics',
  ogTitle: 'Nuxt3 | Test Images for MS Clarity and Analytics',
  description: 'Test image display using Nuxt3 combined with MS Clarity and Google Analytics. Ideal for developers looking for practical examples.',
  ogDescription: 'Test image display using Nuxt3 combined with MS Clarity and Google Analytics. Ideal for developers looking for practical examples.',
  ogImage: '/images/devpora-logo.png',
})
</script>
<template>
  <UPage>
    <div class="grid grid-cols-3 gap-12">
      <div
          v-for="(image, index) in items"
          :key="index"
          class="relative cursor-pointer"
      >
        <ULandingCard
            color="primary"
            orientation="vertical"
        >
          <img
              :src="image"
              class="w-full rounded-md px-12 "
              @click="openModal(image)"
          />
        </ULandingCard>
      </div>
    </div>

    <UModal v-model="isOpen">
      <div>
        <img
            :src="currentImage"
            class="w-full rounded-md"
            @click="closeModal()"
        />
      </div>

    </UModal>
  </UPage>
</template>
