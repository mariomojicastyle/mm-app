import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-md mx-auto bg-white md:mt-16 rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-200">
      <div className="md:flex">
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">Hablemos</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Contáctanos</h1>
          <p className="mt-2 text-gray-500">
            ¿Tienes un proyecto en mente? Escríbenos para agendar una consultoría inicial.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input type="text" name="name" id="name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" name="email" id="email" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border" placeholder="tucorreo@empresa.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact