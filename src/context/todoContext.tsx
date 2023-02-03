import { Dispatch, SetStateAction, createContext } from 'react'
import TodoType from '../type/common/TodoType'

const todoContext = createContext<{
  todos: TodoType[]
  setTodos: Dispatch<SetStateAction<TodoType[]>>
  query: () => Promise<void>
}>({
  todos: [],
  setTodos: () => {
    return
  },
  query: async () => {
    return
  },
})

export default todoContext
