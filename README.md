# Blog system, using nuxjs 2 and firebase

I share this blog system using the technologies of nuxjs (vuejs, vuex) and firebase (cloud functions, firestore, storage, auth), which are part of the transmissions that are made on the facebook page
<a href="https://www.facebook.com/Rem-Mend-432138587624895/" target="_blank">Rem-Mend</a>

## Requirements

this project requires to have a project configured in <a href="https://console.firebase.google.com/" target="_blank">firebase console</a>, <a href="https://firebase.google.com/docs/cli" target="_blank">cli firebase tools</a> and <a href="https://cli.vuejs.org/" target="_blank">vue cli</a>

```bash
$ firebase init

? Which Firebase CLI features do you want to set up for this folder? Press Space
 to select features, then Enter to confirm your choices.
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◉ Firestore: Deploy rules and create indexes for Firestore
 ◉ Functions: Configure and deploy Cloud Functions
 ◉ Hosting: Configure and deploy Firebase Hosting sites
 ◉ Storage: Deploy Cloud Storage security rules
❯◉ Emulators: Set up local emulators for Firebase features.

? Please select an option: (Use arrow keys)
❯ Use an existing project
  Create a new project
  Add Firebase to an existing Google Cloud Platform project
  Dont set up a default project -->select Project

? What file should be used for Firestore Rules? (firestore.rules) --> [enter]

? File firestore.rules already exists. Do you want to overwrite it with the Fire
store Rules from the Firebase Console? (y/N) --> [enter]

? What file should be used for Firestore indexes? (firestore.indexes.json) -->[enter]

? File firestore.indexes.json already exists. Do you want to overwrite it with t
he Firestore Indexes from the Firebase Console? (y/N) -->[enter]

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? (Use arrow keys)

❯ JavaScript -->[enter]
  TypeScript

? Do you want to use ESLint to catch probable bugs and enforce style? (y/N) -->[enter]

? Do you want to install dependencies with npm now? (Y/n) n -->[enter]

? File functions/package.json already exists. Overwrite? (y/N) -->[enter]

? File functions/index.js already exists. Overwrite? (y/N) -->[enter]

? File functions/.gitignore already exists. Overwrite? (y/N) -->[enter]

? Do you want to install dependencies with npm now? (Y/n) n -->[enter]

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your builds output directory.

? What do you want to use as your public directory? (public) --> [enter]

? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) -->[enter]

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? (storage.rules) -->[enter]

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulator
s, then Enter to confirm your choices. (Press <space> to select, <a> to toggle a
ll, <i> to invert selection)
❯◉ Functions
 ◉ Firestore
 ◯ Database
 ◉ Hosting
 ◯ Pubsub
 -->[enter]
 ? Which port do you want to use for the functions emulator? (5001) -->[enter]

 ? Which port do you want to use for the firestore emulator? 8080 -->[enter]

 ? Which port do you want to use for the hosting emulator? 5000 -->[enter]

 ? Would you like to download the emulators now? N -->[enter]
 finish config firebase
```

at the end of the configuration edit the file firebase.json and add in the hosting section

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
