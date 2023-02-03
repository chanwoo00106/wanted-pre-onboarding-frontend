import TodoType from '../../type/common/TodoType'

interface Props {
  todo: TodoType
}

const Todo = ({ todo }: Props) => {
  return (
    <li>
      <h4>{todo.todo}</h4>
    </li>
  )
}

export default Todo
