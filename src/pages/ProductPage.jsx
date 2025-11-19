// src/pages/ProductPage.jsx (Simulación de Configuración 3D)
import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout'; 

const ProductPage = () => {
    // URL de ejemplo para un modelo 3D incrustado (Reemplaza con tu URL real de ShapeDiver)
    const shapediverUrl = "https://viewer.shapediver.com/v1/viewer.html?model=YOUR_MODEL_ID"; 
    
    return (
        <MarketingLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-extrabold mb-6">Mueble Modular de Guadua</h1>
                
                <div className="flex flex-wrap md:flex-nowrap gap-8">
                    
                    {/* COLUMNA 1: Visor 3D (ShapeDiver Iframe) */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-2xl font-semibold mb-3">Configurador 3D</h2>
                        <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 border border-gray-300 shadow-lg">
                            {/* Iframe que incrusta el visor de ShapeDiver */}
                            <iframe 
                                src={shapediverUrl} 
                                title="Configurador 3D de Muebles"
                                frameBorder="0"
                                allowFullScreen
                                style={{ width: '100%', height: '500px' }} // Tailwind está fallando, usamos estilos inline
                            >
                            </iframe>
                            <p className="text-center text-sm text-gray-500 mt-2">
                                * Simulación del visor ShapeDiver. Reemplazar URL con modelo real.
                            </p>
                        </div>
                    </div>
                    
                    {/* COLUMNA 2: Formulario de Cotización */}
                    <div className="w-full md:w-2/5 p-6 bg-white shadow-xl rounded-lg border">
                        <h2 className="text-2xl font-bold mb-4 text-green-700">
                            Solicitar Cotización
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Envíanos tu configuración personalizada para recibir un presupuesto exacto.
                        </p>
                        
                        <form className="space-y-4">
                            {/* Campo de Nombre */}
                            <input 
                                type="text" 
                                placeholder="Tu Nombre" 
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            {/* Campo de Email */}
                            <input 
                                type="email" 
                                placeholder="Correo Electrónico" 
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                            {/* Botón de Envío */}
                            <button 
                                type="submit" 
                                className="w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition"
                            >
                                Enviar Solicitud
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-3">
                                Nos comunicaremos en menos de 24 horas.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </MarketingLayout>
    );
};

export default ProductPage;