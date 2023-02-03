import TodoType from '../../type/common/TodoType'
import CreateTodo from './CreateTodo'
import Todo from './Todo'
import * as S from './style'

interface Props {
  todos: TodoType[]
}

const Todos = ({ todos }: Props) => {
  return (
    <S.Wrapper>
      <CreateTodo />
      {todos.length ? (
        <ul>
          {todos.map((i) => (
            <Todo key={i.id} todo={i} />
          ))}
        </ul>
      ) : null}
    </S.Wrapper>
  )
}

export default Todos
