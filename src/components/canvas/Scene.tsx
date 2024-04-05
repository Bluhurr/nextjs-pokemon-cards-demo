"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "@/helpers/global";
import { ACESFilmicToneMapping, AgXToneMapping, LinearToneMapping, ReinhardToneMapping } from "three";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      gl={{
        toneMapping: LinearToneMapping,
      }}
      shadows={"soft"}
    >
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
