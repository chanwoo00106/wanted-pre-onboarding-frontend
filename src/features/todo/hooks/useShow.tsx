import { useState } from 'react'

const useShow = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const onShow = () => setIsShow(true)
  const onHide = () => setIsShow(false)

  return { isShow, onShow, onHide }
}

export default useShow
