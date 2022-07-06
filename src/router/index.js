import { createRouter, createWebHistory } from 'vue-router'
import authMiddleware from './middleware/auth-middleware'

import DashboardLayout from '@/components/DashboardLayout.vue'
import AuthLayout from '@/components/AuthLayout.vue'

import Landing from '@/views/Landing.vue'
import Dashboard from '@/views/Dashboard.vue'
import Gallery from '@/views/Gallery.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import VerifyEmail from '@/views/VerifyEmail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing,
    alias: '/home',
    meta: { requiresAuth: false }
  },
  {
    path: '/auth',
    name: 'AuthParent',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { isGuest: true }
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { isGuest: true }
      },
      {
        path: '/verify',
        name: 'VerifyEmail',
        component: VerifyEmail,
        meta: { isGuest: true }
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'DashboardParent',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(authMiddleware)

export default router
