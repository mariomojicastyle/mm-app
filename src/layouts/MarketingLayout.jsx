// src/layouts/MarketingLayout.jsx (Código CORREGIDO)
import React from 'react';
// Eliminamos la importación: import { Outlet } from 'react-router-dom';

// El layout ahora recibe 'children' (el contenido de la Landing Page) como prop
const MarketingLayout = ({ children }) => { 
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER B2B/B2C */}
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MM-App (Muebles Guadua)</h1>
          <nav>
            <a href="/" className="px-3 hover:text-green-400">Inicio</a>
            <a href="/tienda" className="px-3 hover:text-green-400">Tienda B2C</a>
            <a href="/login" className="px-3 hover:text-green-400 border-l ml-3 pl-3">Portal Cliente (B2B)</a>
          </nav>
        </div>
      </header>

      {/* Contenido de la página (El contenido pasado como children) */}
      <main className="flex-grow">
        {children} {/* <-- Renderiza el contenido aquí */}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} MM-App. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default MarketingLayout;