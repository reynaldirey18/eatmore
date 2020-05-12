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
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  data () {
    return {
      show1: false,
      username: null,
      password: null,
      loading: false
    }
  },
  methods: {
    setPage () {
      this.$emit('signup', false)
    },
    forgotPass () {
      this.$router.push('/forgot-password')
    },
    toDashboard () {
      this.loading = true
      const token = 'jkj1321jllkj1'
      const email = 'admin1'
      const pass = 'test123'
      if (this.username === email && this.password === pass) {
        this.$store.commit('auth/SET_TOKEN', token)
        Cookies.set('token', token, { expires: 1 })
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 20)
      } else {
        this.$refs.form.setErrors({
          Username: ['Invalid username or password'],
          Password: ['Invalid username or password']
        })
        this.loading = false
      }
    },
    closeSuccessAndNavigate () {
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 20)
    },
    login () {
      this.loading = true
      const data = {
        username: this.username,
        password: this.password
      }
      axios.post('http://api.eatmore.id/auth_service/login', data).then(response => {
        const res = response.data
        console.log('test')
        if (res.status) {
          const token = res.data.token
          this.$store.commit('auth/SET_TOKEN', token)
          Cookies.set('token', token, { expires: 1 })
          this.closeSuccessAndNavigate()
        } else {
          this.$refs.form.setErrors({
            Username: ['Invalid username or password'],
            Password: ['Invalid username or password']
          })
          this.loading = false
        }
      }).catch((error) => {
        console.log(error.message)
        this.loading = false
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
