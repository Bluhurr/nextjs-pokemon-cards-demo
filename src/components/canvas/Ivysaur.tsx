import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Ivysaur_1: THREE.Mesh;
    Ivysaur_2: THREE.Mesh;
    Ivysaur_3: THREE.Mesh;
    Ivysaur_4: THREE.Mesh;
  };
  materials: {
    Material__46: THREE.MeshStandardMaterial;
    Material__47: THREE.MeshStandardMaterial;
    Material__48: THREE.MeshStandardMaterial;
    Material__49: THREE.MeshStandardMaterial;
  };
};

export function Ivysaur(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/ivysaur.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.025}>
          <mesh castShadow receiveShadow geometry={nodes.Ivysaur_1.geometry}>
            <meshStandardMaterial map={materials.Material__46.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Ivysaur_2.geometry}>
            <meshStandardMaterial map={materials.Material__47.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Ivysaur_3.geometry}>
            <meshStandardMaterial map={materials.Material__48.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Ivysaur_4.geometry}>
            <meshStandardMaterial map={materials.Material__49.map} {...stencil} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/ivysaur.glb");
