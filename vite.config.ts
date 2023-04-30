import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint' // 支持eslint支持
import vueJsx from '@vitejs/plugin-vue-jsx' // 增加vue3的jsx功能

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint(), // new
    vueJsx({})
  ]
})
