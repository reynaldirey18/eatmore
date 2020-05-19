import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/google-maps'
import './plugins/VeeValidate'
import './assets/scss/main.scss' // Styles: SCSS
import './utils/axios'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(require('vue-moment'))

const { VUE_APP_API_URL } = process.env
axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    Cookies.remove('token')
    window.location.replace(VUE_APP_API_URL)
  }
  return response
}, (error) => {
  if (error.response && error.response.data) {
    Cookies.remove('token')
    window.location.replace(VUE_APP_API_URL)
    return Promise.reject(error.response.data)
  }
  return Promise.reject(error.message)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
