import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Wartortle_1: THREE.Mesh;
    Wartortle_2: THREE.Mesh;
  };
  materials: {
    Material__72: THREE.MeshStandardMaterial;
    Material__73: THREE.MeshStandardMaterial;
  };
};

export function Wartortle(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/wartortle.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.025}>
          <mesh castShadow receiveShadow geometry={nodes.Wartortle_1.geometry}>
            <meshStandardMaterial map={materials.Material__72.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Wartortle_2.geometry}>
            <meshStandardMaterial map={materials.Material__73.map} {...stencil} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/wartortle.glb");
