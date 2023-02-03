import TodoType from '../../type/common/TodoType'
import Todo from './Todo'

interface Props {
  todos: TodoType[]
}

const Todos = ({ todos }: Props) => {
  return (
    <div>
      <ul>
        {todos.map((i) => (
          <Todo key={i.id} todo={i} />
        ))}
      </ul>
    </div>
  )
}

export default Todos
