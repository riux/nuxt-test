<template>
  <div class="text-xs-center">
    <v-btn @click.stop="$emit('userData')" icon>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-avatar>
            <img
              v-on="on"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </template>
        <span>
          Login
        </span>
      </v-tooltip>
    </v-btn>
  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
