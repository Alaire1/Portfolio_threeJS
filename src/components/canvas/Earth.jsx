import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./world/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 100, // Adjusted FOV for wider view
        near: 0.1, // Adjusted near plane to avoid clipping
        far: 200,
        position: [-15, 3, 10], // Moved camera further back
      }}
    >
      <directionalLight
        castShadow={true} // Enables shadows
        intensity={0.5} // Adjust light intensity (0 to 1)
        position={[2, 5, 10]} // Light source position
      />
      <directionalLight
    castShadow={true} // Enables shadows (optional)
    intensity={0.5} // Adjust intensity (0 to 1)
    position={[-2, 5, -10]} // Light source position (opposite side)
  />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth ref={(earth) => {
          if (earth.current) {
            earth.current.geometry.computeVertexNormals(); // Flip normals
          }
        }} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
