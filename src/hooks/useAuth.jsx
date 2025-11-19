// src/hooks/useAuth.js
import React, { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from '../lib/supabaseClient'; // Importamos el cliente que creamos

// 1. Crear el Contexto
const AuthContext = createContext();

// 2. Crear el Proveedor (Wrapper para la aplicación)
export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Lógica de Supabase: Verificar y escuchar el estado de la sesión
  useEffect(() => {
    // 1. Obtener la sesión inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Escuchar cambios de autenticación (login, logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    // Limpieza al desmontar el componente
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Funciones de Autenticación
  const signIn = async ({ email, password }) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  // El objeto de valor que se proporciona al Context
  const value = {
    session,
    user: session?.user ?? null,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 3. Crear el Hook para consumir el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};