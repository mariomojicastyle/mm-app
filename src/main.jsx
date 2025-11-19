// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// 1. Páginas Públicas
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx' 

// 2. Páginas y Layouts del Cliente (Portal B2B)
import DashboardPage from './pages/DashboardPage.jsx' 
import ClientLayout from './layouts/ClientLayout.jsx' 

// 3. Auth y Protección
import { AuthProvider } from './hooks/useAuth.jsx' 
import ProtectedRoute from './components/common/ProtectedRoute.jsx' 

// 4. Productos (Portal B2C)
import ProductPage from './pages/ProductPage.jsx'

// Definimos las rutas principales de la aplicación
const router = createBrowserRouter([


  // RUTAS PÚBLICAS
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/tienda", // <-- RUTA DE LA TIENDA B2C
    element: <ProductPage />,
  },
  
  // GRUPO DE RUTAS PROTEGIDAS
  {
    // Usa ProtectedRoute como el nivel superior (Middleware)
    element: <ProtectedRoute />, 
    children: [
      {
        // La ruta "/dashboard" usa ClientLayout como padre
        path: "/dashboard", 
        element: <ClientLayout />, 
        children: [
            {
                // El índice de /dashboard es el DashboardPage
                index: true,
                element: <DashboardPage />, 
            },
            // Aquí agregaremos rutas hijas como /dashboard/invoices
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El AuthProvider debe envolver TODA la aplicación */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)