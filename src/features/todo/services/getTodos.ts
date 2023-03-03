import api from '@/lib/api'
import { TodoType } from '../types'

const getTodos = async () => {
  try {
    const { data } = await api.get<TodoType[]>('/todos')
    return data
  } catch (e) {
    alert('할 일 정보 요청에 실패')
    return
  }
}

export default getTodos
