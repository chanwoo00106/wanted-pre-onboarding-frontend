import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TodoProvider } from './features/todo/context/TodoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <TodoProvider>
      <App />
    </TodoProvider>
  </BrowserRouter>
)
