import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Home.vue')
  },
  // {
  //   path: '/app:pathPatch(.*)',
  //   component: () => import('@/components/Layout.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => h('h1', 404)
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
