// src/components/common/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth.jsx';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // Muestra un mensaje de carga mientras se obtiene la sesión de Supabase
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Cargando autenticación...
      </div>
    );
  }

  // Si el usuario NO está autenticado, redirige a la página de Login.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario SÍ está autenticado, renderiza el componente hijo (el Layout del Cliente).
  return <Outlet />; 
};

export default ProtectedRoute;