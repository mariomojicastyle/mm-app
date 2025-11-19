// src/pages/LandingPage.jsx (Código Original)
import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout'; // <-- Importación del Layout

const LandingPage = () => {
  return (
    <MarketingLayout> {/* <-- Usando el Layout */}
      {/* SECCIÓN HÉROE */}
      <section className="bg-green-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Diseño Sostenible y Funcional para tu Empresa.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformamos espacios de trabajo y hospitality con muebles de guadua de alta resistencia, uniendo estética, durabilidad y compromiso ambiental.
          </p>
          <a
            href="/login"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Ver Portafolio B2B
          </a>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS (B2B) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Servicios de Diseño
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Tarjeta 1 */}
            <div className="p-6 border-l-4 border-green-500 shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-3 text-gray-700">Diseño de Interiores</h4>
              <p className="text-gray-500">Creamos ambientes únicos y funcionales optimizando la distribución de tus espacios comerciales.</p>
            </div>
            {/* Tarjeta 2 */}
            <div className="p-6 border-l-4 border-green-500 shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-3 text-gray-700">Proyectos a Medida</h4>
              <p className="text-gray-500">Fabricación y entrega de mobiliario específico, desde prototipos hasta producción a escala.</p>
            </div>
            {/* Tarjeta 3 */}
            <div className="p-6 border-l-4 border-green-500 shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold mb-3 text-gray-700">Consultoría de Sostenibilidad</h4>
              <p className="text-gray-500">Integra materiales ecológicos como la guadua para cumplir tus objetivos de impacto social.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN B2C */}
      <section className="bg-gray-800 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl font-bold mb-4">
            ¿Buscas piezas individuales? Visita nuestra Tienda B2C.
          </p>
          <a
            href="/tienda"
            className="bg-white text-gray-800 hover:bg-gray-200 font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Ir a la Tienda
          </a>
        </div>
      </section>

    </MarketingLayout>
  );
};

export default LandingPage;