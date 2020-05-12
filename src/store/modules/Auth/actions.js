import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const signUp = ({ state }) => {
  axios.post('http://api.eatmore.id/auth_service/registration', state.dataRegistration)
}

export default {
  signUp
}
