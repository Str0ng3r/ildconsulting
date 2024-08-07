export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/styles/main.scss';"
        }
      }
    }
  },

  imports: {
    dirs: ['types/constants'],
    presets: [
      {
        from: 'vue',
        imports: ['withDefaults', 'defineProps', 'defineEmits']
      },
      {
        from: 'date-fns',
        imports: ['format']
      },
      {
        from: '@splinetool/runtime',
        imports: ['Application']
      }
    ]
  },
  modules: [
    'nuxt-icons'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/Favicon.ico'
        }
      ]
    }
  },

  compatibilityDate: '2024-07-16',
});