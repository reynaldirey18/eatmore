<template>
  <div class="new-password">
    <div class="card">
      <div class="title">
        <h1 class="title-card">Create New Password</h1>
        <span>Please enter your new password</span>
      </div>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <v-form @submit.prevent="handleSubmit(submitForm)">
          <div class="form-input">
            <p class="label-form">New Password</p>
            <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:6">
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                :error-messages="errors"
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
            <v-btn block color="#FDB526" dark type="submit" :loading="loading">Reset Password</v-btn>
          </div>
        </v-form>
      </ValidationObserver>
      <!-- dialog success -->
      <v-dialog v-model="dialog" persistent max-width="350">
        <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
          <img src="@/assets/img/success.png" alt="success" class="mx-auto">
          <v-card-title class="title-card mx-auto">Reset password success</v-card-title>
          <v-card-actions class="pa-0">
            <v-spacer></v-spacer>
            <v-btn
              @click.prevent="closeAndNavigate"
              color="#FDB526" class="mt-3 w-full"
              width="100%"
              dark>
              <span class="text-capitalize">Okay</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dialog failed -->
      <v-dialog v-model="dialog2" persistent max-width="350">
        <v-card class="pa-8 pb-10 d-flex flex-column justify-center">
          <v-icon color="#F32626" size="100px">mdi-alert-circle-outline</v-icon>
          <v-card-title class="title-card mx-auto">Reset Password Failed</v-card-title>
          <p class="mx-auto">{{ errorMessage }}</p>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: false,
      password: null,
      reType: null,
      loading: false,
      dialog: false,
      dialog2: false,
      errorMessage: null
    }
  },
  methods: {
    closeAndNavigate () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 200)
    },
    submitForm () {
      this.loading = true
      var dataReset = {
        password: this.password,
        password_confirm: this.reType
      }
      var token = this.$route.query.token
      this.$store.commit('auth/SET_RESET', dataReset)
      this.$store.commit('auth/SET_TOKEN_RESET', token)
      this.$store.dispatch('auth/resetPassword')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          } else {
            this.loading = false
          }
        }).catch((error) => {
          const message = error.response.data.message
          this.errorMessage = message
          this.dialog2 = true
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.new-password {
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
  .card {
    padding: 60px 50px 90px 50px;
    margin: auto;
    background-color: #fff;
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      text-align: center;
      .title-card {
        margin-bottom: 15px;
      }
    }
    .form-input {
      margin-top: 50px;
    }
    .v-btn {
      margin-top: 20px;
    }
  }
}
</style>
