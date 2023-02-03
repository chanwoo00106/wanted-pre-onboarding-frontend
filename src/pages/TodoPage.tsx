import { useEffect } from 'react'
import Todos from '../components/Todos'
import useLoggedIn from '../hooks/useLoggedIn'
import useQuery from '../hooks/useQuery'
import TodoType from '../type/common/TodoType'

const TodoPage = () => {
  useLoggedIn()

  const [query, todos] = useQuery<TodoType[]>({
    method: 'get',
    url: '/todos',
  })

  useEffect(() => {
    query()
  }, [])

  if (!todos) return <h1>Loading...</h1>

  return <Todos todos={todos} query={query} />
}

export default TodoPage
