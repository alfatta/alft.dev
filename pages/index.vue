<template>
  <div class="py-10 md:py-32 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
    <div class="flex-1 flex flex-col items-center md:items-start">
      <p class="text-2xl md:text-6xl tracking-wider mb-4 md:mb-8 max-md:text-center">Hi I'm</p>
      <h1 class="text-6xl md:text-8xl tracking-tight font-semibold mb-6 md:mb-12 max-md:text-center">
        <span>Alfatta </span>
        <span class="text-indigo-600 dark:text-indigo-400">Rezqa</span>
      </h1>
      <p class="text-base md:text-xl tracking-wide mb-12 max-md:text-center">
        <span class="font-bold">Highly motivated</span> software developer with
        <span class="font-bold">>6 years of experience</span> in designing and
        implementing software solutions. Dedicated to building
        <span class="font-bold">high-quality software</span> that
        <span class="font-bold">exceeds expectations</span>.
      </p>
      <button type="button"
        class="text-xl text-indigo-50 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg px-8 py-4 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
        Hire Me
      </button>
    </div>
    <NuxtImg src="/img/profile-3-4.webp"
      class="w-24 md:w-72 object-cover aspect-[3/4] rounded-2xl -rotate-3 md:rotate-3 shadow-lg shadow-indigo-600"
      alt="Alfatta Rezqa" />
  </div>
  <!-- <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-8"></div>
    <div class="col-span-12 md:col-span-4">
      <h3 class="font-bold text-xl mb-4">Work Experience</h3>
      <WorkExperience :max="3" class="mb-8" more-link="/about" />
      <h3 class="font-bold text-xl mb-4">Education</h3>
      <Education :max="3" class="mb-8" more-link="/about" />
    </div>
  </div> -->
</template>