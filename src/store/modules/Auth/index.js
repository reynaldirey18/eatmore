import actions from './actions'
// import mutations from './mutations'

const state = {
  token: 'asdas123213kjdk'
}

const mutations = {
  SET_TOKEN (state, val) {
    state.token = val
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
