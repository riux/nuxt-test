import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'

export const state = () => ({
  alert: {
    type: '',
    message: '',
    time: 0
  },
  user: null
})
export const mutations = {
  setState(state, { name, value }) {
    state[name] = value
  },
  showAlert(state, { type, message, time }) {
    state.alert.type = type
    state.alert.message = message
    state.alert.time = time
  },
  clearAlert(state) {
    state.alert.type = ''
    state.alert.message = ''
    state.alert.time = 0
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    try {
      if (process.server && process.static) {
        return false
      }
      if (!req.headers.cookie) {
        return false
      }
      const parsed = cookieparser.parse(req.headers.cookie)
      const accessTokenCookie = parsed.__session
      if (!accessTokenCookie) {
        return
      }
      const decoded = JWTDecode(accessTokenCookie)
      if (decoded) {
        commit('setState', {
          name: 'user',
          value: {
            uid: decoded.user_id,
            email: decoded.email
          }
        })
      }
    } catch (error) {
      console.log('error en nuxtServerInit: ', error)
    }
  },

  showAlert({ commit }, { type, message, time }) {
    commit('showAlert', { type, message, time })
    setTimeout(() => {
      commit('clearAlert')
    }, time)
  }
}
export const getters = {}
