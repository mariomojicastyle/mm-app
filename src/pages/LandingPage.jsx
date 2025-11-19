import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout'; 

const LandingPage = () => {
  return (
    <MarketingLayout>
      
      {/* SECCIÓN HÉROE: Fondo oscuro, texto centrado y grande */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Diseño Sostenible y</span>{' '}
                  <span className="block text-green-500 xl:inline">Funcional para tu Empresa.</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transformamos espacios de trabajo y hospitality con muebles de guadua de alta resistencia, uniendo estética, durabilidad y compromiso ambiental.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Ver Portafolio B2B
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* Imagen de fondo decorativa (opcional, o un degradado) */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xl">[Imagen Hero Aquí]</span>
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS (B2B) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Servicios</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nuestros Servicios de Diseño
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Soluciones integrales para empresas que buscan impacto y sostenibilidad.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              
              {/* Tarjeta 1 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/* Icono simulado */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Diseño de Interiores</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Creamos ambientes únicos y funcionales optimizando la distribución de tus espacios comerciales con software de última generación.
                </dd>
              </div>

              {/* Tarjeta 2 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 00-1 1v6a1 1 0 01-1 1h-9a1 1 0 01-1-1v-6a2 2 0 00-1-1H3a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Proyectos a Medida</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Fabricación y entrega de mobiliario específico, desde prototipos rápidos hasta producción a escala industrial.
                </dd>
              </div>

              {/* Tarjeta 3 */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sostenibilidad</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Integra materiales ecológicos como la guadua certificada para cumplir tus objetivos de impacto social y ambiental (ESG).
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN B2C */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Buscas piezas individuales?</span>
            <span className="block text-green-600">Visita nuestra Tienda B2C.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/tienda"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Ir a la Tienda
              </a>
            </div>
          </div>
        </div>
      </div>

    </MarketingLayout>
  );
}; 

export default LandingPage;