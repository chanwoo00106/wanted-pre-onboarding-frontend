import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TodoType from '../type/common/TodoType'
import useQuery from './useQuery'

const useTodos = () => {
  const navigate = useNavigate()
  const [query, data, , isFail] = useQuery<TodoType[]>({
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

  return [data]
}

export default useTodos
