<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          Cookies.remove('token')
          this.$router.go()
        }
        throw err
      })
    })
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
*, body{
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
}

</style>
