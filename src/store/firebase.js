import Cookie from 'js-cookie'

export const state = () => ({
})
export const mutations = {

}
export const actions = {

  /**
   * Set data to firestore
   *
   * @param      {Object}    arg1             The argument 1
   * @param      {<type>}    arg1.state       The state
   * @param      {Object}    arg2             The argument 2
   * @param      {Function}  arg2.collection  The collection
   * @param      {Function}  arg2.doc         The document
   * @param      {<type>}    arg2.data        The data
   * @return      {Promise}   { description_of_the_return_value }
   */
  async fireSet({ state }, { collection, doc, data }) {
    const docRef = this.$firebase.firestore().collection(collection).doc(doc)
    await docRef.set(data)
  },

  /**
   * { function_description }
   *
   * @param      {Object}    arg1             The argument 1
   * @param      {<type>}    arg1.state       The state
   * @param      {Object}    arg2             The argument 2
   * @param      {Function}  arg2.collection  The collection
   * @param      {<type>}    arg2.data        The data
   * @return     {Promise}   { description_of_the_return_value }
   */
  async fireAdd({ state }, { collection, data }) {
    const docRef = this.$firebase.firestore().collection(collection)
    const resp = await docRef.add(data)
    return resp
  },

  async fireLogin({ dispatch }, { singInWith, account }) {
    let resp
    if (_.isEmpty(account)) {
      const provider = new this.$firebase.auth[singInWith]()
      resp = await this.$firebase.auth().signInWithPopup(provider)
    } else {
      resp = await this.$firebase.auth()[singInWith](account.email, account.password)
    }
    const token = await resp.user.getIdToken()
    Cookie.set('__session', token)
    return { email: resp.user.email, uid: resp.user.uid }
  },

  async createUser({ dispatch }, account){
    await this.$firebase.auth().createUserWithEmailAndPassword(account.email, account.password)
    const token = await this.$firebase.auth().currentUser.getIdToken()
    const { email, uid } = await this.$firebase.auth().currentUser
    return { email, uid, token }
  },
  async logout(){
    await this.$firebase.auth().signOut()
    Cookie.remove('__session')
  }

}
export const getters = {

}
