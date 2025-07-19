import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from './components/query/QueryProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactQueryProvider>
)
