import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [
      vuePlugin(),
      VueI18nPlugin({
        include: [path.resolve(__dirname, './src/locales/**')],
        ssr: isSsrBuild ?? false,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    ssr: {
      noExternal: ['vue-i18n'],
    },
  }
})
