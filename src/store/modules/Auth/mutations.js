const SET_TOKEN = (state, payload) => {
  state.token = payload
}
const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
}
const SET_LOGIN = (state, payload) => {
  state.dataLogin = payload
}

export default {
  SET_TOKEN,
  SET_REGISTRATION,
  SET_LOGIN
}
