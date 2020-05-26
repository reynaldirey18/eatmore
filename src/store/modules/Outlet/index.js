import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  dataRegistration: null,
  tokenRegist: null,
  outletList: null,
  lengthList: null,
  isLoaded: false,
  outletCategory: null,
  outletTag: null,
  idOutlet: null,
  dataProfil: null,
  editProfil: null,
  year: null,
  month: null,
  specialHours: null,
  idClickedEvent: null,
  events: null,
  eventsLoaded: false,
  dataSpecialHours: null,
  businessHours: null,
  newBusinessHours: null
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
