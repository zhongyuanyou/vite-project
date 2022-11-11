import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
