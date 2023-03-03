import { useNavigate } from 'react-router-dom'

const useLogout = () => {
  const navigate = useNavigate()

  const onClick = () => {
    localStorage.removeItem('accessToken')
    navigate('/signin')
  }

  return { onClick }
}

export default useLogout
