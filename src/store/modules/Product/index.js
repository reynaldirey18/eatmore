import actions from './actions'
import mutations from './mutations'

const state = {
  messages: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
