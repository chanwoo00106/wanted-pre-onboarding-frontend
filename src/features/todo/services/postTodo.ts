import api from '@/lib/api'
import { TodoType } from '../types'

const postTodo = async (todo: string) => {
  try {
    const { data } = await api.post<TodoType>('/todos', { todo })
    return data
  } catch (e) {
    alert('할 일 추가 실패')
    return
  }
}

export default postTodo
