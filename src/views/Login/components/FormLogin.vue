<template>
  <div>
    <h1 class="app-title">Log In</h1>
    <p class="text-blue" @click="setPage"><u>Don't have an account?</u></p>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(login)">
        <div class="form-input">
          <p class="label-form">Username</p>
          <ValidationProvider v-slot="{ errors }" name="Username" rules="">
            <v-text-field
              v-model="username"
              :error-messages="errors"
              placeholder="Eg. floor1 or floor for cafe & resto"
              outlined
              dense
            >
              <template v-slot:prepend-inner>
                <div class="icon-input">
                  <v-icon size="20">mdi-account</v-icon>
                </div>
              </template>
            </v-text-field>
          </ValidationProvider>
          <p class="label-form">Password</p>
          <ValidationProvider v-slot="{ errors }" name="Password" rules="">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              :error-messages="errors"
              name="Password"
              outlined
              dense
              @click:append="show1 = !show1"
            ></v-text-field>
          </ValidationProvider>
        </div>
        <p class="text-blue" @click="forgotPass"><u>Forgot password</u></p>
        <v-btn
          type="submit"
          color="#FDB526"
          :loading="loading"
          block
          dark
          class="button-login">Login</v-btn>
      </v-form>
    </ValidationObserver>
    <!-- dialog failed -->
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
        <v-card-title class="title-card mx-auto">Login failed</v-card-title>
        <p>{{ errorMessage }}</p>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      show1: false,
      username: null,
      password: null,
      errorMessage: null,
      loading: false,
      dialog: false
    }
  },
  methods: {
    setPage () {
      this.$emit('signup', false)
    },
    forgotPass () {
      this.$router.push('/forgot-password')
    },
    login () {
      this.loading = true
      const data = {
        username: this.username,
        password: this.password
      }
      this.$store.commit('auth/SET_LOGIN', data)
      this.$store.dispatch('auth/logIn')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.$store.commit('auth/SET_TOKEN', res.data.token)
            Cookies.set('token', res.data.token, { expires: 1 })
            setTimeout(() => {
              this.$router.push('/dashboard')
            }, 20)
          }
        }).catch((error) => {
          const message = error.response.data.message
          if (error.response && error.response.status === 400) {
            const errorText = error.response.data.errors[0].text
            this.$refs.form.setErrors({
              Username: [errorText],
              Password: [errorText]
            })
            this.loading = false
          } else {
            this.errorMessage = message
            this.loading = false
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  margin-bottom: 10px;
  font-weight: bold;
}

.button-login {
  margin-top: 20px;
}

.v-form {
  color: #CCCCCC !important;
}

.text-blue {
  cursor: pointer;
}

.text-blue:hover {
  color: rgb(9, 82, 141);
}
</style>
