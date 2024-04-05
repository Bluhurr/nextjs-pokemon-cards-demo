import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    VenusaurF_1: THREE.Mesh;
    VenusaurF_2: THREE.Mesh;
    VenusaurF_3: THREE.Mesh;
    VenusaurF_4: THREE.Mesh;
  };
  materials: {
    Material__63: THREE.MeshStandardMaterial;
    ["Material__61.001"]: THREE.MeshStandardMaterial;
    Material__62: THREE.MeshStandardMaterial;
    ["Material__60.001"]: THREE.MeshStandardMaterial;
  };
};

export function Venusaur(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/venusaur.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={0.025}>
          <mesh castShadow receiveShadow geometry={nodes.VenusaurF_1.geometry}>
            <meshStandardMaterial map={materials.Material__63.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.VenusaurF_2.geometry}>
            <meshStandardMaterial map={materials["Material__61.001"].map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.VenusaurF_3.geometry}>
            <meshStandardMaterial map={materials.Material__62.map} {...stencil} />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.VenusaurF_4.geometry}>
            <meshStandardMaterial map={materials["Material__60.001"].map} {...stencil} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/venusaur.glb");
