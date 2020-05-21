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
  },
  SET_idRecipes (state, payload) {
    state.idRecipes = payload
  },
  SET_resVariant (state, payload) {
    state.resVariant = payload
  },
  SET_resVariantDetail (state, payload) {
    state.resVariantDetail = payload
  },
  SET_idVatiantDetail (state, payload) {
    state.idVariantDetail = payload
  },
  SET_name (state, payload) {
    state.name = payload
  },
  SET_Unit (state, payload) {
    state.unitList = payload
  },
  SET_dataRecipesEdit (state, payload) {
    state.datarecipes = payload
  },
  SET_RestInventByid (state, payload) {
    state.inventById = payload
  },
  SET_IdInvent (state, payload) {
    state.idInvent = payload
  }
}
export default mutations
