import { defineStore } from 'pinia'
import router from '@/router'
import { useUserStore } from '@/stores/user.js'
import { useApi } from '@/api/useAPI'

export const useAuthStore = defineStore({
  id: 'auth',

  state: () =>
    JSON.parse(localStorage.getItem('AUTH_STATE')) ?? {
      email: null,
      isEmailVerified: false,
      isLoggedIn: false
    },

  actions: {
    async csrf() {
      const web = useApi('web')

      await web.get('/sanctum/csrf-cookie')
    },
    updateState(payload) {
      let newUserState = { ...this.$state, ...payload }
      localStorage.removeItem('AUTH_STATE')
      localStorage.setItem('AUTH_STATE', JSON.stringify(newUserState))
      this.$reset()
    },
    async login({ email, password }) {
      const web = useApi('web')
      const user = useUserStore()

      let err

      try {
        await this.csrf()
        await web.post('/login', { email, password })
        await user.storeInfo()
        if (user.email_verified_at) {
          this.updateState({ email, isEmailVerified: true, isLoggedIn: true })
        } else {
          this.updateState({ email, isEmailVerified: false, isLoggedIn: true })
        }
      } catch (error) {
        console.log('Error at login: ', error.message)
        err = error
        throw error
      } finally {
        if (err) {
          return err
        }
      }
    },
    async register(props) {
      const web = useApi('web')
      const user = useUserStore()

      try {
        await this.csrf()
        await web.post('/register', props)
        await user.storeInfo()
        if (user.email_verified_at) {
          this.updateState({ email, isEmailVerified: true, isLoggedIn: true })
        } else {
          this.updateState({ email, isEmailVerified: false, isLoggedIn: true })
        }
      } catch (error) {
        console.log('Error at register: ', error.message)
        throw error
      }
    },
    async forgotPassword({ email }) {
      const web = useApi('web')

      try {
        await this.csrf()
        await web.post('/forgot-password', { email })
      } catch (error) {
        console.log('ERROR WITH FORGOT-PASSWORD ENDPOINT: ', error.message)
        throw error
      }
    },
    async logout() {
      const web = useApi('web')
      const user = useUserStore()

      localStorage.clear() // always clean localStorage before reset the state
      this.$reset()
      user.$reset()

      try {
        await this.csrf()
        await web.post('/logout')
        await router.push({ name: 'Home' })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
