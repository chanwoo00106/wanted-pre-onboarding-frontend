import useUpdateTodo from '../hooks/useUpdateTodo'
import { TodoType } from '../types'

interface Props {
  todo: TodoType
  onClose: () => void
}

const UpdateTodoForm = ({ todo, onClose }: Props) => {
  const { onSubmit, todoRef } = useUpdateTodo({ todo, onClose })

  return (
    <form onSubmit={onSubmit}>
      <input defaultValue={todo.todo} ref={todoRef} type='text' />
      <button type='button' onClick={onClose}>
        취소
      </button>
      <button type='submit'>변경</button>
    </form>
  )
}

export default UpdateTodoForm
