const SET_TOKEN = (state, payload) => {
  state.token = payload
}
const SET_REGISTRATION = (state, payload) => {
  state.dataRegistration = payload
}
const SET_LOGIN = (state, payload) => {
  state.dataLogin = payload
}
const SET_FORGOT = (state, payload) => {
  state.dataForgot = payload
}
const SET_RESET = (state, payload) => {
  state.dataReset = payload
}
const SET_TOKEN_RESET = (state, payload) => {
  state.tokenReset = payload
}

export default {
  SET_TOKEN,
  SET_REGISTRATION,
  SET_LOGIN,
  SET_FORGOT,
  SET_RESET,
  SET_TOKEN_RESET
}
