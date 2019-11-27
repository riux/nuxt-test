<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="openIn"
      dark
      data-app
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          icon
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                fas fa-user-circle
              </v-icon>
            </template>
            <span>Inicia sessión</span>
          </v-tooltip>
        </v-btn>
      </template>

      <v-card class="elevation-1 pa-3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              :absolute="true"
              @click="openIn = false"
              v-on="on"
              icon
              color="red"
              right
            >
              <v-icon large>
                fas fa-times-circle
              </v-icon>
            </v-btn>
          </template>
          <span>Cerrar</span>
        </v-tooltip>

        <v-spacer></v-spacer>
        <v-card-text>
          <div class="layout column align-center">
            <img
              src="https://via.placeholder.com/120/000000/FFFFFF/?text=TMP"
              alt="Vue Material Admin"
              width="120"
              height="120"
            />
            <h1 class="flex my-4 primary--text">
              Inicio de sesión
            </h1>
            <!-- <template>
              <v-alert :type="$store.state.alert.type">
                {{ $store.state.alert.message }}
              </v-alert>
            </template> -->
          </div>
          <template v-if="!register">
            <v-form ref="form">
              <v-text-field
                v-model="account.email"
                :rules="[ rules.required, rules.email ]"
                append-icon="fas fa-user-alt"
                name="login"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="account.password"
                :rules="[ rules.required ]"
                append-icon="fas fa-key"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
            </v-form>
          </template>
          <template v-else>
            <v-form ref="form">
              <v-text-field
                v-model="account.email"
                :rules="[ rules.required, rules.email ]"
                append-icon="fas fa-user-alt"
                name="login"
                label="Email"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="account.password"
                :rules="[ rules.required ]"
                append-icon="fas fa-key"
                name="password"
                label="Password"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="account.rePassword"
                :rules="[ rules.required, rules.equals ]"
                append-icon="fas fa-key"
                name="password"
                label="RePassword"
                type="password"
              ></v-text-field>
            </v-form>
          </template>
        </v-card-text>
        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                @click.prevent="loginAccount('FacebookAuthProvider')"
                v-on="on"
                icon
              >
                <v-icon
                  color="blue"
                  large
                >
                  fab fa-facebook-square fa-lg
                </v-icon>
              </v-btn>
            </template>
            <span>Inicia con facebook</span>
          </v-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                @click.prevent="loginAccount('GoogleAuthProvider')"
                v-on="on"
                icon
              >
                <v-icon
                  color="red"
                  large
                >
                  fab fa-google fa-lg
                </v-icon>
              </v-btn>
            </template>
            <span>Inicia con google</span>
          </v-tooltip>

          <v-spacer></v-spacer>
          <template v-if="!register">
            <v-btn
              @click.prevent="register = true"
              color="secondary"
            >
              Registrate
            </v-btn>
            <v-btn
              :loading="loading"
              @keydown.13.prevent="login('signInWithEmailAndPassword')"
              @click.prevent="login('signInWithEmailAndPassword')"
              color="primary"
            >
              Login
            </v-btn>
          </template>
          <template v-else>
            <v-btn
              @click.prevent="register = false"
              color="red"
            >
              Cancelar
            </v-btn>
            <v-btn
              :loading="loading"
              @keydown.13.prevent="createUser()"
              @click.prevent="createUser()"
              color="primary"
            >
              Registrar
            </v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      openIn: false,
      loading: false,
      account: {
        email: '',
        password: ''
      },
      register: false,
      rules: {
        required: value => !!value || 'Requerido',
        email: value =>
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            value
          ) || 'Ingrese email válido',
        equals: value =>
          this.account.password === this.account.rePassword ||
          'Los password deben coincidir'
      }
    }
  },
  watch: {
    openIn(val) {
      if (val === false) {
        this.account = {}
        this.register = false
        this.loading = false
      }
    }
  },
  methods: {
    async loginAccount(singInWith) {
      try {
        this.loading = true
        const resp = await this.$store.dispatch('firebase/fireLogin', { singInWith })
        this.success(resp)
      } catch (e) {
        this.loading = false
        this.$store.dispatch('showAlert', {
          type: 'error',
          message: 'Ocurrio un error en el login :(',
          time: 5000
        })
        console.log('error en loginAccount: ', e)
      }
    },
    login(singInWith) {
      this.$store.dispatch('showAlert', {
        type: 'error',
        message: 'Ocurrio un error en el login :(',
        time: 5000
      })
      // try {
      //   if (this.$refs.form.validate()){
      //     this.loading = true
      //     const resp = await this.$store.dispatch('firebase/fireLogin', { singInWith, account: this.account })
      //     console.log('exito', resp)
      //     this.loading = false
      //     this.openIn = false
      //   }
      // } catch (e){
      //   this.loading = false
      //   this.$store.dispatch('showAlert', { type: 'error', message: 'Ocurrio un error en el login :(', time: 5000 })
      //   console.log('error en loginAccount: ', e)
      // }
    },
    async createUser() {
      try {
        if (this.$refs.form.validate()) {
          this.loading = true
          const resp = await this.$store.dispatch(
            'firebase/createUser',
            this.account
          )
          console.log(resp)
          this.loading = false
        }
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    success(user){
      this.$store.commit('setState', { name: 'user', value: user })
      this.loading = false
      this.openIn = false
    }
  }
}
</script>
