import axios, { isAxiosError } from 'axios'

const API = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers['Authorization'] = `Bearer ${token}`

  return config
})

API.interceptors.response.use(
  (res) => res,
  (e) => {
    if (isAxiosError(e) && e.response?.status === 401) location.href = '/'

    return Promise.reject(e)
  }
)

export default API
