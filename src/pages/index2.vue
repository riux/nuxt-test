<template>
  <div>
    {{ blog }}
    <v-text-field v-model="blog" dark />
    <v-btn @click="setBlog" color="success">
      setBlog
    </v-btn>
    <v-btn :loading="loading" @click="testFirebase" color="success">
      testFirebase
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saludo: 'Hola desde nuxt js',
      loading: false,
      blog: ''
    }
  },
  methods: {
    async testFirebase() {
      try {
        this.loading = true
        const data = {
          collection: 'textos',
          data: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt facere quidem quam reprehenderit beatae libero, provident qui accusantium odio temporibus suscipit sequi, necessitatibus consequatur eligendi ea fugiat impedit repellendus. Assumenda.'
          }
        }
        await this.$store.dispatch('firebase/fireAdd', data)
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    setBlog() {
      this.$store.commit('blog/setState', { name: 'blog', data: this.blog })
    },
    setTest(){

    }
  }
}
</script>
