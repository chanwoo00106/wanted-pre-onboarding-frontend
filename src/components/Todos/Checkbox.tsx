import { useContext, useState } from 'react'
import todoContext from '../../context/todoContext'
import useQuery from '../../hooks/useQuery'
import TodoType from '../../type/common/TodoType'

interface Props {
  todo: TodoType
}

const Checkbox = ({ todo }: Props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted)
  const { query } = useContext(todoContext)
  const [updateTodo, , isLoading] = useQuery({
    method: 'put',
    url: `/todos/${todo.id}`,
  })

  const onClick = async () => {
    if (isLoading) return

    await updateTodo({ todo: todo.todo, isCompleted: !isCompleted })
    setIsCompleted((isCompleted) => !isCompleted)

    query()
  }

  return <input type='checkbox' checked={isCompleted} onChange={onClick} />
}

export default Checkbox
