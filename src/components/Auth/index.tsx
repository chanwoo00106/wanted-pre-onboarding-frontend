import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useQuery from '../../hooks/useQuery'
import { SubmitType } from '../../type/components/Auth'
import Button from '../Common/Button'
import Input from '../Common/Input'
import * as S from './style'

interface Props {
  type: 'signin' | 'signup'
}

const Auth = ({ type }: Props) => {
  const [query, , isLoading, isFail] = useQuery({
    method: 'post',
    url: `/auth/${type}`,
  })
  const [disableBtn, setDisableBtn] = useState<boolean>(false)
  const koreanType = type === 'signin' ? '로그인' : '회원가입'
  const [form, setForm] = useState<SubmitType>({ email: '', password: '' })
  const navigate = useNavigate()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    setDisableBtn(false)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    if (!form.email.includes('@')) {
      alert('이메일 형식에 어긋납니다')
      setDisableBtn(true)
      return
    }
    if (form.password.length < 8) {
      alert('비밀번호는 8글자 이상입니다')
      setDisableBtn(true)
      return
    }

    await query(form)

    if (isFail) {
      alert(`${koreanType} 실패`)
      return
    }

    navigate(type === 'signin' ? '/todo' : '/signin')
  }

  return (
    <S.Wrapper>
      <h1>{koreanType}</h1>
      <S.Form onSubmit={onSubmit}>
        <Input
          placeholder='Email'
          onChange={onChange}
          name='email'
          data-testid='email-input'
        />
        <Input
          placeholder='Password'
          onChange={onChange}
          name='password'
          type='password'
          data-testid='password-input'
        />
        <Button type='submit' disabled={disableBtn} data-testid='signup-button'>
          {koreanType}
        </Button>
        <Link to={`/${type === 'signin' ? 'signup' : 'signin'}`}>
          {type === 'signin' ? '회원가입' : '로그인'}으로
        </Link>
      </S.Form>
    </S.Wrapper>
  )
}

export default Auth
