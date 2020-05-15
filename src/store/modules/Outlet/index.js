import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  dataRegistration: null,
  tokenRegist: null,
  outletList: null,
  lengthList: null,
  selectedOutlet: null,
  orderNumber: 1,
  isLoaded: false,
  outletCategory: null,
  outletTag: null,
  dataProfil: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
