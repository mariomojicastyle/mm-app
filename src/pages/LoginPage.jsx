import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { signIn, loading } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    if (!email || !password) {
      setError('Por favor, ingresa correo y contraseña.');
      return;
    }

    const { error: authError } = await signIn({ email, password });

    if (authError) {
      console.error(authError.message);
      setError('Error al iniciar sesión: Credenciales incorrectas o usuario no existe.');
    } else {
      // Navegación exitosa al Dashboard
      navigate('/dashboard'); 
    }
  };

  return (
    // CONTENEDOR PRINCIPAL: Fondo gris suave, altura completa y centrado total
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* CAJA DEL FORMULARIO: Blanca, con sombra profunda (shadow-2xl) y bordes redondeados */}
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Portal Cliente B2B
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ingresa para gestionar tus proyectos de diseño y pedidos.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Mensaje de Error: Fondo rojo suave con texto rojo oscuro */}
          {error && (
            <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email" className="sr-only">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading 
                  ? 'bg-green-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              }`}
            >
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
            <a href="#" className="font-medium text-green-600 hover:text-green-500">
                ¿Olvidaste tu contraseña?
            </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;