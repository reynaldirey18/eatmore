import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const registOutlet = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/outlet_service/', state.dataRegistration)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

export default {
  registOutlet
}
