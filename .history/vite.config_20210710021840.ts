import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';


//路径处理模块
import path from "path";
const Resolve = name => path.resolve(__dirname, name);
// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   'process.env': {}
  // },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    },
    host: "127.0.0.1",//指定服务器主机名
    port: 3000,//设置端口
    proxy: {
      '/user': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, '')
      },
    }
    },
  //定义别名
  resolve: {
    alias: [
      {find:'@',replacement:Resolve('./src')},
			{find:'@utils',replacement:Resolve('./src/utils')},
      {find:'@coms',replacement:Resolve('./src/components')}
    ]
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


