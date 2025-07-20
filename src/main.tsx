import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from './components/query/QueryProvider.tsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </ReactQueryProvider>
)
