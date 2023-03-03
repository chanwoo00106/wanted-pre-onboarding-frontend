import { TodoContextType } from '../types'
import { createContext, ReactNode, useState } from 'react'
import { TodoType } from '../types'

const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
})

interface Props {
  children: ReactNode
}

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const addTodo = (newTodo: TodoType) => {
    setTodos((todo) => [...todo, newTodo])
  }

  const updateTodo = (newTodo: TodoType) => {
    const idx = todos.findIndex((i) => i.id === newTodo.id)

    setTodos((todos) => {
      todos[idx] = newTodo
      return todos
    })
  }

  const removeTodo = (id: number) => {
    setTodos((todos) => todos.filter((i) => i.id !== id))
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, removeTodo, setTodos }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
