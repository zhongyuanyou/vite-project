import { createRouter, createWebHistory } from 'vue-router'
// 开启历史模式
// vue2中使用的mode：history 实现
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('../pages/main.vue'),
    },
  ],
})
export default router
