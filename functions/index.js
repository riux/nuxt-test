const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const { Nuxt } = require('nuxt')

admin.initializeApp(functions.config().firebase)
const app = express()
const config = {
  dev: false
}

const db = admin.firestore()

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
    return isReady
  })
  .catch(() => {
    process.exit(1)
  })

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.setHeader('Cache-Control', 'private')
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  await nuxt.render(req, res)
}

async function creteUser(user) {
  try {
    const ref = db.collection('users').doc(user.uid)
    await ref.set({ email: user.email })
  } catch (error) {
    console.log('Error creteUser: ', error)
  }
}

app.get('*', handleRequest)

exports.nuxtRedir = functions.https.onRequest(app)
exports.createUser = functions.auth.user().onCreate(creteUser)
