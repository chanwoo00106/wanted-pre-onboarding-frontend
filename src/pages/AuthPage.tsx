import Auth from '../components/Auth'
import useLoggedIn from '../hooks/useLoggedIn'

const AuthPage = () => {
  useLoggedIn()
  const type = window.location.pathname.slice(1, 7) as 'signin' | 'signup'
  return <Auth type={type} />
}

export default AuthPage
