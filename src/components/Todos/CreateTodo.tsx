import { FormEvent, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import { QueryType } from '../../type/hooks/useQuery'
import Button from '../Common/Button'
import Input from '../Common/Input'
import * as S from './CreateTodo.style'

interface Props {
  query: QueryType
}

const CreateTodo = ({ query }: Props) => {
  const [todo, setTodo] = useState<string>('')
  const [createTodo] = useQuery({ method: 'post', url: '/todos' })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
