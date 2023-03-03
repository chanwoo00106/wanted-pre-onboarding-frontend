import api from '@/lib/api'

const deleteTodo = async (id: number) => {
  try {
    await api.delete(`/todos/${id}`)
    return true
  } catch (e) {
    alert('할 일 삭제 실패')
    return false
  }
}

export default deleteTodo
