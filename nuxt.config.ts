// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    components: true,
    pages: true,
    ssr: true,
    modules: ["@nuxt/ui", "nuxt-lazy-load", "@nuxt/icon", "nuxt-swiper"],
    css: ["~/assets/css/main.css"],
    lazyLoad: {
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        directiveOnly: false,
        loadingClass: "isLoading",
        loadedClass: "isLoaded",
        appendClass: "lazyLoad",

        observerConfig: {},
    },
    vite: {
        plugins: [tailwindcss()],
    },
});