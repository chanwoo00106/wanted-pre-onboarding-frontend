import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import TodoPage from './pages/TodoPage'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<AuthPage />} />
      <Route path='/signin' element={<AuthPage />} />
      <Route path='/todo' element={<TodoPage />} />
    </Routes>
  )
}

export default App
