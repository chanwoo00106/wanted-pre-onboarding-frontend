import useRemoveTodo from '../hooks/useRemoveTodo'
import useShow from '../hooks/useShow'
import { TodoType } from '../types'
import UpdateTodoForm from './UpdateTodoForm'

interface Props {
  todo: TodoType
}

const TodoItem = ({ todo }: Props) => {
  const { onClick } = useRemoveTodo()
  const { isShow, onShow, onHide } = useShow()

  if (isShow) return <UpdateTodoForm todo={todo} onClose={onHide} />

  return (
    <li style={{ display: 'flex', gap: '1rem' }}>
      <h3>{todo.todo}</h3>
      <button onClick={() => onClick(todo.id)}>삭제</button>
      <button onClick={onShow}>수정</button>
    </li>
  )
}

export default TodoItem
