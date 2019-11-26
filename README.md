# Blog system, using nuxjs 2 and firebase

I share this blog system using the technologies of nuxjs (vuejs, vuex) and firebase (cloud functions, firestore, storage, auth), which are part of the transmissions that are made on the facebook page
<a href="https://www.facebook.com/Rem-Mend-432138587624895/" target="_blank">Rem-Mend</a>

## Requirements

this project requires to have a project configured in <a href="https://console.firebase.google.com/" target="_blank">firebase console</a>, <a href="https://firebase.google.com/docs/cli" target="_blank">cli firebase tools</a> and <a href="https://cli.vuejs.org/" target="_blank">vue cli</a>

```bash
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

in firebase console enable the authentication methods of google, facebook and mail

## Build Setup

```bash
# install dependencies
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
