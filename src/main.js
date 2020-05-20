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

const link = window.location.origin
axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    Cookies.remove('token')
    window.location.replace(link)
  }
  return Promise.resolve(response)
}, (error) => {
  if (error.response.status === 401) {
    Cookies.remove('token')
    window.location.replace(link)
  } else {
    return Promise.reject(error)
  }
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
