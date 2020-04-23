<template>
  <div>
    <v-container fluid fill-height class="login">
      <img src="@/assets/img/Eatmore logo-01 1.png" alt="Eatmore logo" class="logo">
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6" class="form">
          <div class="content-form" v-if="login">
            <form-login @signup="setPage"></form-login>
          </div>
          <div class="content-form" v-else>
            <form-signup @login="setPage"></form-signup>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6" class="banner">
          <div class="slogan">
            <p>Amazing employees deserves</p>
            <p class="bold">amazing software</p>
          </div>
          <div class="img-login">
            <img src="@/assets/img/login-background.png" alt="background" class="background1">
            <img src="@/assets/img/img-login.png" alt="illustration" class="img-illustration">
            <img src="@/assets/img/login-background2.png" alt="background" class="background2">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import formLogin from './components/FormLogin'
import formSignup from './components/FormSignup'

export default {
  name: 'LoginPage',
  components: {
    formLogin,
    formSignup
  },
  data () {
    return {
      login: true
    }
  },
  methods: {
    setPage (val) {
      this.login = val
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 0;
  .logo {
    position: absolute;
    top: 40px;
    left: 50px;
  }
  .form {
    height: 100vh;
    display: flex;
    .content-form {
      width: 60%;
      margin: auto;
    }
  }
  .banner {
    height: 100vh;
    background-color: #FFCA61;
    padding: 0;
    .slogan {
      position: absolute;
      left: 55vw;
      top: 15vh;
      color: white;
      p {
        font-size: 2vw;
        line-height: 40px;
      }
    }
    .img-login {
      display: flex;
      .background1 {
        position: absolute;
        width: 50vw;
        height: 30vh;
      }
      .img-illustration {
        width: 400px;
        margin: 30vh 15vw 0 15vw;
        z-index: 999;
      }
      .background2 {
        position: absolute;
        width: 50vw;
        height: 30vh;
        bottom: 0;
      }
    }
  }
  .bold{
    font-weight: bold;
  }
}

@media only screen and (max-width: 640px) {
  .form {
    height: 100vh;
    display: flex;
    .content-form {
      margin: auto;
    }
  }
  .banner {
    display: none;
  }
}
</style>
