import useLogout from '../hooks/useLogout'

const LogoutBtn = () => {
  const { onClick } = useLogout()

  return (
    <button type='button' onClick={onClick}>
      ๋ก๊ทธ์์
    </button>
  )
}

export default LogoutBtn
