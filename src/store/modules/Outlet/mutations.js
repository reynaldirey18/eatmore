const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
}

const SET_ID_OUTLET = (state, payload) => {
  state.idOutlet = payload
}

const SET_CATEGORY = (state, payload) => {
  state.outletCategory = payload
}

const SET_TAG = (state, payload) => {
  state.outletTag = payload
}

const SET_LIST = (state, payload) => {
  state.outletList = payload
  state.lengthList = payload.length
}

const SET_SELECTED = (state, payload) => {
  state.selectedOutlet = payload
  state.orderNumber = state.outletList.indexOf(state.selectedOutlet) + 1
}

const IS_LOADED = (state) => {
  state.isLoaded = true
}

const SET_PROFIL = (state, payload) => {
  state.dataProfil = payload
}

export default {
  SET_REGISTRATION,
  SET_ID_OUTLET,
  SET_CATEGORY,
  SET_TAG,
  SET_LIST,
  SET_SELECTED,
  IS_LOADED,
  SET_PROFIL
}
