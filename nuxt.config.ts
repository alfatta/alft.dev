import appConfig from "./config/app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: appConfig.appTitle,
      meta: [
        { name: "description", content: appConfig.appDescription },
        { name: "keywords", content: appConfig.appKeyword },
      ],
      link: [
        { rel: "icon", href: "/img/profile-circle.webp", type: "image/webp" },
      ],
      script: [
        {
          defer: "true",
          src: "https://analytics.us.umami.is/script.js",
          "data-website-id": "180c0c1d-ef9f-4955-955a-3af09b2bcbcd",
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
