"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PresentationControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function CoinMesh() {
  const coinRef = useRef<THREE.Mesh>(null);

  // 1. Memuat kedua gambar sekaligus menggunakan array
  const [logoSI, logoITHB] = useTexture(["/logosi.jpeg", "/logoithb.jpg"]);

  // 2. Memproses kedua tekstur agar posisinya benar
  const { frontTexture, backTexture } = useMemo(() => {
    // --- Tekstur Depan (Logo SI) ---
    const front = logoSI.clone();
    front.center.set(0.5, 0.5);
    front.rotation = Math.PI / 2;
    front.needsUpdate = true;

    // --- Tekstur Belakang (Logo ITHB) ---
    const back = logoITHB.clone();
    back.center.set(0.5, 0.5);
    back.rotation = Math.PI / 2;
    back.wrapS = back.wrapT = THREE.ClampToEdgeWrapping;
    back.repeat.set(0.75, 0.75);
    back.needsUpdate = true;

    return { frontTexture: front, backTexture: back };
  }, [logoSI, logoITHB]);

  useFrame((state, delta) => {
    if (coinRef.current) {
      coinRef.current.rotation.z += delta * 1.0;
    }
  });

  return (
    <mesh ref={coinRef} rotation={[Math.PI / 2, 0, 0]} scale={1.4}>
      {/* Bentuk Koin: [RadiusAtas, RadiusBawah, Ketebalan, SegmenMelingkar] */}
      <cylinderGeometry args={[1.9, 1.9, 0.2, 64]} />

      {/* 1. Sisi pinggiran tabung (Warna Silver) */}
      <meshStandardMaterial
        attach="material-0"
        color="#C0C0C0"
        metalness={0.7}
        roughness={0.3}
      />

      {/* 2. Sisi Depan (Wajah Koin dengan Logo SI) */}
      <meshStandardMaterial
        attach="material-1"
        map={frontTexture}
        metalness={0.3}
        roughness={0.4}
      />

      {/* 3. Sisi Belakang (Wajah Koin dengan Logo ITHB) */}
      <meshStandardMaterial
        attach="material-2"
        map={backTexture}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function CustomCoin() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7.0], fov: 50 }}>
        {/* Pencahayaan dramatis */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight position={[-10, -10, -10]} intensity={1} />

        {/* 2. PresentationControls yang Sudah Dijinakkan */}
        <PresentationControls
          global={true}
          cursor={true}
          snap={true}
          speed={1.5}
        >
          {/* Suspense WAJIB ditambahkan saat kita memuat gambar (texture) dari luar */}
          <Suspense fallback={null}>
            <CoinMesh />
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
