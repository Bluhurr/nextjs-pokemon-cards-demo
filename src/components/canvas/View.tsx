"use client";

import { forwardRef, HTMLAttributes, ReactNode, Suspense, useImperativeHandle, useRef } from "react";
import { OrbitControls, PerspectiveCamera, View as ViewImpl, Environment } from "@react-three/drei";
import { Three } from "@/helpers/components/Three";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  orbit?: any;
}

interface CommonProps {
  color?: string;
}

export const Common = ({ color }: CommonProps) => (
  <Suspense fallback={null}>
    <Environment preset="lobby" blur={0} resolution={2048} />
    {color && <color attach="background" args={[color]} />}
    <PerspectiveCamera makeDefault fov={25} position={[0, 12.5, 0]} rotation={[-Math.PI * 0.5, 0, 0]} />
  </Suspense>
);

const View = forwardRef<HTMLDivElement, ViewProps>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null);
  const controls = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls ref={controls} enableZoom={false} target={[0, 0, 0]} />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = "View";

export { View };
