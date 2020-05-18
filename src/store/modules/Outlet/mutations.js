const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
}
const SET_LIST = (state, payload) => {
  state.outletList = payload
  state.lengthList = payload.length
}

export default {
  SET_REGISTRATION,
  SET_LIST
}
