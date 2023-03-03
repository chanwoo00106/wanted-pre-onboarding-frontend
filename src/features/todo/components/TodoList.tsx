import useRemoveTodo from '../hooks/useRemoveTodo'
import useTodos from '../hooks/useTodos'

const TodoList = () => {
  const { todos } = useTodos()
  const { onClick } = useRemoveTodo()

  return (
    <ul
      style={{
        height: '80vh',
        overflowY: 'scroll',
      }}
    >
      {todos.map((i) => (
        <li key={i.id} style={{ display: 'flex', gap: '1rem' }}>
          <h3>{i.todo}</h3>
          <button onClick={() => onClick(i.id)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
