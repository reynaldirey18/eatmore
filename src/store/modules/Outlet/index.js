import actions from './actions'
import mutations from './mutations'

const state = {
  dataRegistration: null,
  tokenRegist: null,
  outletList: null,
  lengthList: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
