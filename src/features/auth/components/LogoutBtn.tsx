import useLogout from '../hooks/useLogout'

const LogoutBtn = () => {
  const { onClick } = useLogout()

  return (
    <button type='button' onClick={onClick}>
      로그아웃
    </button>
  )
}

export default LogoutBtn
