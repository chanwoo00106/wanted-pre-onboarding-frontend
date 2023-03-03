import LogoutBtn from '@/features/auth/components/LogoutBtn'
import AddTodoForm from '@/features/todo/components/AddTodoForm'
import TodoList from '@/features/todo/components/TodoList'
import useLoggedIn from '@/hooks/useLoggedIn'

const TodoPage = () => {
  useLoggedIn()

  return (
    <div>
      <LogoutBtn />
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default TodoPage
