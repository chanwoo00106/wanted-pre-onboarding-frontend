import { useContext, useEffect } from 'react'
import TodoContext from '../context/TodoContext'
import getTodos from '../services/getTodos'

const useTodos = () => {
  const { todos, setTodos } = useContext(TodoContext)

  useEffect(() => {
    ;(async () => {
      const todos = await getTodos()
      if (todos) {
        setTodos(() => todos)
      }
    })()
  }, [])

  return { todos }
}

export default useTodos
