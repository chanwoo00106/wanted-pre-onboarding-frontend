import { useRef, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import signin from '../services/signin'
import signup from '../services/signup'

interface Props {
  type: string
}

const useAuth = ({ type }: Props) => {
  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    if (!username?.replace(/ /g, ''))
      return alert('이메일 값이 올바르지 않습니다')
    if (!password?.replace(/ /g, ''))
      return alert('비밀번호 값이 올바르지 않습니다')

    try {
      if (type === 'signin')
        await signin({
          username,
          password,
        })
      else
        await signup({
          username,
          password,
        })

      navigate(`/${type === 'signin' ? 'todo' : 'signin'}`)
    } catch (e) {
      alert(`${type === 'signin' ? '로그인' : '회원가입'}에 실패했습니다`)
    }
  }

  return {
    usernameRef,
    passwordRef,
    onSubmit,
  }
}

export default useAuth
