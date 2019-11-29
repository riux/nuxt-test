<template>
  <div>
    <template v-if="!showAdd">
      <v-select
        v-model="categories"
        :items="$store.state.product.categories"
        :rules="[$arrRequired]"
        :loading="loading"
        @change="values"
        label="Seleccione Categorías"
        multiple
        item-text="name"
        item-value="name"
        chips
        hint="Seleccione una o más categorías"
        persistent-hint
      >
        <template v-slot:append-outer>
          <v-btn
            @click="showAdd = !showAdd"
            depressed
            tile
            color="primary"
            class="ma-0"
          >
            Nuevo
          </v-btn>
        </template>
        <template v-slot:no-data>
          Cree una categoría
          <v-icon>
            fas fa-database
          </v-icon>
        </template>
      </v-select>
    </template>
    <template v-else>
      <v-text-field
        ref="category"
        v-model="category.name"
        :rules="[$required]"
        label="Categoría"
      >
        <template v-slot:append-outer>
          <v-btn
            @click="addCategory"
            :loading="loading"
            depressed
            tile
            color="primary"
          >
            Guardar
          </v-btn>
          <v-btn
            @click="showAdd = !showAdd"
            depressed
            tile
            color="red"
          >
            Cancelar
          </v-btn>
        </template>
      </v-text-field>
    </template>
  </div>
</template>

<script>
export default {

  data: () => ({
    category: {},
    showAdd: false,
    loading: false,
    categories: [],
    states: [

    ]
  }),
  async created(){
    if (_.isEmpty(this.$store.state.product.categories)) {
      console.log('created categories')
      const resp = await this.$store.dispatch('firebase/fireGetAll', 'categories')
      this.$store.commit('product/setState', { name: 'categories', value: resp })
    }
  },
  methods: {
    values(event){
      this.$emit('values', event)
    },
    async addCategory(){
      try {
        if (this.$refs.category.validate()){
          this.loading = true
          const data = {
            collection: 'categories',
            data: {
              name: this.category.name,
              uid: this.$store.state.user.uid
            }
          }
          const resp = await this.$store.dispatch('firebase/fireAdd', data)
          this.$store.commit('product/addState', { name: 'categories', value: { id: resp.id, name: this.category.name } })
          this.showAdd = false
          this.category = {}
          this.loading = false
        }
      } catch (e){
        this.loading = false
        console.log('addCategory: ', e)
        this.$store.dispatch('setAlert', { alert: { type: 'error', message: 'Ocurrio un error al intentar crear la categoría :(', show: true }, time: 10000 })
      }
    }
  }

}
</script>
