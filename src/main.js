import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { createRouter } from './router'
import messages from '@intlify/unplugin-vue-i18n/messages'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.use(pinia)
  const router = createRouter()
  app.use(router)

  const i18n = createI18n({
    locale: 'en',
    messages,
    legacy: false,
    globalInjection: false,
  })
  app.use(i18n)

  return { app, router }
}
