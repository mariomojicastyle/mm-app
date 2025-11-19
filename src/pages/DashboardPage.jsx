// src/pages/DashboardPage.jsx (CORREGIDO y COMPLETO)
import React from 'react';
import { useProjects } from '../hooks/useProjects.jsx'; // <-- ¡Ahora con .jsx!

const DashboardPage = () => {
  // Usar el hook para obtener los datos y el estado
  const { projects, loading, error } = useProjects(); 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Resumen de Proyectos
      </h1>
      
      {/* -------------------- ESTADO DE CARGA Y ERROR -------------------- */}
      {loading && (
        <p className="text-blue-500 font-semibold">Cargando proyectos desde Supabase...</p>
      )}

      {error && (
        <div className="text-red-600 border border-red-300 p-3 mt-4">
          Error al cargar datos: {error}
          <p className="text-sm">Asegúrate que las Políticas de Seguridad (RLS) están configuradas correctamente.</p>
        </div>
      )}
      
      {/* -------------------- LISTA DE PROYECTOS -------------------- */}
      {!loading && projects && projects.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-3 border-b pb-2">Proyectos ({projects.length})</h2>
          {/* Mapea la lista de proyectos */}
          {projects.map((project) => (
            <div key={project.id} className="border-l-4 border-green-500 p-3 mb-2 bg-gray-50">
              {/* Asume que tu tabla 'Projects' tiene una columna 'name' y 'id' */}
              <h3 className="font-bold">{project.name || 'Proyecto sin nombre'}</h3> 
              <p className="text-sm text-gray-600">ID: {project.id}</p>
              {/* Puedes añadir más campos de tu tabla aquí */}
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="mt-4 text-gray-500">No hay proyectos asignados a este cliente.</p>
      )}
    </div>
  );
};

export default DashboardPage;