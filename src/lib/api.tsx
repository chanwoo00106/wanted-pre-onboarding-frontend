import axios, { isAxiosError } from 'axios'

const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers['Authorization'] = `Bearer ${token}`

  return config
})

api.interceptors.response.use(
  (res) => {
    const token = res.data.access_token
    if (token) localStorage.setItem('accessToken', token)

    return res
  },
  (e) => {
    if (isAxiosError(e) && e.response?.status === 401) location.href = '/'

    return Promise.reject(e)
  }
)

export default api
