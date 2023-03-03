import { FormEvent, useContext, useRef } from 'react'
import TodoContext from '../context/TodoContext'
import postTodo from '../services/postTodo'

const useAddTodo = () => {
  const todoRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useContext(TodoContext)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todo = todoRef.current?.value
    if (!todo?.replace(/ /g, '')) return

    const data = await postTodo(todo)

    if (data) addTodo(data)
    if (todoRef.current) todoRef.current.value = ''
  }

  return { todoRef, onSubmit }
}

export default useAddTodo
