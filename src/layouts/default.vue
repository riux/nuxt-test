<template>
  <v-app dark>
    <NavDrawer
      :open="openIn"
      @close="openIn = false"
    />
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="openIn = !openIn" />
      <v-btn
        @click.stop="miniVariant = !miniVariant"
        icon
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        @click.stop="clipped = !clipped"
        icon
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        @click.stop="fixed = !fixed"
        icon
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <UserBtn @userData="userOpen = !userOpen" />
      <Login></Login>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <UserDrawer
      :open="userOpen"
      @close="userOpen = false"
    />
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/NavDrawer.vue'
import UserDrawer from '~/components/UserDrawer.vue'
import UserBtn from '~/components/UserBtn.vue'
import Login from '~/components/Login.vue'

export default {
  components: {
    NavDrawer,
    UserDrawer,
    UserBtn,
    Login
  },
  data() {
    return {
      drawer: false,
      clipped: false,
      openIn: false,
      userOpen: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {

  }
}
</script>
