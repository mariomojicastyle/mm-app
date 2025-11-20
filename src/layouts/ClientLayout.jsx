import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

const ClientLayout = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    // CONTENEDOR PRINCIPAL: Flexbox para poner sidebar y contenido lado a lado
    <div className="flex h-screen bg-gray-100">
      
      {/* SIDEBAR: Ancho fijo (w-64), fondo oscuro, texto blanco */}
      <div className="w-64 bg-gray-800 text-white flex flex-col shadow-xl">
        
        {/* Header del Sidebar */}
        <div className="h-16 flex items-center px-6 border-b border-gray-700 bg-gray-900">
          <h1 className="text-xl font-bold tracking-wider text-green-500">MM-Panel</h1>
        </div>

        {/* Información del Usuario */}
        <div className="p-6 border-b border-gray-700">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Bienvenido</p>
          <p className="text-sm font-medium truncate" title={user?.email}>
            {user?.email || 'Cliente'}
          </p>
        </div>

        {/* Navegación */}
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          <a 
            href="/dashboard" 
            className="block px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="/dashboard/proyectos" 
            className="block px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            Mis Proyectos
          </a>
          <a 
            href="/dashboard/facturas" 
            className="block px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            Facturación
          </a>
        </nav>

        {/* Footer del Sidebar (Botón Salir) */}
        <div className="p-4 border-t border-gray-700 bg-gray-900">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
            <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ClientLayout;