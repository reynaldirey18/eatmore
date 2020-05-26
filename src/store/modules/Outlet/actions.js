import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(axios)

const registOutlet = ({ state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.post('http://api.eatmore.id/outlet_service/', state.dataRegistration, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const refreshToken = ({ state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.post('http://api.eatmore.id/auth_service/refresh-token/', {
      outlet_id: state.idOutlet
    },
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const getCategory = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.get('http://api.eatmore.id/outlet_service/references/outlet-category', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        commit('SET_CATEGORY', response.data.data)
        commit('IS_LOADED')
      }, error => {
        reject(error)
      })
  })
}

const getTag = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.get('http://api.eatmore.id/product_service/references/product-tags', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        commit('SET_TAG', response.data.data)
      }, error => {
        reject(error)
      })
  })
}

const getList = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.get('http://api.eatmore.id/outlet_service/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        const res = response.data
        commit('SET_LIST', res.data)
        commit('IS_LOADED')
      }, error => {
        reject(error)
      })
  })
}

const viewProfile = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    // const idOutlet = Cookies.get('id-outlet')
    axios.get('http://api.eatmore.id/profile_service/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        const res = response.data
        commit('SET_PROFIL', res.data)
      }, error => {
        reject(error)
      })
  })
}

const editProfile = ({ state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.patch('http://api.eatmore.id/profile_service/', state.editProfil, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const getSpecialHours = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.get('http://api.eatmore.id/profile_service/special-business-hours', {
      params: {
        year: state.year,
        month: state.month
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        const res = response.data
        commit('SET_SPECIAL_HOURS', res.data)
        commit('EVENTS_LOADED')
      }, error => {
        reject(error)
      })
  })
}

const postSpecialHours = ({ state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.post('http://api.eatmore.id/profile_service/special-business-hours', state.dataSpecialHours, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
  })
}

const getBusinessHours = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.get('http://api.eatmore.id/profile_service/business-hours', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        const res = response.data
        commit('SET_BUSINESS_HOURS', res.data)
      }, error => {
        reject(error)
      })
  })
}

const updateBusinessHours = ({ state }) => {
  return new Promise((resolve, reject) => {
    const token = Cookies.get('token')
    axios.put('http://api.eatmore.id/profile_service/business-hours', state.newBusinessHours, {
      headers: {
        Authorization: 'Bearer ' + token
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
  registOutlet,
  refreshToken,
  getCategory,
  getTag,
  getList,
  viewProfile,
  editProfile,
  getSpecialHours,
  postSpecialHours,
  getBusinessHours,
  updateBusinessHours
}
