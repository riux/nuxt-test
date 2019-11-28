# Blog system, using nuxjs 2 and firebase

I share this blog system using the technologies of nuxjs (vuejs, vuex) and firebase (cloud functions, firestore, storage, auth), which are part of the transmissions that are made on the facebook page
<a href="https://www.facebook.com/Rem-Mend-432138587624895/" target="_blank">Rem-Mend</a>

## Requirements

this project requires nodejs and to have a project configured in <a href="https://console.firebase.google.com/" target="_blank">firebase console</a>, <a href="https://firebase.google.com/docs/cli" target="_blank">cli firebase tools</a> and <a href="https://cli.vuejs.org/" target="_blank">vue cli</a>.
In firebase console enable the authentication methods of google, facebook and mail

## Build Setup

Clone this project

```bash
# move to dir project
$ cd nuxt-test

# config project with firebase
$ firebase init
```

select (firestore, functions, hosting, storage and emulatos),
and not overwrite the files (firestore.rules, firestore.indexes.json, storage.rules ).

At the end of the configuration edit the file firebase.json and add in the hosting section

```json
...
"hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "nuxtRedir"
      }
    ]
  },
  ...
```
Create or edit the .env file with the credentials of your project created in firebase

```bash

# .env file set your config firebase

KEY_API_FIREBASE='your-apiKey'
AUTH_DOMAIN_FIREBASE='your-authDomain'
DATABASE_URL_FIREBASE='your-databaseURL'
PROJECT_ID_FIREBASE='your-projectId'
STORAGE_BUCKET_FIREBASE='your-storageBucket'
MESSAGIN_SENDER_ID_FIREBASE='your-messagingSenderId'
APPI_ID_FIREBASE='your-appId'

# install dependencies in root and functions/ dir
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# build for production (firebase hosting) and launch firebase server
$ yarn build:serve

# build for production (firebase hosting) and deploy firebase hosting
$ yarn build:deploy

# delete node_modules and yarn.lock, from root and funtions dir
$ yarn rm

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
