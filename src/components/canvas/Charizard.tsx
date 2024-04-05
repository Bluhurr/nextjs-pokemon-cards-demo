import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh;
    Charizard_1: THREE.Mesh;
    Charizard_2: THREE.Mesh;
    Charizard_3: THREE.Mesh;
  };
  materials: {
    Material_0: THREE.MeshStandardMaterial;
    Material__12: THREE.MeshStandardMaterial;
    Material__13: THREE.MeshStandardMaterial;
    Material__14: THREE.MeshStandardMaterial;
  };
};

export function Charizard(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/charizard.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} position={[-2.401, 0.61, -0.503]} scale={0.954}>
          <meshStandardMaterial map={materials.Material_0.map} {...stencil} />
        </mesh>
        <group scale={0.025}>
          <mesh castShadow receiveShadow geometry={nodes.Charizard_1.geometry}>
            <meshStandardMaterial map={materials.Material__12.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Charizard_2.geometry}>
            <meshStandardMaterial map={materials.Material__13.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Charizard_3.geometry}>
            <meshStandardMaterial map={materials.Material__14.map} {...stencil} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/charizard.glb");
