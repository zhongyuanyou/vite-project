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
    {
      path: '/button',
      component: () => import('../pages/button/index.vue'),
    },
    {
      path: '/3dButton',
      component: () => import('../pages/button/3dButton.vue'),
    },
    {
      path: '/canvas',
      component: () => import('../pages/canvas/index.vue'),
    },
    {
      path: '/prizeDraw',
      component: () => import('../pages/prizeDraw/index.vue'),
    },
  ],
})
export default router
