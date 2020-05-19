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

const IS_LOADED = (state) => {
  state.isLoaded = true
}

const SET_PROFIL = (state, payload) => {
  state.dataProfil = payload
}

const SET_EDIT = (state, payload) => {
  state.editProfil = payload
}

const SET_SPECIAL_HOURS = (state, payload) => {
  state.specialHours = payload
}

const SET_YEAR = (state, payload) => {
  state.year = payload
}

const SET_MONTH = (state, payload) => {
  state.month = payload
}

export default {
  SET_REGISTRATION,
  SET_ID_OUTLET,
  SET_CATEGORY,
  SET_TAG,
  SET_LIST,
  IS_LOADED,
  SET_PROFIL,
  SET_EDIT,
  SET_SPECIAL_HOURS,
  SET_YEAR,
  SET_MONTH
}
