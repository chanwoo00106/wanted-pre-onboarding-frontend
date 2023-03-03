import LogoutBtn from '@/features/auth/components/LogoutBtn'
import AddTodoForm from '@/features/todo/components/AddTodoForm'
import TodoList from '@/features/todo/components/TodoList'

const TodoPage = () => {
  return (
    <div>
      <LogoutBtn />
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default TodoPage
