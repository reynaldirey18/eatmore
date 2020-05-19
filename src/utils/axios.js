import axios from 'axios'
import Cookies from 'js-cookie'

const { VUE_APP_API_URL } = process.env

const client = axios.create({
  baseURL: VUE_APP_API_URL
})

client.interceptors.response.use((response) => {
  if (response.status === 401) {
    Cookies.remove('token')
    this.$router.push('/login')
  }
  return response
}, (error) => {
  if (error.response && error.response.data) {
    Cookies.remove('token')
    this.$router.push('/login')
    return Promise.reject(error.response.data)
  }
  return Promise.reject(error.message)
})

// client.interceptors.request.use(
//   requestConfig => {
//     const originalConfig = requestConfig
//     const userToken = Cookies.get('token')
//     originalConfig.headers.Authorization = `Bearer ${userToken}`

//     return originalConfig
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export {
  client
}
