"use client";

import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

// ── The actual GLB model ──────────────────────────────────────────────────────
function TShirtModel({ color }) {
  const group = useRef();
  const { scene } = useGLTF("/tshirt.glb");

  // Clone so color changes don't mutate the cached asset
  const cloned = React.useMemo(() => scene.clone(true), [scene]);

  // Apply color to every mesh in the model
  useEffect(() => {
    const hexColor = new THREE.Color(color);
    cloned.traverse((obj) => {
      if (obj.isMesh) {
        // Clone material so meshes don't share the same reference
        if (!obj.userData.materialCloned) {
          obj.material = obj.material.clone();
          obj.userData.materialCloned = true;
        }
        obj.material.color.set(hexColor);
        obj.material.needsUpdate = true;
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [color, cloned]);

  // Gentle auto-rotation (paused when user is dragging via OrbitControls)
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2; // Adjust rotation speed here
    }
  });

  // Center & scale the model to fit nicely — compute once per loaded model
  const { scale, center } = React.useMemo(() => {
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const s = 2.6 / maxDim;
    const c = new THREE.Vector3();
    box.getCenter(c);
    return { scale: s, center: c };
  }, [cloned]);

  return (
    <group ref={group}>
      <primitive
        object={cloned}
        scale={scale}
        // position computed from the model center so the model stays fixed
        position={[-center.x * scale, -center.y * scale, -center.z * scale]}
      />
    </group>
  );
}

// Preload so there's no flicker
useGLTF.preload("/tshirt.glb");

// ── Loading placeholder ───────────────────────────────────────────────────────
function Loader() {
  return (
    <mesh>
      <torusGeometry args={[0.4, 0.08, 16, 60]} />
      <meshStandardMaterial color="#9ca3af" />
    </mesh>
  );
}

// ── Main exported component ───────────────────────────────────────────────────
export default function TShirtViewer({ color }) {
  // Keep a stable ref to OrbitControls so we can set a fixed target once.
  // This prevents the camera from re-centering when the model or materials
  // are updated (for example, when changing shirt colors).
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      // Tune this target if the shirt sits too high/low in the frame.
      controlsRef.current.target.set(0, -0.4, 0);
      controlsRef.current.update();
    }
  }, []);

  return (
    <Canvas
      shadows
      // Adjusted camera to better frame the shirt by default. If you want
      // a tighter/looser framing, tweak the Z and Y values here.
      camera={{ position: [0, 0.8, 3.2], fov: 60 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} />
      <pointLight position={[0, -4, 4]} intensity={0.3} />

      {/* Environment for realistic reflections */}
      <Environment preset="city" />

      {/* Contact shadow on the ground */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.3}
        scale={5}
        blur={2}
        far={2}
      />

      {/* The shirt */}
      <Suspense fallback={<Loader />}>
        <TShirtModel color={color} />
      </Suspense>

      {/* OrbitControls – user can drag / zoom, but auto-rotation stops on drag */}
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        minDistance={3}
        maxDistance={3}
        autoRotate={false}
        enableDamping={true}
        // This locks the vertical rotation angle
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
