<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <NuxtLayout>
    <div class="py-20">
      <p class="text-6xl md:text-9xl font-bold mb-4">
        {{ error.statusCode }}
      </p>
      <p class="text-2xl md:text-6xl font-light mb-8">
        {{ error.statusMessage }}
      </p>
      <NuxtLink to="/">← Back to home</NuxtLink>
    </div>
  </NuxtLayout>
</template>