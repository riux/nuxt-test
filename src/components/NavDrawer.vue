<template>
  <v-navigation-drawer
    v-model="openIn"
    @input="input"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
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
      openIn: false,
      items: [
        {
          icon: 'fab fa-500px',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'fab fa-product-hunt',
          title: 'Products',
          to: '/admin/product/'
        }
      ]

    }
  },
  watch: {
    open(val) {
      this.openIn = val
    }
  },
  methods: {
    input(val) {
      if (val === false) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style>
</style>
