import useTodos from '../hooks/useTodos'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useTodos()

  return (
    <ul
      style={{
        height: '80vh',
        overflowY: 'scroll',
      }}
    >
      {todos.map((i) => (
        <TodoItem key={i.id} todo={i} />
      ))}
    </ul>
  )
}

export default TodoList
