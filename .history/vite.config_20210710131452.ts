import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';

//路径处理模块
import path from "path";
const Resolve = (name:any) => path.resolve(__dirname, name);
// https://vitejs.dev/config/
export default defineConfig({
  //定义别名
  resolve: {
    alias: [
      {find:'@',replacement:Resolve('src')},
      {find:'@coms',replacement:Resolve('src/components')}
    ]
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    },
    proxy: {
         // 字符串简写写法
      // '/user': 'http://localhost:4567/foo',
      '/api': {
        target: import.meta.env.VITE_APP_BASE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
    },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ]
})


