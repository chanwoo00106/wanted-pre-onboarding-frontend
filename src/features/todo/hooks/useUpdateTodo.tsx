import { FormEvent, useContext, useRef } from 'react'
import TodoContext from '../context/TodoContext'
import putTodo from '../services/putTodo'
import { TodoType } from '../types'

interface Props {
  onClose: () => void
  todo: TodoType
}

const useUpdateTodo = ({ todo, onClose }: Props) => {
  const { updateTodo } = useContext(TodoContext)
  const todoRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = todoRef.current?.value
    if (!value) return

    const result = await putTodo({ ...todo, todo: value })
    if (result) updateTodo(result)

    onClose()
  }

  return { onSubmit, todoRef }
}

export default useUpdateTodo
