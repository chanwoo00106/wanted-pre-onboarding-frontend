import Todos from '../components/Todos'
import useTodos from '../hooks/useTodos'

const TodoPage = () => {
  const [data] = useTodos()

  if (!data) return <h1>Loading...</h1>

  return <Todos todos={data} />
}

export default TodoPage
