import TodoType from '../../type/common/TodoType'
import * as S from './Todo.style'
import EditTodo from './EditTodo'
import { MdEdit } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { useContext, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import todoContext from '../../context/todoContext'

interface Props {
  todo: TodoType
}

const Todo = ({ todo }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { query } = useContext(todoContext)
  const [deleteTodo, , isLoading] = useQuery({
    method: 'delete',
    url: `todos/${todo.id}`,
  })
  const onDelete = async () => {
    if (isLoading) return
    await deleteTodo()
    query()
  }

  if (isEdit)
    return (
      <EditTodo
        id={todo.id}
        todo={todo.todo}
        isCompleted={todo.isCompleted}
        editCancel={() => setIsEdit(false)}
      />
    )

  return (
    <S.List>
      <S.TodoInfo>
        <input type='checkbox' />
        <S.TodoName>{todo.todo}</S.TodoName>
      </S.TodoInfo>
      <S.Buttons>
        <S.Button data-testid='modify-button' onClick={() => setIsEdit(true)}>
          <MdEdit size='1.5rem' fill='#313131' />
        </S.Button>
        <S.Button data-testid='delete-button' onClick={onDelete}>
          <FaTrash size='1.5rem' fill='#313131' />
        </S.Button>
      </S.Buttons>
    </S.List>
  )
}

export default Todo
