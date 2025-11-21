import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/'
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: ['shadcn-nuxt','@nuxt/content'],
  css: ['./app/assets/css/tailwind.css'],
  vite: {plugins: [tailwindcss(),],},
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
})
