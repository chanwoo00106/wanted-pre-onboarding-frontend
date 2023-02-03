import { FormEvent, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import Button from '../Common/Button'
import Input from '../Common/Input'
import * as S from './CreateTodo.style'

const CreateTodo = () => {
  const [todo, setTodo] = useState<string>('')
  const [query] = useQuery({ method: 'post', url: '/todos' })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await query({ todo })
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
