import axios from 'axios'
import Cookie from 'js-cookie'

const { VUE_APP_API_URL } = process.env

const client = axios.create({
  baseURL: VUE_APP_API_URL
})

client.interceptors.request.use(
  requestConfig => {
    const originalConfig = requestConfig
    const userToken = Cookie.get('token')
    originalConfig.headers.Authorization = `Bearer ${userToken}`

    return originalConfig
  },
  error => {
    return Promise.reject(error)
  }
)

export {
  client
}
