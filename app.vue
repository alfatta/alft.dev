<script setup lang="ts">
import appConfig from '@/config/app'

useSeoMeta({
  description: appConfig.appDescription,
  ogType: 'website',
  ogUrl: 'https://alft.dev',
  ogImage: "https://alft.dev/img/og.png",
  ogImageAlt: appConfig.appTitle,
  ogTitle: appConfig.appTitle,
  ogDescription: appConfig.appDescription,
  twitterImage: "https://alft.dev/img/og.png",
  twitterImageAlt: appConfig.appTitle,
  twitterTitle: appConfig.appTitle,
  twitterDescription: appConfig.appDescription,
  twitterCard: 'summary_large_image',
  twitterSite: '@alfattarezqa',
  twitterCreator: '@alfattarezqa'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>