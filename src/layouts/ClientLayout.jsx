import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx'; // Importamos el hook para el logout

const ClientLayout = () => {
  // Obtenemos las funciones de autenticación y el usuario
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  // Obtenemos las funciones de autenticación y el usuario
  const handleLogout = async () => {
    await signOut(); // Ejecutar la función de cierre de sesión
    navigate('/login'); // Redirigir a login después de cerrar sesión
  };

  return (
    // Estructura principal, reemplazo de "h-screen bg-gray-100"
    <div className="client-layout">
      {/* Sidebar de Navegación del Cliente, reemplazo de clases Tailwind */}
      <div className="sidebar">
        {/* Encabezado del Sidebar, reemplazo de clases Tailwind */}
        <div className="sidebar-header">
          <p className="sidebar-logo-text">MM-Panel</p>
          <p className="user-email-text">Hola, **{user?.email || '[Cliente]'}**</p>
        </div>

        {/* Contenedor de la Navegación */}
        <nav className="nav-container">
          
          <a
            href="/dashboard"
            className="nav-link" // Reemplazo de clases Tailwind (py-2.5 rounded duration-200...)
          >
            Dashboard
          </a>

          <a
            href="/dashboard/invoices" // Ruta futura
            className="nav-link" // Reemplazo de clases Tailwind
          >
            Facturas
          </a>

          {/* Botón de Logout/Cerrar Sesión */}
          <button 
            onClick={handleLogout} 
            className="logout-button" // Reemplazo de clases Tailwind (flex-grow)
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
      
      {/* Contenido Principal */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;