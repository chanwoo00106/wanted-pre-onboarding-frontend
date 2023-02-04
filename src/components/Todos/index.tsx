import AddTodo from './AddTodo'
import Todo from './Todo'
import * as S from './style'
import { useContext } from 'react'
import todoContext from '../../context/todoContext'

const Todos = () => {
  const { todos } = useContext(todoContext)
  return (
    <S.Wrapper>
      <S.Status>
        <S.CompletedTodo>
          {todos.filter((i) => i.isCompleted).length}
        </S.CompletedTodo>
        / <span>{todos.length}</span>
      </S.Status>

      <AddTodo />

      {todos.length ? (
        <S.TodoList>
          {todos.map((i) => (
            <Todo key={i.id} todo={i} />
          ))}
        </S.TodoList>
      ) : null}
    </S.Wrapper>
  )
}

export default Todos
