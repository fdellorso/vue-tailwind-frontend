import { useAuthStore } from '@/stores/auth.js'

export default (to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next({ name: 'Login' })
  } else if (to.meta.isGuest && auth.isLoggedIn) {
    next({ name: 'Dashboard' })
    // } else if (to.meta.requiresAuth && auth.isLoggedIn && !auth.isEmailVerified) {
    //   next({ name: 'VerifyEmail' })
  } else {
    next()
  }
}
