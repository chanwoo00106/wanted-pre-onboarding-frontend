import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useLoggedIn = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const url = window.location.pathname
    const authUrls = ['/signup', '/signin']

    if (!authUrls.includes(url) && !localStorage.getItem('access_token'))
      navigate('/signin')

    if (authUrls.includes(url) && localStorage.getItem('access_token'))
      navigate('/todo')
  }, [])
}

export default useLoggedIn
