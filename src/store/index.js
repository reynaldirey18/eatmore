import Vue from 'vue'
import Vuex from 'vuex'

// module
import authModule from './modules/Auth'
import productModule from './modules/Product'
import employeeModule from './modules/Employee'
import roleModule from './modules/system/role'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth: authModule,
    product: productModule,
    employee: employeeModule,
    role: roleModule
  }
})
