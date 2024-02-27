import appConfig from "./config/app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: appConfig.appTitle,
      meta: [
        { name: "description", content: appConfig.appDescription },
        { name: "keywords", content: appConfig.appKeyword },
        { name: "google-site-verification", content: appConfig.googleSiteId },
      ],
      link: [
        { rel: "icon", href: "/img/profile-circle.webp", type: "image/webp" },
      ],
      script: [
        {
          defer: "true",
          src: "https://analytics.us.umami.is/script.js",
          "data-website-id": appConfig.umamiSiteId,
        },
      ],
      bodyAttrs: { class: "bg-stone-100 dark:bg-slate-900" },
      htmlAttrs: { lang: "en" },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    // keep sitemap in latest order
    "@nuxtjs/sitemap",
  ],
  image: {
    provider: "netlify",
  },
  googleFonts: {
    families: {
      "Plus Jakarta Sans": [200, 300, 400, 500, 600, 700, 800],
    },
    display: "swap",
  },
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
});
