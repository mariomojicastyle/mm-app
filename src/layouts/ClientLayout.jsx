// src/layouts/ClientLayout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx'; // Importamos el hook para el Logout

const ClientLayout = () => {
    // Obtenemos las funciones de autenticación y el usuario
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/login'); // Redirigir a login después de cerrar sesión
    };

    return (
        // Estructura principal usando flexbox para el layout de sidebar y contenido
        <div className="flex h-screen bg-gray-100">
            
            {/* Sidebar de Navegación del Cliente */}
            <div className="w-64 bg-gray-800 text-white flex flex-col p-4 shadow-xl">
                <div className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
                    MM-Panel
                </div>

                <nav className="flex-grow">
                    <p className="text-sm font-semibold mb-3 text-gray-400">
                        Hola, {user?.email || 'Cliente'}
                    </p>
                    <a 
                        href="/dashboard" 
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-green-400"
                    >
                        Proyectos
                    </a>
                    <a 
                        href="/dashboard/invoices" // Ruta futura
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-green-400"
                    >
                        Facturas
                    </a>
                </nav>

                {/* Botón de Cierre de Sesión */}
                <button
                    onClick={handleLogout}
                    className="mt-auto py-2.5 px-4 rounded text-sm bg-red-600 hover:bg-red-700 transition duration-200"
                >
                    Cerrar Sesión
                </button>
            </div>
            
            {/* Contenido Principal */}
            <main className="flex-grow p-8 overflow-y-auto">
                {/* Outlet renderiza el componente de la ruta hija: DashboardPage */}
                <Outlet />
            </main>
        </div>
    );
};

export default ClientLayout;