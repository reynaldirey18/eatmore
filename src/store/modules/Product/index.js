import actions from './actions'
import mutations from './mutations'

const state = {
  resdata: [],
  resmodifier: [],
  dataProduct: null,
  search: null,
  page: null,
  tax: null,
  pageSize: null,
  dataCategories: null,
  categories: [],
  idCategory: null,
  dataEditCate: null,
  idRecipes: null,
  resVariant: [],
  resVariantDetail: [],
  idVariantDetail: null,
  name: [],
  unitList: [],
  datarecipes: [],
  inventById: [],
  idInvent: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
