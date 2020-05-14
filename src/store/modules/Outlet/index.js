import actions from './actions'
import mutations from './mutations'

const state = {
  dataRegistration: null,
  tokenRegist: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
