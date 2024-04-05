import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh;
    Charmeleon_1: THREE.Mesh;
    Charmeleon_2: THREE.Mesh;
  };
  materials: {
    Material_0: THREE.MeshStandardMaterial;
    Material__34: THREE.MeshStandardMaterial;
    Material__37: THREE.MeshStandardMaterial;
  };
};

export function Charmeleon(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/charmeleon.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0.geometry} position={[-1.26, 0.56, -0.87]} scale={0.82}>
        <meshStandardMaterial map={materials.Material_0.map} {...stencil} />
      </mesh>
      <group scale={0.03}>
        <mesh castShadow receiveShadow geometry={nodes.Charmeleon_1.geometry}>
          <meshStandardMaterial map={materials.Material__34.map} {...stencil} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Charmeleon_2.geometry}>
          <meshStandardMaterial map={materials.Material__37.map} {...stencil} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/charmeleon.glb");
