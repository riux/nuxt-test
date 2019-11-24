export const state = () => ({
  alert: {
    type: '',
    message: 'Hola desde index',
    time: 0
  },
  user: null
})
export const mutations = {
  setState(state, { name, value }){
    state[name] = value
  },
  showAlert(state, { type, message, time }){
    state.alert.type = type
    state.alert.message = message
    state.alert.time = time
  },
  clearAlert(state){
    state.alert.type = ''
    state.alert.message = ''
    state.alert.time = 0
  }
}
export const actions = {
  showAlert({ commit }, { type, message, time }){
    commit('showAlert', { type, message, time })
    setTimeout(() => {
      commit('clearAlert')
    }, alert.time)
  }
}
export const getters = {

}
