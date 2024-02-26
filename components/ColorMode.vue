<script setup lang="ts">
const colorMode = useColorMode()

const toggle = () => {
  colorMode.preference = colorMode.value == 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button @click="toggle" to="#" aria-label="Toggle color mode"
    class="p-2 hover:text-indigo-600 border-neutral-950 dark:border-stone-100 hover:dark:text-indigo-400">
    <IconModeLight class="w-6 h-6 hidden dark:block" />
    <IconModeDark class="w-6 h-6 block dark:hidden" />
  </button>
</template>