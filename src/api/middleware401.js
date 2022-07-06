import { useAuthStore } from '@/stores/auth.js'
/**
 * Middleware - if user lost authentication (401) it gets kicked out
 * FROM https://youtu.be/BWNcuB3LQz8?t=1119
 */
const middleware401 = async (error) => {
  const { status } = error.request

  if (status === 401) {
    const auth = useAuthStore()
    setTimeout(async () => await auth.logout(), 3000)
    return Promise.reject({
      name: 'Permission denied',
      message:
        error.response.data.message + ' - will be redirected to login page.'
    })
  }

  if (status === 409) {
    // const auth = useAuthStore()
    // setTimeout(async () => await auth.logout(), 3000)
    return Promise.reject({
      name: 'Permission denied',
      message: error.response.data.message
    })
  }

  if (status === 419) {
    const auth = useAuthStore()
    setTimeout(async () => await auth.logout(), 3000)
    return Promise.reject({
      name: 'Permission denied',
      message: 'Your email is not verified - will be redirected to login page.'
    })
  }

  if (status === 422) {
    // const auth = useAuthStore()
    // setTimeout(async () => await auth.logout(), 3000)
    return Promise.reject({
      name: 'Permission denied',
      message: error.response.data.message
    })
  }

  return Promise.reject(error)
}

export { middleware401 as default }
