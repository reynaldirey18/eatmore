<template>
  <div>
    <v-container fluid fill-height class="login">
      <img src="@/assets/img/Eatmore logo-01 1.png" alt="Eatmore logo">
      <v-row>
        <v-col cols="6" class="form">
          <div class="content-form">
            <form-login></form-login>
          </div>
        </v-col>
        <v-col cols="6" class="banner"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import formLogin from './components/FormLogin'

export default {
  name: 'LoginPage',
  components: {
    formLogin
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 0;
  img {
    position: absolute;
    top: 40px;
    left: 50px;
  }
  .form {
    height: 100vh;
    display: flex;
    .content-form {
      width: 50%;
      margin: auto;
    }
  }
  .banner {
    height: 100vh;
    background-color: #FFCA61;
  }
}
</style>
