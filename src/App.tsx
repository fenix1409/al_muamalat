import './App.css'
import Header from './components/sections/Header'
import DashboardRoutes from './routes'
import LoginRoutes from './routes/LoginRoutes'

function App() {
  return (
    <>
    <Header/>
      <DashboardRoutes />
      <LoginRoutes/>
    </>
  )
}

export default App
