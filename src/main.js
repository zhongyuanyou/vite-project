import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index'
import http from './unit/http'
import api from './unit/api'
import * as THREE from 'three'
import * as echarts from 'echarts'
const stores = store.store
const app = createApp(App)
app.config.globalProperties.$http = http
app.config.globalProperties.$api = api
app.config.globalProperties.$store = stores
app.config.globalProperties.$THREE = THREE
app.config.globalProperties.$echarts = echarts
// app.use(http)
// app.use(echarts)
app.use(router)
app.use(stores)
app.use(ElementPlus)
app.mount('#app')
