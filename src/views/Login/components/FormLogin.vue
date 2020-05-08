<template>
  <div>
    <h1 class="app-title">Log In</h1>
    <p class="text-blue" @click="setPage"><u>Don't have an account?</u></p>
    <div class="form-input">
      <p class="label-form">Username</p>
      <v-form ref="form">
        <v-text-field
          v-model="username"
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
      </v-form>

      <p class="label-form">Password</p>
      <v-form ref="form">
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          outlined
          dense
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-form>
    </div>
    <p class="text-blue" @click="forgotPass"><u>Forgot password</u></p>
    <v-btn block color="#FDB526" dark class="button-login" @click="toDashboard">Login</v-btn>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      show1: false,
      password: null
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
      const token = 'jkj1321jllkj1'
      this.$store.commit('auth/SET_TOKEN', token)
      Cookies.set('token', token, { expires: 1 })
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 20)
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
