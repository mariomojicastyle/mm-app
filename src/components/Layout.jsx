import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Layout = () => {
  const { user } = useAuth()

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER / NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tighter">
                MM<span className="text-green-600">Design</span>
              </Link>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/servicios" className="text-gray-600 hover:text-green-600 font-medium transition">Servicios</Link>
              <Link to="/product" className="text-gray-600 hover:text-green-600 font-medium transition">Tienda 3D</Link>
              <Link to="/contacto" className="text-gray-600 hover:text-green-600 font-medium transition">Contacto</Link>
              
              {/* Botón dinámico Login/Dashboard */}
              {user ? (
                <Link to="/dashboard" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                  Mi Panel
                </Link>
              ) : (
                <Link to="/login" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition">
                  Acceso Clientes
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO DINÁMICO (Aquí cargan las páginas) */}
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mario Mojica Design</h3>
            <p className="text-gray-400 text-sm">
              Innovación en mobiliario RTA y estructuras de Guadua.
              Diseño sostenible para el futuro.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-200">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/servicios" className="hover:text-white">Servicios de Diseño</Link></li>
              <li><Link to="/product" className="hover:text-white">Configurador 3D</Link></li>
              <li><Link to="/login" className="hover:text-white">Portal B2B</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-200">Contacto</h4>
            <p className="text-gray-400 text-sm">Buga, Valle del Cauca</p>
            <p className="text-gray-400 text-sm">info@mariomojica.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Mario Mojica Design. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

export default Layout