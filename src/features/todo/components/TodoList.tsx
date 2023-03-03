import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import useTodos from '../hooks/useTodos'

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  useTodos()

  return (
    <ul>
      {todos.map((i) => (
        <li key={i.id}>{i.todo}</li>
      ))}
    </ul>
  )
}

export default TodoList
