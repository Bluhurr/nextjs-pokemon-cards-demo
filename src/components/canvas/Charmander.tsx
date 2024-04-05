import React from "react";
import { useGLTF, useMask } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";

interface CharmanderProps {
  props?: any;
}

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: Mesh;
    Charmander001: Mesh;
    Charmander001_1: Mesh;
  };
  materials: {
    Material_0: MeshStandardMaterial;
    Material__34: MeshStandardMaterial;
    Material__35: MeshStandardMaterial;
  };
};

export function Charmander(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pokemon/charmander.glb") as GLTFResult;
  const stencil = useMask(1);

  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh geometry={nodes.Charmander001.geometry} castShadow>
          <meshStandardMaterial map={materials["Material__34.001"].map} {...stencil} />
        </mesh>
        <mesh geometry={nodes.Charmander001_1.geometry} castShadow>
          <meshStandardMaterial map={materials["Material__35.001"].map} {...stencil} />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={[0, 0.443, -1.289]}
        scale={0.441}
      >
        <meshStandardMaterial map={materials.Material_0.map} {...stencil} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/pokemon/charmander.glb");
