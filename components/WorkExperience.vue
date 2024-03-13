<script setup lang="ts">
import experiences from '~/config/experience';

defineProps<{
  max?: number,
  moreLink?: string,
}>()
const { formatMiniDate, formatRange } = useDayjs()
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 relative">
      <div
        class="absolute border-l dark:border-indigo-200 border-indigo-700 border-opacity-20 left-5 top-8 bottom-8 -z-50">
      </div>
      <div v-for="exp in experiences.slice(0, max)" :key="exp.id" class="flex items-start gap-3">
        <NuxtImg :src="exp.companyImage[0]"
          class="w-10 h-10 object-cover rounded-full shadow-md shadow-indigo-200 dark:shadow-indigo-700 hover:shadow-lg" />
        <div>
          <p class="font-bold">{{ exp.title }}</p>
          <p class="text-sm">{{ exp.companyName }}</p>
          <p class="text-xs font-thin tracking-wider">
            {{ formatMiniDate(exp.startAt) }} - {{ exp.finishAt ? formatMiniDate(exp.finishAt) :
        'now' }} ({{ formatRange(exp.startAt, exp.finishAt) }})
          </p>
        </div>
      </div>
    </div>
    <NuxtLink :to="moreLink" v-if="moreLink">
      More...
    </NuxtLink>
  </div>
</template>