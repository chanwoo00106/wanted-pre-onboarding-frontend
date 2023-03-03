import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useLoggedIn = () => {
  const navigate = useNavigate()
  const loginUrl = ['signin', 'signup']

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    const path = location.pathname.replace('/', '')

    if (token && loginUrl.includes(path)) navigate('/todo')
    if (!token && !loginUrl.includes(path)) navigate('/signin')
  }, [])
}

export default useLoggedIn
