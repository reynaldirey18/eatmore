import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookie from 'js-cookie'
const userToken = Cookie.get('token')
Vue.use(Vuex)

Vue.use(VueAxios, axios)

const getProduct = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/?page=1&pageSize=1000&fields=product_id&fields=product_name&fields=product_image', {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      const res = response.data
      resolve(response)
      if (res.status) {
        commit('SET_ResData', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}

const sendAddProduct = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/product_service/', state.dataProduct, {
      headers: {
        authorization: `Bearer ${userToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const modifier = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/references/product-modifiers', {
      params: {
        search: state.search,
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
        commit('SET_Modifier', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}
const taxs = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/references/product-taxes', {
      params: {
        search: state.search
      },
      headers: {
        authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      const res = response.data
      resolve(response)
      if (res.status) {
        commit('SET_Tax', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}
export default {
  sendAddProduct,
  getProduct,
  modifier,
  taxs
}
