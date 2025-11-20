import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Placeholder components (luego los moveremos a sus archivos reales)
const Home = () => (
  <div style={{ padding: '20px' }}>
    <h1>Bienvenido a Mario Mojica Design</h1>
    <p>Selecciona tu portal:</p>
    <nav>
      <ul>
        <li><Link to="/product">Ir a Producto (B2C)</Link></li>
        <li><Link to="/login">Ir a Portal Clientes (B2B)</Link></li>
      </ul>
    </nav>
  </div>
)

const Login = () => <h2>Página de Login (Próximamente)</h2>
const Dashboard = () => <h2>Dashboard Privado (Próximamente)</h2>
const Product = () => <h2>Visor 3D (Próximamente)</h2>

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        
        {/* Rutas B2B */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App