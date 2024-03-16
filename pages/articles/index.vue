<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', () => queryContent('articles').sort({ date: -1 }).limit(5).find())
</script>

<template>
  <main class="grid md:grid-cols-2 gap-4">
    <Article v-for="article in articles" :key="article._id" :article="article" />
  </main>
</template>