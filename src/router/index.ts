import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import reconsitution from './reconsitution'
import layout from '@/layout/index.vue'

import { homePage } from './module/home'
import { users } from './module/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/index',
		children: [
            homePage,
            users
		//   test
		]
  }
]

export const editRouter = reconsitution(routes)


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
