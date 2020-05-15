const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
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
  state.selectedOutlet = payload[0]
  state.orderNumber = payload.indexOf(state.selectedOutlet) + 1
}

const IS_LOADED = (state) => {
  state.isLoaded = true
}

export default {
  SET_REGISTRATION,
  SET_CATEGORY,
  SET_TAG,
  SET_LIST,
  IS_LOADED
}
