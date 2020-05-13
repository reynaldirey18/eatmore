import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookie from 'js-cookie'
const userToken = Cookie.get('token')
Vue.use(Vuex)

Vue.use(VueAxios, axios)
const actions = {
  getProduct ({ commit, state }) {
    axios.get('http://api.eatmore.id/product_service/?page=1&pageSize=10', {
      params: { fields: ['product_id', 'product_name', 'product_image'] },
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
      .then(response => {
        const res = response.data
        if (res.status) {
          commit('SET_ResData', res.data)
        }
      })
  }
}
export default actions
