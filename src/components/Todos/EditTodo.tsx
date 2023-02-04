import { FormEvent, useContext, useState } from 'react'
import todoContext from '../../context/todoContext'
import useQuery from '../../hooks/useQuery'
import TodoType from '../../type/common/TodoType'
import Button from '../Common/Button'
import Input from '../Common/Input'
import Checkbox from './Checkbox'
import * as TodoS from './Todo.style'

interface Props {
  todo: TodoType
  editCancel: () => void
}

const EditTodo = (props: Props) => {
  const [todo, setTodo] = useState<string>(props.todo.todo)
  const { query } = useContext(todoContext)
  const [update, , isLoading] = useQuery({
    method: 'put',
    url: `/todos/${props.todo.id}`,
  })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    await update({ todo, isCompleted: props.todo.isCompleted })
    await query()
    props.editCancel()
  }

  return (
    <form onSubmit={onSubmit}>
      <TodoS.List>
        <TodoS.TodoInfo>
          <Checkbox todo={props.todo} />
          <Input
            placeholder='할 일 수정'
            data-testid='modify-input'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <TodoS.TodoName>{}</TodoS.TodoName>
        </TodoS.TodoInfo>
        <TodoS.Buttons>
          <Button data-testid='submit-button'>제출</Button>
          <Button data-testid='cancel-button' onClick={props.editCancel}>
            취소
          </Button>
        </TodoS.Buttons>
      </TodoS.List>
    </form>
  )
}

export default EditTodo
