import actions from './actions'
import mutations from './mutations'

const state = {
  resdata: [],
  resmodifier: [],
  dataProduct: null,
  search: null,
  page: null,
  tax: null,
  pageSize: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
