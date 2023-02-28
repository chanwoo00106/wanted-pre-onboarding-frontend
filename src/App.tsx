import { Routes, Route } from 'react-router-dom'
import * as P from '@/pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<P.NotFoundPage />} />
    </Routes>
  )
}

export default App
