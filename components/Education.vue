<script setup lang="ts">
import education from '~/config/education';

defineProps<{
  max?: number,
  moreLink?: string,
}>()
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 relative">
      <div
        class="absolute border-l dark:border-indigo-200 border-indigo-700 border-opacity-20 left-5 top-8 bottom-8 -z-50">
      </div>
      <div v-for="edu in education.slice(0, max)" :key="edu.id" class="flex items-start gap-3">
        <NuxtImg :src="edu.image"
          class="w-10 h-10 object-cover rounded-full shadow-md shadow-indigo-200 dark:shadow-indigo-700 hover:shadow-lg" />
        <div>
          <p class="font-bold">{{ edu.college }}</p>
          <p class="text-sm">{{ edu.title }}</p>
          <p class="text-xs font-thin tracking-wider">
            {{ edu.startAt }} - {{ edu.finishAt ? edu.finishAt : 'now' }}
          </p>
        </div>
      </div>
    </div>
    <NuxtLink :to="moreLink" v-if="moreLink">
      More...
    </NuxtLink>
  </div>
</template>