import api from '@/lib/api'
import { TodoType } from '../types'

const putTodo = async (newTodo: TodoType) => {
  try {
    const { data } = await api.put<TodoType>(`/todos/${newTodo.id}`, {
      todo: newTodo.todo,
      isCompleted: newTodo.isCompleted,
    })

    return data
  } catch (e) {
    alert('할 일 수정에 실패했습니다')
  }
}

export default putTodo
