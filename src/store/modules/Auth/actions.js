import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const signUp = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/auth_service/registration', state.dataRegistration)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const logIn = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/auth_service/login', state.dataLogin)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const sendLink = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/auth_service/forgot-password', state.dataForgot)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const resetPassword = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios.post('http://api.eatmore.id/auth_service/change-password', state.dataReset, {
      headers: {
        Authorization: 'Bearer ' + state.tokenReset
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

export default {
  signUp,
  logIn,
  sendLink,
  resetPassword
}
