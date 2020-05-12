const SET_TOKEN = (state, payload) => {
  state.token = payload
}
const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
}

export default {
  SET_TOKEN,
  SET_REGISTRATION
}
