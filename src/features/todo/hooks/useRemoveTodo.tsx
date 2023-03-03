import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import deleteTodo from '../services/deleteTodo'

const useRemoveTodo = () => {
  const { removeTodo } = useContext(TodoContext)

  const onClick = async (id: number) => {
    const result = await deleteTodo(id)

    if (result) removeTodo(id)
  }

  return { onClick }
}

export default useRemoveTodo
