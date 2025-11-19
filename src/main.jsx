// src/main.jsx (Temporalmente)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'

// Ruta temporal que no usa el MarketingLayout
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />, // Cargamos la página directamente
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)