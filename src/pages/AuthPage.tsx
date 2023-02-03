import Auth from '../components/Auth'
import useTodos from '../hooks/useTodos'

const AuthPage = () => {
  useTodos()
  const type = window.location.pathname.slice(1, 7) as 'signin' | 'signup'
  return <Auth type={type} />
}

export default AuthPage
