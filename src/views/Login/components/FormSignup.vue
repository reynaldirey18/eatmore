<template>
  <div>
    <h1 class="app-title mt-10">Getting Started</h1>
    <p class="text-blue" @click="setPage"><u>Already have an account?</u></p>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(submitForm)">
        <div class="form-input">
          <p class="label-form">Email</p>
          <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
            <v-text-field
              v-model="email"
              :error-messages="errors"
              type="email"
              outlined
              dense
            >
            </v-text-field>
          </ValidationProvider>
          <p class="label-form">Username</p>
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

          <p class="label-form">Phone Number</p>
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

          <p class="label-form">Password</p>
          <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:6">
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

          <p class="label-form">Re-type Password</p>
          <ValidationProvider v-slot="{ errors }" name="Re-type password" rules="required|password:@Password">
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
        </div>
        <v-btn block color="#FDB526" dark class="button-signup" type="submit" :loading="loading">Sign Up</v-btn>
      </v-form>
    </ValidationObserver>
    <!-- dialog success -->
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <img src="@/assets/img/success.png" alt="success" class="mx-auto">
        <v-card-title class="title-card mx-auto">Register success</v-card-title>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog = false"
            color="#FDB526" class="mt-3 w-full"
            width="100%"
            dark>
            <span class="text-capitalize" @click="closeAndNavigate">Okay</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog failed -->
    <v-dialog v-model="dialog2" persistent max-width="350">
      <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
        <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
        <v-card-title class="title-card mx-auto">Register account failed</v-card-title>
        <p>{{ errorMessage }}</p>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="dialog2 = false"
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
export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      show1: false,
      show2: false,
      loading: false,
      email: null,
      username: null,
      phone: null,
      password: null,
      reType: null,
      errorMessage: null
    }
  },
  methods: {
    closeAndNavigate () {
      setTimeout(() => {
        this.$router.go()
      }, 200)
    },
    submitForm () {
      this.loading = true
      var dataRegist = {
        username: this.username,
        email: this.email,
        phone_number: this.phone,
        password: this.password,
        password_confirm: this.reType
      }
      this.$store.commit('auth/SET_REGISTRATION', dataRegist)
      this.$store.dispatch('auth/signUp')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          } else {
            this.loading = false
            console.log(res.errors)
          }
        }).catch((error) => {
          const message = error.response.data.message
          if (error.response.status === 400) {
            this.$refs.form.setErrors({
              Email: [message],
              Username: [message]
            })
            this.loading = false
          } else {
            this.errorMessage = message
          }
        })
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
