import { useState, FormEvent, ChangeEvent } from 'react'
import { SubmitType } from '@/type/components/Signup'
import useQuery from '@/hooks/useQuery'

const Signup = () => {
  const [query, , isLoading, isFail] = useQuery({
    method: 'post',
    url: '/auth/signup',
  })
  const [form, setForm] = useState<SubmitType>({ email: '', password: '' })

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    await query(form)

    if (isFail) alert('회원가입 실패')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name='email' data-testid='email-input' />
        <input
          onChange={onChange}
          minLength={8}
          type='password'
          data-testid='password-input'
        />
        <button type='submit' data-testid='signup-button'>
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Signup
