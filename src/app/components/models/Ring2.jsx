/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Derk3DStuff (https://sketchfab.com/Derk3DStuff)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sonic-ring-v-10-9125132689fc41f8a8c0284badf0d660
Title: Sonic Ring (V 1.0)
*/
'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Ring2(props) {
  const { nodes, materials } = useGLTF('/models/ring.glb');
  const modelRef = useRef();
  useFrame((state) => {
    modelRef.current.rotation.y -= 0.007;
    modelRef.current.position.y = -0.65 + Math.sin(state.clock.elapsedTime) * 0.1;

  });
  return (
    <group {...props} dispose={null}
    scale={[0.35,0.35,0.35]}
    position={[0,0,0]}
    ref={modelRef}>
      <group rotation={[0,0,0]}>
        <group scale={0.402}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ring.glb')
