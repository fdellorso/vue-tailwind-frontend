import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Dashboard from '../views/Dashboard.vue'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
// import AuthLayout from '../components/AuthLayout.vue'
import Login from '../components/complex/Login.vue'
import Registration from '../components/complex/Registration.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/landing',
    meta: { requiresAuth: false }
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
    meta: { requiresAuth: false }
  },
  {
    path: '/control',
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [{ path: '/dashboard', name: 'Dashboard', component: Dashboard }]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { isGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration,
    meta: { isGuest: true }
  }
  // {
  //   path: '/auth',
  //   redirect: '/login',
  //   name: 'Auth',
  //   // component: AuthLayout,
  //   meta: { isGuest: true },
  //   children: [
  //     {
  //       path: '/login',
  //       name: 'Login',
  //       component: Login
  //     },
  //     {
  //       path: '/register',
  //       name: 'Register',
  //       component: Registration
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else if (
    store.state.user.token &&
    // (to.name === 'Login' || to.name === 'Register')
    to.meta.isGuest
  ) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
