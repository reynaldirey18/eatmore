import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(axios)

const token = Cookies.get('token')
const indexOutlet = Cookies.get('index-outlet') - 1

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
        commit('IS_LOADED')
      }, error => {
        reject(error)
      })
  })
}

const getTag = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/references/product-tags', {
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
        const res = response.data
        commit('SET_LIST', res.data)
        commit('SET_SELECTED', res.data[indexOutlet])
        commit('IS_LOADED')
        Cookies.set('id-outlet', res.data[indexOutlet].outlet_id)
      }, error => {
        reject(error)
      })
  })
}

const viewOutlet = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const idOutlet = Cookies.get('id-outlet')
    axios.get('http://api.eatmore.id/outlet_service/' + idOutlet, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        const res = response.data
        commit('SET_PROFIL', res.data)
      }, error => {
        reject(error)
      })
  })
}

export default {
  registOutlet,
  getCategory,
  getTag,
  getList,
  viewOutlet
}
