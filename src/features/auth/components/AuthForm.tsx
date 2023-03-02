import useAuth from '../hooks/useAuth'

interface Props {
  type: string
}

const AuthForm = ({ type }: Props) => {
  const { emailRef, passwordRef, onSubmit } = useAuth({ type })

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <input type='email' ref={emailRef} />
      <input type='password' ref={passwordRef} />
      <button>{type === 'signin' ? '로그인' : '회원가입'}</button>
    </form>
  )
}

export default AuthForm
