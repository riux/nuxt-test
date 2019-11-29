import { removeByIndex } from '~/assets/js/util.js'
export const state = () => ({
  products: [],
  adminProducts: [],
  product: {},
  categories: []
})

export const mutations = {
  setState(state, { name, value }){
    state[name] = value
  },
  addState(state, { name, value }){
    state[name].push(value)
  },
  updateByIndex(state, { name, index, value }) {
    Object.assign(state[name][index], value)
  },
  removeByIndex(state, { name, index }) {
    removeByIndex(state[name], index)
  }

}

export const actions = {

}
