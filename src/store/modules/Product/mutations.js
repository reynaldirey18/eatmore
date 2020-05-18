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
  SET_Categories (state, payload) {
    state.categories = payload
  },
  SET_DataCategories (state, payload) {
    state.dataCategories = payload
  },
  SET_Tax (state, payload) {
    state.tax = payload
  },
  SET_idCategory (state, payload) {
    state.idCategory = payload
  },
  SET_categoryEdit (state, payload) {
    state.dataEditCate = payload
  }
}
export default mutations
