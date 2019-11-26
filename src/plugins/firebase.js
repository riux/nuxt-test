import firebase from '@firebase/app'
import '@firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.keyFb,
    authDomain: process.env.authDomainFirebase,
    databaseURL: process.env.dbUrlFb,
    projectId: process.env.projectIdFb,
    storageBucket: process.env.storageFb,
    messagingSenderId: process.env.messajeSendFb,
    appId: process.env.appIdFb
  }
  firebase.initializeApp(config)
}
export default ({ app }, inject) => {
  inject('firebase', firebase)
}
