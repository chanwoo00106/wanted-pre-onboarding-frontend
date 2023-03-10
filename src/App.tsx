import { Routes, Route } from 'react-router-dom'
import * as P from '@/pages'

function App() {
  return (
    <Routes>
      <Route path='/todo' element={<P.TodoPage />} />
      <Route path='/signin' element={<P.AuthPage />} />
      <Route path='/signup' element={<P.AuthPage />} />
      <Route path='*' element={<P.NotFoundPage />} />
    </Routes>
  )
}

export default App
