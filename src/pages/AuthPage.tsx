const AuthPage = () => {
  const type = window.location.pathname.replace('/', '')

  return (
    <div>
      <h2>{type === 'signin' ? '로그인' : '회원가입'}</h2>
    </div>
  )
}

export default AuthPage
