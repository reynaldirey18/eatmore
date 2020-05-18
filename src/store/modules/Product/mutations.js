const mutations = {
  SET_ResData (state, resdata) {
    state.resdata = resdata
  },
  set_addProduct (state, payload) {
    state.dataProduct = payload
  },
  Set_search (state, payload) {
    state.search = payload
  },
  SET_Page (state, payload) {
    state.page = payload
  },
  SET_pageSize (state, payload) {
    state.pageSize = payload
  },
  SET_Modifier (state, payload) {
    state.resmodifier = payload
  },
  SET_Tax (state, payload) {
    state.tax = payload
  }
}
export default mutations
