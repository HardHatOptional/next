"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Chair({ position }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[1, 0.5, 1]} />
      <meshStandardMaterial color="#444" />
      <mesh position={[0, 0.75, -0.4]}>
        <boxGeometry args={[1, 1, 0.2]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </mesh>
  );
}

function TV({ position }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#000" />
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#0f0" />
      </mesh>
    </mesh>
  );
}

export default function Home() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 50 }}
      style={{ height: '100vh', background: 'white' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Chair position={[-2, 0, 0]} />
      <Chair position={[2, 0, 1]} />
      <TV position={[0, 1, -2]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}
