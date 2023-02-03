import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers['Authorization'] = `Bearer ${token}`

  return config
})

api.interceptors.response.use(
  (res) => {
    if (res.config.url === '/auth/signin')
      localStorage.setItem('access_token', res.data.access_token)

    return res
  },
  (e) => {
    if (!(e instanceof AxiosError)) return Promise.reject(e)
    if (e.code === '401') window.location.href = '/signin'
    return Promise.reject(e)
  }
)

export default api
