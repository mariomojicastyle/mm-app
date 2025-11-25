import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./3d-escene/Experience.jsx";
import NavBarSuperior from "./components/NavBarSuperior/NavBarSuperior.jsx";
import NavBarInferior from "./components/NavBarInferior/NavBarInferior.jsx";
import Landscape from "./components/Landscape/Landscape.jsx";
import useEnviroment from "./hooks/useEnviroment";
import * as THREE from "three";
import PanelInicial from "./components/NavBarInferior/PanelInicial/PanelInicial";

export default function AssemblyViewer({ data, id }) {
  //Variables y funciones extraidas del state management (useEnviroment)
  const NuevosPasos = useEnviroment((state) => state.NuevosPasos);
  const ChangeId = useEnviroment((state) => state.ChangeId);
  const ChargerIcon = useEnviroment((state) => state.ChargerIcon);
  const ChargerPositionFloor = useEnviroment((state) => state.ChargerPositionFloor);
  const ChargerAlturas = useEnviroment((state) => state.ChargerAlturas); // Nueva función para manejar alturas
  const ChargerCameraPositions = useEnviroment((state) => state.ChargerCameraPositions);

  const refTitle = useRef();

  // Efecto para inicializar el store con los datos recibidos
  useEffect(() => {
    if (data) {
        // Llamado a las funciones del state management
        NuevosPasos(data.pasos);
        ChangeId(id);
        ChargerIcon(data.logo);
        ChargerPositionFloor(data.posiciones);

        const cameraPositions = data.cameraPositions;
        console.log("Esta es la petición de posiciones de la cámara:", cameraPositions);
        ChargerCameraPositions(cameraPositions);

        // Colocar el log de depuración y la carga de alturas
        console.log("Esta es la petición de alturas:", data.alturas);
        ChargerAlturas(data.alturas);
        
        if(refTitle.current) {
            refTitle.current.innerHTML = data.name;
        }
    }
  }, [data, id]); // Se ejecuta cuando data o id cambian

  const [orientation, setOrientation] = useState(window.orientation);

  //Función de reload al cambio de orientacion
  useEffect(() => {
    function handleOrientationChange() {
      setOrientation(window.orientation);
      location.reload(); // reload the page
    }
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [id]);

  if (!data) return null; // O un loading spinner

  return (
    <>
      <title ref={refTitle}></title>
      
      {/* Pantalla inicial */}
      <PanelInicial />
      
      {/*Contenedor de la experiencia 3D */}
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.NoToneMapping,
          outputEncoding: THREE.LinearEncoding,
        }}
        // shadows
        camera={{position: [0, 1, 2],  fov: 60}} 
      >
        <Experience id={id} data={data} />
      </Canvas>

      {/* Contenedores de los botones ubicados en la parte de arriba y abajo, del aplicativo.
       Se ubican despues del canvas, para no poseer problemas de z-index  */}
      <NavBarSuperior id={id} data={data} />
      <NavBarInferior id={id} data={data} />

      {/* Componente que muestra los renders, al cambio de orientacion del app */}
      <Landscape />

    </>
  );
}
