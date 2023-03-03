import TodoType from './TodoType'

interface TodoContextType {
  todos: TodoType[]
  addTodo: (newTodo: TodoType) => void
  removeTodo: (id: number) => void
  updateTodo: (newTodo: TodoType) => void
}

export default TodoContextType
