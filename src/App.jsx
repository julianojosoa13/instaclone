import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<AuthPage />} path='/auth' />
      </Routes>      
    </>
  )
}

export default App
