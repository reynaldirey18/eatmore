<template>
  <div>
    <h1 class="app-title">Getting Started</h1>
    <p class="text-blue" @click="setPage"><u>Already have an account?</u></p>
    <div class="form-input">
      <p class="label-form">Email</p>
      <v-form ref="form">
        <v-text-field
          v-model="email"
          type="email"
          outlined
          dense
        >
        </v-text-field>
      </v-form>

      <p class="label-form">Username</p>
      <v-form ref="form">
        <v-text-field
          v-model="username"
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

      <p class="label-form">Phone Number</p>
      <v-form ref="form">
        <v-text-field
          v-model="phone"
          outlined
          dense
        >
          <template v-slot:prepend-inner>
            <div class="icon-input">
              <v-icon size="20">mdi-card-account-phone</v-icon>
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

      <p class="label-form">Re-type Password</p>
      <v-form ref="form">
        <v-text-field
          v-model="reType"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          name="input-10-1"
          outlined
          dense
          @click:append="show2 = !show2"
        ></v-text-field>
      </v-form>
    </div>
    <v-btn block color="#FDB526" dark class="button-signup">Sign Up</v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      password: null,
      reType: null
    }
  },
  methods: {
    setPage () {
      this.$emit('login', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  margin-bottom: 10px;
  margin-top: 30px;
  font-weight: bold;
}

.form-input {
  margin-top: 40px;
  .label-form {
    font-weight: bold;
    margin-top: -15px;
  }
  .icon-input {
    position: absolute;
    right: 15px;
    top: 10px;
  }
}

.v-btn {
  text-transform: capitalize;
}

.text-blue {
  cursor: pointer;
}

.text-blue:hover {
  color: rgb(9, 82, 141);
}
</style>
