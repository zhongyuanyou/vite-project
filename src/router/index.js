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
    {
      path: '/dialog',
      component: () => import('../pages/dialog/index.vue'),
    },
    {
      path: '/glassWrapper',
      component: () => import('../pages/glassWrapper/index.vue'),
    },
    {
      path: '/three',
      component: () => import('../pages/three/index.vue'),
    },
    {
      path: '/echarts',
      component: () => import('../pages/echarts/index.vue'),
    },
    {
      path: '/testVue',
      component: () => import('../pages/testVue/index.vue'),
    },
    {
      path: '/tsTest',
      component: () => import('../pages/tsTest/index.vue'),
    },
    {
      path: '/promise',
      component: () => import('../pages/promise/index.vue'),
    },
  ],
})
export default router
