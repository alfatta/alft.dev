<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

defineProps<{
  article: ParsedContent
}>()
const { formatDate } = useDayjs()
</script>

<template>
  <NuxtLink :to="article._path"
    class="flex border border-slate-500 rounded-lg overflow-hidden hover:bg-slate-50 dark:hover:bg-slate-800">
    <NuxtImg :src="article.image" class="w-48 object-cover max-w-[40%]" />
    <div class="flex-1 p-4 flex flex-col justify-between">
      <p class="mb-4 text-base md:text-2xl h-[4.5rem] md:h-24 line-clamp-3">{{ article.title }}</p>
      <div class="flex items-center space-x-2">
        <NuxtImg src="/img/profile-circle.webp" class="w-10 h-10 rounded-full" />
        <div>
          <p class="text-sm">Alfatta Rezqa</p>
          <p class="text-xs">{{ formatDate(article.date) }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>