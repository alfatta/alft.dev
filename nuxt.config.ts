// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:
        "Alfatta Rezqa - Developing High-Quality Software - More Than Just Code",
      meta: [
        {
          name: "description",
          content:
            "Highly motivated software developer with >6 years of experience in designing and implementing software solutions. Dedicated to building high-quality software that exceeds expectations.",
        },
        {
          name: "keywords",
          content:
            "software developer, software development, web development, app development",
        },
      ],
      link: [{ rel: "icon", href: "/img/profile-circle.webp" }],
      script: [
        // { defer: 'true', src: 'https://analytics.us.umami.is/script.js', 'data-website-id': '180c0c1d-ef9f-4955-955a-3af09b2bcbcd' }
      ],
      bodyAttrs: {
        class: "bg-stone-100 dark:bg-slate-900",
      },
    },
  },
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  googleFonts: {
    families: {
      "Plus Jakarta Sans": "300..700",
    },
    display: "swap",
  },
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
});
