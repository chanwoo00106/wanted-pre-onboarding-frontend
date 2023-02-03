import { FormEvent, useContext, useState } from 'react'
import todoContext from '../../context/todoContext'
import useQuery from '../../hooks/useQuery'
import Button from '../Common/Button'
import Input from '../Common/Input'
import * as S from './CreateTodo.style'

const CreateTodo = () => {
  const [todo, setTodo] = useState<string>('')
  const [createTodo, , isLoading] = useQuery({ method: 'post', url: '/todos' })
  const { query } = useContext(todoContext)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    await createTodo({ todo })
    await query()
    setTodo('')
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Todo 생성'
      />
      <Button>생성하기</Button>
    </S.Form>
  )
}

export default CreateTodo
