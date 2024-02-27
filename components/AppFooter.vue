<script setup lang="ts">
const toTop = () => scrollTo(0, 0)
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-12 gap-8 p-4">
      <div class="col-span-12 space-y-4 md:col-span-6 md:order-first">
        <AppBrand />
        <p class="text-sm font-light">Connect with me via:</p>
        <div class="flex items-center space-x-4">
          <NuxtLink to="https://github.com/alfatta" target="_blank" aria-label="Alfatta's Github">
            <Icon name="fa6-brands:github" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="https://instagram.com/alfattarezqa" target="_blank" aria-label="Alfatta's Instagram">
            <Icon name="fa6-brands:instagram" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/in/alfattarezqa" target="_blank" aria-label="Alfatta's LinkedIn">
            <Icon name="fa6-brands:linkedin" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="https://x.com/alfattarezqa" target="_blank" aria-label="Alfatta's X">
            <Icon name="fa6-brands:x-twitter" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
      <div class="col-span-6 md:text-right md:col-span-3">
        <p class="mb-4 text-xs font-bold text-slate-500 dark:text-slate-400">About Me</p>
        <div class="flex flex-col space-y-2">
          <NuxtLink to="#" class="text-sm font-medium" aria-label="About">About</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Experience">Experience</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Contact">Contact</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Skills">Skills</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Portfolio">Portfolio</NuxtLink>
        </div>
      </div>
      <div class="col-span-6 md:text-right md:col-span-3">
        <p class="mb-4 text-xs font-bold text-slate-500 dark:text-slate-400">Links</p>
        <div class="flex flex-col space-y-2">
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Article">Article</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Weapon">Weapon</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium" aria-label="Logs">Logs</NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between p-4 border-t border-zinc-300 dark:border-slate-800">
      <p class="text-xs font-semibold">&copy; {{ new Date().getFullYear() }} Alfatta Rezqa. All right reserved</p>
      <button to="#" class="text-xs font-semibold" @click="toTop">
        Back to top ↑
      </button>
    </div>
  </div>
</template>
