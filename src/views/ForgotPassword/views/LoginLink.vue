<template>
  <div>
    <div class="send-link">
      <div class="card">
        <img src="@/assets/img/shield.png" alt="" class="img-shield center">
        <div class="card-item">
          <h1 class="title-card">Have Troubles Logging In?</h1>
          <span>Enter your email and we'll send you a link to get back into your account.</span>
          <ValidationObserver ref="form" v-slot="{ handleSubmit }">
            <v-form @submit.prevent="handleSubmit(submit)">
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
              </div>
              <v-btn block color="#FDB526" dark class="button-login" type="submit" :loading="loading">Send Login Link</v-btn>
              <v-btn text class="back" color="#F32626" @click="getBack">Back</v-btn>
            </v-form>
          </ValidationObserver>
        </div>
      </div>
      <v-dialog v-model="dialog" persistent max-width="350">
        <v-card class="pa-8 pb-10">
          <img src="@/assets/img/success.png" alt="success">
          <v-card-title class="title-card">Link Sent!</v-card-title>
          <p>We sent a link to reset your password</p>
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      email: null,
      loading: false
    }
  },
  methods: {
    getBack () {
      this.$router.push('/login')
    },
    closeModal (val) {
      this.modal = val
    },
    closeAndNavigate () {
      setTimeout(() => {
        this.$router.go()
      }, 20)
    },
    submit () {
      this.loading = true
      const link = window.location.origin
      const dataForgot = {
        email: this.email,
        app_url: link
      }
      this.$store.commit('auth/SET_FORGOT', dataForgot)
      this.$store.dispatch('auth/sendLink')
        .then(response => {
          const res = response.data
          if (res.status) {
            this.dialog = true
          }
        }).catch((error) => {
          if (error.response.status === 400) {
            const message = error.response.data.message
            this.$refs.form.setErrors({
              Email: [message]
            })
          }
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.send-link {
  background-color: #e5e5e5;
  height: 100vh;
  display: flex;
}
.card {
  padding: 20px 50px 90px 50px;
  margin: auto;
  background-color: #fff;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .card-item {
    text-align: center;
    p {
      text-align: left;
    }
  }
  .title-card {
    margin-bottom: 15px;
  }
  .back {
    margin-top: 20px;
  }
}
.img-shield {
  height: 130px;
  margin-top: 30px;
  margin-bottom: 20px;
}
.v-card {
  text-align: center;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  img {
    height: 180px;
    width: 180px;
    margin: 0 auto;
  }
  .title-card {
    margin: 0 auto;
    font-weight: 700;
  }
}
</style>
