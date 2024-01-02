import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import PageLayout from './layout/PageLayout'

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<AuthPage />} path='/auth' />
      </Routes>    
    </PageLayout>
  )
}

export default App
