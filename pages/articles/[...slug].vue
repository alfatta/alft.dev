<script setup lang="ts">
const { params } = useRoute()
const { data } = await useAsyncData('article', () => queryContent('articles', params.slug[0]).findOne())
const { formatDate } = useDayjs()
</script>

<template>
  <ContentRenderer :value="data" v-if="data">
    <NuxtImg :src="data.image" class="mb-10" />
    <h2 class="mb-6 md:mb-12 text-4xl md:text-6xl tracking-tight">{{ data.title }}</h2>
    <div class="mb-6 md:mb-12 text-base md:text-xl flex items-center space-x-4">
      <NuxtImg src="/img/profile-circle.webp" class="w-10 h-10 md:w-14 md:h-14 rounded-full" />
      <div>
        <NuxtLink to="/">
          Alfatta Rezqa
        </NuxtLink>
        <p class="text-sm text-slate-600 dark:text-slate-300">{{ formatDate(data.date) }}</p>
      </div>
    </div>
    <ContentRendererMarkdown :value="data"
      class="article space-y-4 md:space-y-8 text-lg text-slate-600 dark:text-slate-300 font-light md:text-xl" />
  </ContentRenderer>
</template>

<style>
.article * {
  @apply text-wrap break-words;
}

.article code {
  @apply block p-4 bg-slate-100 dark:bg-slate-950 rounded-lg border border-slate-700 text-sm;
}

.article img {
  @apply max-w-full mx-auto my-4 rounded-lg shadow-lg;
}
</style>