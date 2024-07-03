// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        title: 'DevPora - Cookie',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'Developer Support Hub: Enhance Your Nuxt Projects with Cookies, Analytics, and Clarity'
            },
        ],
    },
    devtools: {enabled: false},
    extends: ['@nuxt/ui-pro'],
    modules: ["@nuxt/ui", "@nuxt/icon"],
    ui: {
        icons: ['simple-icons'],
    },
    runtimeConfig: {
        public: {
            ID_GOOGLE_ANALYTICS: process.env.ID_GOOGLE_ANALYTICS || '',
            ID_GOOGLE_TAG: process.env.ID_GOOGLE_TAG || '',
            ID_MS_CLARITY: process.env.ID_MS_CLARITY || '',
        }
    }
})
