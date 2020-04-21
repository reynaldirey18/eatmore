<template>
  <div>
    <h1 class="app-title">Log In</h1>
    <p class="text-blue"><u>Don't have an account?</u></p>
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
    <p class="text-blue"><u>Forgot password</u></p>
    <v-btn block color="#FDB526" dark class="button-login">Login</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      password: null
    }
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  margin-bottom: 10px;
  font-weight: bold;
}

.form-input {
  margin-top: 20px;
  .label-form {
    font-weight: bold;
  }
  .icon-input {
    position: absolute;
    right: 15px;
    top: 10px;
  }
}

.button-login {
  margin-top: 20px;
}

.v-form {
  color: #CCCCCC !important;
}

.v-btn {
  text-transform: capitalize;
}
</style>
