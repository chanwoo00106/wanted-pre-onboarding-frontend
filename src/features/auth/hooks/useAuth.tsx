import { useRef, FormEvent } from 'react'

interface Props {
  type: string
}

const useAuth = ({}: Props) => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    })
  }

  return {
    usernameRef,
    passwordRef,
    onSubmit,
  }
}

export default useAuth
