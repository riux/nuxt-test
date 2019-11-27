<template>
  <v-navigation-drawer
    v-model="openIn"
    :right="true"
    @input="input"
    temporary
    fixed
  >
    <v-list>
      <v-list-item @click.native="logout">
        <v-list-item-action>
          <v-icon light>
            mdi-repeat
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>SALIR</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    open: { type: Boolean, default: false }
  },
  data() {
    return {
      openIn: false
    }
  },
  watch: {
    open(val) {
      this.openIn = val
    }
  },
  methods: {
    input(val) {
      console.log('UserDrawer.vue')
      if (val === false) {
        this.$emit('close')
      }
    },
    logout() {
      try {
        this.$store.dispatch('firebase/logout')
        this.$store.commit('setState', { name: 'user', value: null })
      } catch (error) {
        console.log('error en logout: ', error)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
