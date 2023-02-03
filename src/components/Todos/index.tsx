import CreateTodo from './CreateTodo'
import Todo from './Todo'
import * as S from './style'
import { useContext } from 'react'
import todoContext from '../../context/todoContext'

const Todos = () => {
  const { todos } = useContext(todoContext)
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
