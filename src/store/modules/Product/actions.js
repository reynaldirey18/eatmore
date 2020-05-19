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
// categories
const getCategories = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/references/product-categories', {
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
        commit('SET_Categories', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}

const postCategories = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/product_service/references/product-categories', state.dataCategories, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const deleteCategory = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.delete('http://api.eatmore.id/product_service/references/product-categories/' + state.idCategory, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const editCategory = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.put('http://api.eatmore.id/product_service/references/product-categories/' + state.idCategory, state.dataEditCate, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}
const getRecipes = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/recipes', {
      params: {
        search: state.search,
        page: state.page,
        pageSize: state.pageSize,
        fields: ['product_id', 'product_name', 'product_image']
      },
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
const getEditRecipes = ({ commit, state }) => {
  console.log(state.idVariantDetail)
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/recipes/' + state.idVariantDetail, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      const res = response.data
      resolve(response)
      if (res.status) {
        commit('SET_resVariantDetail', res.data)
      }
    }, error => {
      reject(error)
    })
  })
}
const getVariantlist = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios.get('http://api.eatmore.id/product_service/' + state.idRecipes + '/variants', {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    }).then(response => {
      const res = response.data
      resolve(response)
      if (res.status) {
        commit('SET_resVariant', res.data)
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
  getCategories,
  postCategories,
  editCategory,
  deleteCategory,
  taxs,
  getEditRecipes,
  getRecipes,
  getVariantlist
}
