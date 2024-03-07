<script setup lang="ts">
import appConfig from '@/config/app'

useSeoMeta({
  description: appConfig.appDescription,
  ogType: 'website',
  ogUrl: window.location.href,
  ogImage: "https://alft.dev/img/og.png",
  ogTitle: appConfig.appTitle,
  ogDescription: appConfig.appDescription,
  twitterImage: "https://alft.dev/img/og.png",
  twitterTitle: appConfig.appTitle,
  twitterDescription: appConfig.appDescription,
  twitterCard: 'summary_large_image',
  twitterCreator: '@alfattarezqa'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>