import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const signUp = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/auth_service/registration', state.dataRegistration)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

export default {
  signUp
}
