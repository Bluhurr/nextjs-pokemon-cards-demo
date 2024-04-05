import * as THREE from "three";
import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Squirtle_1: THREE.SkinnedMesh;
    Squirtle_2: THREE.SkinnedMesh;
    pm0007_00: THREE.Bone;
  };
  materials: {
    Material__60: THREE.MeshStandardMaterial;
    Material__61: THREE.MeshStandardMaterial;
  };
};

export function Squirtle(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/squirtle.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group>
        <group scale={1}>
          <group>
            <mesh castShadow geometry={nodes.Squirtle_1.geometry}>
              <meshStandardMaterial map={materials.Material__60.map} {...stencil} />
            </mesh>
            <mesh castShadow geometry={nodes.Squirtle_2.geometry}>
              <meshStandardMaterial map={materials.Material__61.map} {...stencil} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pokemon/squirtle.glb");
