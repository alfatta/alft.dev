<template>
  <div class="font-sans text-slate-900 dark:text-slate-100">
    <AppNavbar />
    <main class="max-w-6xl px-5 pt-20 mx-auto mb-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>