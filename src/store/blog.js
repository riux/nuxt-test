export const state = () => ({
  blog: '',
  listas: {}
})
export const mutations = {
  setState(state, { name, data }) {
    state[name] = data
  }
}
export const actions = {
}
export const getters = {

}
