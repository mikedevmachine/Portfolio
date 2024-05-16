'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Shadow(props) {
  const { nodes, materials } = useGLTF('/models/shadow.glb')

  const modelRef = useRef()
  useFrame((state, delta, xrFrame) => {   
    modelRef.current.position.y = -0.5 + Math.sin(state.clock.elapsedTime) * 0.1;
  })
  return (
    <group {...props} dispose={null}
    ref = {modelRef}
    position={[0,-0.5, 2]}
    rotation={[0.3, 0.15, 0]}
    scale={[1.6,1.4,1.5]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.stu_chr_shadow_body}
             
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.stu_chr_shadow_eye}
             
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.stu_chr_shadow_fur}
             
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.stu_obj_base}
             
             
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/shadow.glb')