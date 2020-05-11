import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)

Vue.use(VueAxios, axios)
const actions = {
  getRole ({ commit, state }) {
    axios.get('http://localhost:3001/get-role-management')
      .then(response => {
        const res = response.data
        if (res.status) {
          commit('SET_ResData', res.data)
          console.log(res.data)
        }
      })
  }
}
export default actions
