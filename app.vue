<script setup lang="ts">
import appConfig from '@/config/app'

useSeoMeta({
  description: appConfig.appDescription,
  ogImage: "/img/og.png",
  ogTitle: appConfig.appTitle,
  ogDescription: appConfig.appDescription,
  twitterImage: "/img/og.png",
  twitterTitle: appConfig.appTitle,
  twitterDescription: appConfig.appDescription,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>