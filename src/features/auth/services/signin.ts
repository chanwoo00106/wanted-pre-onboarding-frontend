import api from '@/lib/api'

interface Form {
  username: string
  password: string
}

const signin = async (form: Form) => {
  await api.post('/auth/signin', form)
}

export default signin
