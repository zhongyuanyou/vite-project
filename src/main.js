import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index'
import http from './unit/http'
import api from './unit/api'

const app = createApp(App)
app.config.globalProperties.$http = http
app.config.globalProperties.$api = api
// app.use(http)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
