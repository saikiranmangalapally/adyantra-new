"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Sphere,
  Float,
  Stars,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

function OrganicCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Slowly rotate the core
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#6A47ED"
          attach="material"
          distort={0.4} // Adds the "organic" fluid look
          speed={2} // Speed of the fluid morphing
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
      
      {/* Inner glowing core */}
      <Sphere args={[0.8, 32, 32]} scale={1.5}>
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.5} />
      </Sphere>
    </Float>
  );
}

function ParticleRings() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshStandardMaterial color="#c4b5fd" opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

export default function OrganicRobot3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]} // Optimize for high-DPI displays while maintaining performance
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting setup for that Figma-style premium glow */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#6A47ED" />
        <spotLight position={[0, 5, 0]} intensity={2} penumbra={1} color="#a78bfa" />
        
        {/* Environment mapping gives the metalness realistic reflections */}
        <Environment preset="city" />

        {/* The main organic blob */}
        <OrganicCore />
        
        {/* Futuristic rings orbiting the core */}
        <ParticleRings />

        {/* Ambient floating particles */}
        <Stars radius={10} depth={20} count={1000} factor={4} saturation={1} fade speed={1} />
        
        {/* Soft shadow on the "floor" */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#6A47ED" />
      </Canvas>
    </div>
  );
}
