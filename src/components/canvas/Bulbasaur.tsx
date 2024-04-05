import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Bulbasaur_1: THREE.Mesh;
    Bulbasaur_2: THREE.Mesh;
    Bulbasaur_3: THREE.Mesh;
  };
  materials: {
    Material__10: THREE.MeshStandardMaterial;
    Material__11: THREE.MeshStandardMaterial;
    ["Material__12.001"]: THREE.MeshStandardMaterial;
  };
};

export function Bulbasaur(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/bulbasaur.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.025}>
          <mesh castShadow receiveShadow geometry={nodes.Bulbasaur_1.geometry}>
            <meshStandardMaterial map={materials.Material__10.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Bulbasaur_2.geometry}>
            <meshStandardMaterial map={materials.Material__11.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Bulbasaur_3.geometry}>
            <meshStandardMaterial map={materials["Material__12.001"].map} {...stencil} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/bulbasaur.glb");
