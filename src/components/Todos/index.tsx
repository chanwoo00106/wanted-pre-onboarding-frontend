import TodoType from '../../type/common/TodoType'
import CreateTodo from './CreateTodo'
import Todo from './Todo'
import * as S from './style'
import { QueryType } from '../../type/hooks/useQuery'

interface Props {
  todos: TodoType[]
  query: QueryType
}

const Todos = ({ todos, query }: Props) => {
  return (
    <S.Wrapper>
      <CreateTodo query={query} />
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
