import React, { useState, useEffect } from 'react';
import AssemblyViewer from '../features/AssemblyInstructions/AssemblyViewer';

const ProductPage = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // ID del producto (Debe coincidir con la carpeta en public/)
  // En el futuro, esto vendrá de la URL usando useParams()
  const productId = "M01536"; 

  useEffect(() => {
    // Buscamos el data.json en la carpeta pública
    fetch(`/${productId}/data.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No se encontró el data.json");
        return res.json();
      })
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando el producto:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-green-600 font-semibold animate-pulse">
          Cargando experiencia 3D...
        </div>
      </div>
    );
  }

  if (!productData) {
    return <div className="text-center p-10">Error cargando los datos del producto.</div>;
  }

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gray-50">
      {/* h-[calc(100vh-64px)] asume que tu Navbar mide unos 64px 
          y queremos que el visor ocupe el resto de la pantalla 
      */}
      <AssemblyViewer data={productData} id={productId} />
    </div>
  );
};

export default ProductPage;