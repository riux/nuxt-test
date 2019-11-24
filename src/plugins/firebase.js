import firebase from '@firebase/app'
import '@firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAXbklsvK35ExFgHvj05PNr4fBVpGG9Yc4',
    authDomain: 'nuxt-test-bdc67.firebaseapp.com',
    databaseURL: 'https://nuxt-test-bdc67.firebaseio.com',
    projectId: 'nuxt-test-bdc67',
    storageBucket: 'nuxt-test-bdc67.appspot.com',
    messagingSenderId: '1030205196183',
    appId: '1:1030205196183:web:14678b3085f67cd080e6d2'
  }
  firebase.initializeApp(config)
}
export default ({ app }, inject) => {
  inject('firebase', firebase)
}
