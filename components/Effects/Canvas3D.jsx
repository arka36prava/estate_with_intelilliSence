import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, ContactShadows, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central realistic glass/crystal building abstraction */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 4, 2]} />
          <MeshTransmissionMaterial 
            backside
            thickness={0.5}
            roughness={0.1}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.06}
            color="#eff5f5"
          />
        </mesh>
      </Float>

      {/* Surrounding architectural elements */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[3, 1, -2]} rotation={[Math.PI/4, Math.PI/4, 0]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#2d3748" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[-3, -1, -1]} rotation={[0, Math.PI/3, 0]}>
          <torusGeometry args={[1.5, 0.2, 16, 100]} />
          <meshStandardMaterial color="#4299e1" roughness={0.3} metalness={0.7} />
        </mesh>
      </Float>

       <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.8}>
        <mesh position={[2, -2, 2]}>
          <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
};

const Canvas3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4299e1" />
        
        {/* Scene */}
        <FloatingShapes />
        
        {/* Subtle animated stars for a more "dreamy" background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Ground shadow for realism */}
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        
        {/* Environment definition for glass reflection */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
