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

const getCategory = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/outlet_service/references/outlet-category', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        commit('SET_CATEGORY', response.data.data)
      }, error => {
        reject(error)
      })
  })
}

const getTag = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/outlet_service/references/product-tags', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        commit('SET_TAG', response.data.data)
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
        commit('SET_LIST', response.data.data)
        commit('IS_LOADED')
      }, error => {
        reject(error)
      })
  })
}

export default {
  registOutlet,
  getCategory,
  getTag,
  getList
}
