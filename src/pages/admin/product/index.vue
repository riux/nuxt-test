<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-btn @click="addProduct" color="primary" class="mb-2">
            Agregar
          </v-btn>
        </v-card-text>
      </v-card>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-if="form">
          <Form />
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>
import Form from '~/components/products/Form.vue'
export default {
  components: {
    Form
  },
  data() {
    return {
      product: {},
      dialog: false,
      form: false
    }
  },
  watch: {

  },
  methods: {
    addProduct(){
      this.form = true
      this.dialog = true
    }
  }
}
</script>
