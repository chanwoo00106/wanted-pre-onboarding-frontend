import AuthPage from '../components/AuthPage'

const SignupPage = () => {
  const type = window.location.pathname.slice(1, 7) as 'signin' | 'signup'
  return <AuthPage type={type} />
}

export default SignupPage
