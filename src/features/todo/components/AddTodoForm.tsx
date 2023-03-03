import useAddTodo from '../hooks/useAddTodo'

const AddTodoForm = () => {
  const { todoRef, onSubmit } = useAddTodo()

  return (
    <form onSubmit={onSubmit}>
      <input type='text' ref={todoRef} />
      <button type='submit'>추가</button>
    </form>
  )
}

export default AddTodoForm
