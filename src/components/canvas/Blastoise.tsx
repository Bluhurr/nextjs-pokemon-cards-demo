import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Blastoise_1: THREE.Mesh;
    Blastoise_2: THREE.Mesh;
    Blastoise_3: THREE.Mesh;
    Blastoise_CannonsA: THREE.Mesh;
  };
  materials: {
    Material__86: THREE.MeshStandardMaterial;
    Material__87: THREE.MeshStandardMaterial;
    Material__85: THREE.MeshStandardMaterial;
  };
};

export function Blastoise(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/blastoise.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.025}>
          <mesh castShadow receiveShadow geometry={nodes.Blastoise_1.geometry}>
            <meshStandardMaterial map={materials.Material__86.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Blastoise_2.geometry}>
            <meshStandardMaterial map={materials.Material__87.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Blastoise_3.geometry}>
            <meshStandardMaterial map={materials.Material__85.map} {...stencil} />
          </mesh>
        </group>
        <mesh castShadow receiveShadow geometry={nodes.Blastoise_CannonsA.geometry} scale={0.025}>
          <meshStandardMaterial map={materials.Material__86.map} {...stencil} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/blastoise.glb");
