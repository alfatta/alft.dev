<template>
  <nav
    class="fixed top-0 z-50 flex items-center justify-between w-full px-10 py-2 border-b bg-zinc-100 border-zinc-300 dark:bg-slate-900 dark:border-slate-800">
    <AppBrand />
    <div class="flex items-center space-x-4">
      <NuxtLink to="/articles">Articles</NuxtLink>
      <ColorMode />
    </div>
  </nav>
</template>