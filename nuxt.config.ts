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
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://alft.dev" },
        { name: "og:image", content: "https://alft.dev/img/og.png" },
        { name: "og:image:alt", content: appConfig.appTitle },
        { name: "og:title", content: appConfig.appTitle },
        { name: "og:description", content: appConfig.appDescription },
        { name: "twitter:image", content: "https://alft.dev/img/og.png" },
        { name: "twitter:image:alt", content: appConfig.appTitle },
        { name: "twitter:title", content: appConfig.appTitle },
        { name: "twitter:description", content: appConfig.appDescription },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@alfattarezqa" },
        { name: "twitter:creator", content: "@alfattarezqa" },
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
      htmlAttrs: { lang: "en" },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "nuxt-icon",
    // keep sitemap in latest order
    "@nuxtjs/sitemap",
  ],
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
