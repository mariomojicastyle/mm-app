import React, { useState } from 'react'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://n8n.mariomojica.com:5678/webhook-test/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        e.target.reset()
      } else {
        console.error('Error sending form')
        alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white md:mt-16 rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-200">
      <div className="md:flex">
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">Hablemos</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Contáctanos</h1>
          <p className="mt-2 text-gray-500">
            ¿Tienes un proyecto en mente? Escríbenos para agendar una consultoría inicial.
          </p>

          {isSuccess ? (
            <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">¡Mensaje enviado!</strong>
              <span className="block sm:inline"> Nos pondremos en contacto contigo pronto.</span>
            </div>
          ) : (
            <form className="mt-6 grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input required type="text" name="name" id="name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input required type="email" name="email" id="email" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border" placeholder="tucorreo@empresa.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea required id="message" name="message" rows="4" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3 border" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isLoading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact