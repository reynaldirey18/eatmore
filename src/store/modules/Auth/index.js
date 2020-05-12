import actions from './actions'
import mutations from './mutations'

const state = {
  token: null,
  dataRegistration: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
