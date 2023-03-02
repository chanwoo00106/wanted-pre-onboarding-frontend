import api from '@/lib/api'

interface Form {
  username: string
  password: string
}

const signup = async (form: Form) => {
  await api.post('/auth/signup', form)
}

export default signup
