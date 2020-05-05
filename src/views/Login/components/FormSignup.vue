<template>
  <div>
    <h1 class="app-title mt-10">Getting Started</h1>
    <p class="text-blue" @click="setPage"><u>Already have an account?</u></p>
    <ValidationObserver ref="observer">
      <div class="form-input">
        <p class="label-form">Email</p>
        <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
          <v-form ref="form">
            <v-text-field
              v-model="email"
              :error-messages="errors"
              type="email"
              outlined
              dense
            >
            </v-text-field>
          </v-form>
        </ValidationProvider>
        <p class="label-form">Username</p>
        <v-form ref="form">
          <ValidationProvider v-slot="{ errors }" name="Username" rules="required">
            <v-text-field
              v-model="username"
              :error-messages="errors"
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
        </v-form>

        <p class="label-form">Phone Number</p>
        <v-form ref="form">
          <ValidationProvider v-slot="{ errors }" name="Phone number" rules="required">
            <v-text-field
              v-model="phone"
              :error-messages="errors"
              outlined
              dense
            >
              <template v-slot:prepend-inner>
                <div class="icon-input">
                  <v-icon size="20">mdi-card-account-phone</v-icon>
                </div>
              </template>
            </v-text-field>
          </ValidationProvider>
        </v-form>

        <p class="label-form">Password</p>
        <v-form ref="form">
          <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
            <v-text-field
              v-model="password"
              :error-messages="errors"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              outlined
              dense
              @click:append="show1 = !show1"
            ></v-text-field>
          </ValidationProvider>
        </v-form>

        <p class="label-form">Re-type Password</p>
        <v-form ref="form">
          <ValidationProvider v-slot="{ errors }" name="Re-type password" rules="required">
            <v-text-field
              v-model="reType"
              :error-messages="errors"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              name="input-10-1"
              outlined
              dense
              @click:append="show2 = !show2"
            ></v-text-field>
          </ValidationProvider>
        </v-form>
      </div>
      <v-btn block color="#FDB526" dark class="button-signup" @click="submit">Sign Up</v-btn>
    </ValidationObserver>
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
    submit () {
      this.$refs.observer.validate()
    },
    setPage () {
      this.$emit('login', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  font-weight: bold;
}

.form-input {
  margin-top: 20px;
  .label-form {
    font-weight: bold;
    margin-top: -5px;
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
// .v-messages__message {
//   text-align: right;
// }
</style>
