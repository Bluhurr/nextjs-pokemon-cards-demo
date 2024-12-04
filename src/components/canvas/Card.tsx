// @ts-nocheck

import { useRef } from "react";
import { BackSide, Euler } from "three";
import { Decal, Float, Mask, PresentationControls, useGLTF, useMask, useTexture } from "@react-three/drei";
import { Charmander } from "./Charmander";
import { Charmeleon } from "./Charmeleon";
import { Charizard } from "./Charizard";
import { Squirtle } from "./Squirtle";
import { Wartortle } from "./Wartortle";
import { Blastoise } from "./Blastoise";
import { Bulbasaur } from "./Bulbasaur";
import { Ivysaur } from "./Ivysaur";
import { Venusaur } from "./Venusaur";

interface CardProps {
  pokemon:
    | "default"
    | "charmander"
    | "charmeleon"
    | "charizard"
    | "bulbasaur"
    | "ivysaur"
    | "venusaur"
    | "squirtle"
    | "wartortle"
    | "blastoise";
  artSectionColor?: string;
  props?: any;
}

export function Card({ pokemon = "default", artSectionColor }: CardProps) {
  const { nodes } = useGLTF("/card.glb");
  const cardRef = useRef(null);

  const textureFront = useTexture(`/${pokemon}-card-front.png`);
  const textureBack = useTexture("/pokemon-card-backside.png");

  const roughness = 0.2;
  const envRot = { x: Math.PI * 0.5, y: -Math.PI, z: -0.2 } as Euler;

  const stencil = useMask(1, false);
  const cardStencil = useMask(1, true);

  return (
    <group rotation={[-Math.PI * 0.48, 0, 0]} position={[0, 4.5, 0]}>
      <PresentationControls
        polar={[-Math.PI / 3, Math.PI / 2]} // Vertical limits
        speed={2}
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 100, friction: 16 }} // Spring config
        snap={true}
      >
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        >
          <group rotation={[0, Math.PI + 0, 0]}>
            <Mask id={1} position={[0, 0.56, -0.02]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[1.52, 1.2]} />
            </Mask>

            <group position={[0, 0.56, 0.5]} castShadow={false} layers={2}>
              <pointLight castShadow intensity={1.5} position={[1.0, 0, -1.9]} decay={0.2} {...stencil} />
              <mesh castShadow={false} position={[0, 0.1, 0]} receiveShadow>
                <boxGeometry args={[2.5, 1.5, 3.5]} />
                <meshStandardMaterial
                  color={artSectionColor}
                  envMapIntensity={0.5}
                  roughness={0.4}
                  side={BackSide}
                  {...stencil}
                />
              </mesh>

              {pokemon === "charmander" ? (
                <Charmander scale={0.5} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.1]} {...stencil} />
              ) : pokemon === "charmeleon" ? (
                <Charmeleon scale={0.31} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.1]} {...stencil} />
              ) : pokemon === "charizard" ? (
                <Charizard scale={0.3} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.15]} {...stencil} />
              ) : pokemon === "squirtle" ? (
                <Squirtle scale={0.65} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.18]} {...stencil} />
              ) : pokemon === "wartortle" ? (
                <Wartortle scale={0.36} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.2]} {...stencil} />
              ) : pokemon === "blastoise" ? (
                <Blastoise scale={0.34} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.2]} {...stencil} />
              ) : pokemon === "bulbasaur" ? (
                <Bulbasaur scale={0.35} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.18]} {...stencil} />
              ) : pokemon === "ivysaur" ? (
                <Ivysaur scale={0.32} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.2]} {...stencil} />
              ) : pokemon === "venusaur" ? (
                <Venusaur scale={0.26} rotation={[0, Math.PI, 0]} position={[0, -0.65, 0.45]} {...stencil} />
              ) : null}
            </group>

            <mesh
              ref={cardRef}
              // @ts-expect-error Property 'geometry' is expected to exist
              geometry={nodes.Cube.geometry}
              dispose={null}
              scale={[1, 1, 0.6]}
              castShadow={false}
              receiveShadow
            >
              <meshStandardMaterial
                color={"#FCD824"}
                roughness={roughness}
                envMapRotation={envRot}
                envMapIntensity={0.2}
                polygonOffset
                polygonOffsetFactor={-1}
                {...cardStencil}
              />
              <Decal position={[0, 0, 0.045]} scale={[-2.1, 3.1, 0.05]}>
                <meshStandardMaterial
                  roughness={roughness}
                  envMapRotation={envRot}
                  envMapIntensity={1.3}
                  polygonOffset
                  map={textureBack}
                  polygonOffsetFactor={-1}
                  {...cardStencil}
                />
              </Decal>
              <Decal polygonOffsetFactor={1} position={[0, 0, -0.04]} scale={[-2, 3.1, 0.05]}>
                <meshStandardMaterial
                  roughness={0.2}
                  envMapRotation={envRot}
                  envMapIntensity={0.65}
                  polygonOffset
                  map={textureFront}
                  polygonOffsetFactor={-1}
                  {...cardStencil}
                />
              </Decal>
            </mesh>
          </group>
        </Float>
      </PresentationControls>
    </group>
  );
}
