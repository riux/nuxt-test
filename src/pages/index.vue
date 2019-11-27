<template>
  <v-row
    column
    justify-center
    align-center
  >
    <v-col
      xs12
      sm8
      md6
    >
      hola user:
      {{ $store.state.user }}
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {

  }
}
</script>
