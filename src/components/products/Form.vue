<template>
  <v-card>
    <v-toolbar
      color="primary"
      flat
    >
      <v-toolbar-title>
        <span class="headline">
          {{ formTitle }}
        </span>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container>
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="product.name"
                :rules="[$required]"
                label="Nombre"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="product.description"
                :rules="[$required]"
                label="Descrip"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="product.price"
                :rules="[$required]"
                label="precio"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <Categories />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="saveProduct" :loading="loading">
        guardar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import Categories from '~/components/products/Categories.vue'
export default {
  components: {
    Categories
  },
  data() {
    return {
      formTitle: 'Agregar Producto',
      loading: false,
      product: {}
    }
  },
  watch: {

  },
  methods: {
    async saveProduct(){
      try {
        if (this.$refs.form.validate()) {
          this.loading = true
          await this.$store.dispatch('firebase/fireAdd', { collection: 'product', data: this.product })
          this.loading = false
        }
      } catch (error) {
        this.loading = false
        console.log('error en saveProduct', e)
      }
    }

  }
}
</script>
