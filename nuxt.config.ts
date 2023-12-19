// nuxt.config.js

import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
        // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css' }
      ]
    }
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    'usebootstrap'
  ],
  css: [
    "bootstrap/scss/bootstrap.scss"
  ]
});
