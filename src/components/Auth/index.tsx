import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useQuery from '../../hooks/useQuery'
import { SubmitType } from '../../type/components/Signup'

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
    if (form.password.length > 8) {
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
    <div>
      <h1>{koreanType}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name='email' data-testid='email-input' />
        <input
          onChange={onChange}
          name='password'
          type='password'
          data-testid='password-input'
        />
        <button type='submit' disabled={disableBtn} data-testid='signup-button'>
          {koreanType}
        </button>
      </form>
    </div>
  )
}

export default Auth
