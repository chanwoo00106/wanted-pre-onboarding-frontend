import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/signin')
  }, [])
  return <h1>Not Found</h1>
}

export default NotFoundPage
