import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const config = loadEnv(mode, './')
  return {
    define: {
      'process.env': {},
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
      },
    },
    // 打包配置
    build: {
      target: 'modules',
      outDir: 'dist', //指定输出路径
      assetsDir: 'static', // 指定生成静态资源的存放路径
    },
    // 本地运行配置，及反向代理配置
    server: {
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      proxy: {
        '/api': {
          target: config.VITE_BASIC_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/assets/style/global.less";',
        },
      },
    },
  }
})
