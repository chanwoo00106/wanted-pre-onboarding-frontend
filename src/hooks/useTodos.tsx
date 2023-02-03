import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'

const useTodos = () => {
  const navigate = useNavigate()
  const [query, data, isLoading, isFail] = useQuery({
    method: 'get',
    url: '/todos',
  })
  if (!localStorage.getItem('access_token')) navigate('/signin')

  useEffect(() => {
    if (isFail) navigate('/signin')
  }, [isFail])

  useEffect(() => {
    if (data) navigate('/todo')
  }, [data])

  useEffect(() => {
    ;(async () => {
      await query()
    })()
  }, [])

  return [data, isLoading]
}

export default useTodos
