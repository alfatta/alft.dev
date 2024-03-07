<script setup lang="ts">
const colorMode = useColorMode()

const toggle = () => {
  colorMode.preference = colorMode.value == 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button @click="toggle" to="#" aria-label="Toggle color mode"
    class="p-2 hover:text-indigo-600 border-neutral-950 dark:border-stone-100 hover:dark:text-indigo-400">
    <Icon name="material-symbols:light-mode-outline" class="w-6 h-6 !hidden dark:!block" />
    <Icon name="material-symbols:dark-mode-outline" class="w-6 h-6 !block dark:!hidden" />
  </button>
</template>