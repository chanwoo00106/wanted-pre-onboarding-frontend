import { useEffect, useState } from 'react'
import Todos from '../components/Todos'
import useLoggedIn from '../hooks/useLoggedIn'
import useQuery from '../hooks/useQuery'
import TodoType from '../type/common/TodoType'
import TodoContext from '../context/todoContext'

const TodoPage = () => {
  useLoggedIn()

  const [todos, setTodos] = useState<TodoType[]>([])
  const [query, data] = useQuery<TodoType[]>({
    method: 'get',
    url: '/todos',
  })

  useEffect(() => {
    query()
  }, [])

  useEffect(() => {
    if (data) setTodos(data)
  }, [data])

  if (!data) return <h1>Loading...</h1>

  return (
    <TodoContext.Provider value={{ todos, setTodos, query }}>
      <Todos />
    </TodoContext.Provider>
  )
}

export default TodoPage
