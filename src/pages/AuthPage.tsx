import AuthForm from '@/features/auth/components/AuthForm'
import useLoggedIn from '@/hooks/useLoggedIn'
import { Link } from 'react-router-dom'

const AuthPage = () => {
  useLoggedIn()
  const type = window.location.pathname.replace('/', '')

  return (
    <div>
      <h2>{type === 'signin' ? '로그인' : '회원가입'}</h2>

      <AuthForm type={type} />

      <Link to={`/${type === 'signin' ? 'signup' : 'signin'}`}>
        {type === 'signin' ? '회원가입' : '로그인'}
      </Link>
    </div>
  )
}

export default AuthPage
