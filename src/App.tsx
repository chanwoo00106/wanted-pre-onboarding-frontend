import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Todo from './pages/Todo'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<AuthPage />} />
      <Route path='/signin' element={<AuthPage />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  )
}

export default App
