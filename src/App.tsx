import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/signin' element={<SignupPage />} />
    </Routes>
  )
}

export default App
