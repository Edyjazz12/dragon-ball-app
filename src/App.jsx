import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Detalle from './pages/Detalle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/personaje/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App