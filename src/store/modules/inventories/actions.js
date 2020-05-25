import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookie from 'js-cookie'
const userToken = Cookie.get('token')
Vue.use(Vuex)

Vue.use(VueAxios, axios)

const getInventories = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/inventories', {
      params: {
        page: state.page,
        pageSize: state.pageSize
      },
      headers: {
        authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      const res = response.data
      resolve(response)
      if (res.status) {
        commit('SET_resInvent', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}
const getInventoriesById = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/inventories/' + state.idInvent, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      const res = response.data
      resolve(response)
      if (res.status) {
        commit('SET_restInventById', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}

export default {
  getInventories,
  getInventoriesById
}
