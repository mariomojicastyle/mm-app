import React from 'react'

const services = [
  {
    title: "Diseño de Producto RTA",
    desc: "Desarrollo de mobiliario listo para armar, optimizado para producción en serie y flat-pack.",
    icon: "📦"
  },
  {
    title: "Arquitectura en Guadua",
    desc: "Diseño estructural y modelado 3D de kioscos, pérgolas y estructuras sostenibles en bambú.",
    icon: "🎋"
  },
  {
    title: "Consultoría CNC",
    desc: "Optimización de archivos de corte y automatización de procesos de manufactura digital.",
    icon: "⚙️"
  }
]

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Lo que hacemos</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Soluciones de Diseño y Manufactura
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Combinamos la artesanía tradicional de la guadua con la precisión de la tecnología moderna.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg text-4xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                <p className="mt-5 text-base text-gray-500">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services