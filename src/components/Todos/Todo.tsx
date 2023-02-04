import TodoType from '../../type/common/TodoType'
import Button from '../Common/Button'
import * as S from './Todo.style'

interface Props {
  todo: TodoType
}

const Todo = ({ todo }: Props) => {
  return (
    <S.List>
      <input type='checkbox' />
      <S.TodoName>{todo.todo}</S.TodoName>
      <S.Buttons>
        <Button data-testid='modify-button'>수정</Button>
        <Button data-testid='delete-button'>삭제</Button>
      </S.Buttons>
    </S.List>
  )
}

export default Todo
