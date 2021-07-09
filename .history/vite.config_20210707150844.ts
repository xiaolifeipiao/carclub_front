import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';


//路径处理模块
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  //定义别名
  alias: {
    "@": path.resolve(__dirname, "src"),
    coms: path.resolve(__dirname, "src/components"),
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


