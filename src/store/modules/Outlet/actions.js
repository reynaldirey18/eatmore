import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(axios)

const token = Cookies.get('token')

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

const getList = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/outlet_service/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        console.log(response)
        commit('SET_LIST', response.data.data)
      }, error => {
        reject(error)
      })
  })
}

export default {
  registOutlet,
  getList
}
