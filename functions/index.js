const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const { Nuxt } = require('nuxt')

admin.initializeApp(functions.config().firebase)
const app = express()
const config = {
  dev: false
}

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

async function handleRequest (req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.setHeader('Cache-Control', 'private')
  res.set('Cache-Control', 'public, max-age=1, s-maxage=1')
  await nuxt.render(req, res)
}

app.get('*', handleRequest)

exports.nuxtRedir = functions.https.onRequest(app)
