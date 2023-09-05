import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
