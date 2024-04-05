import { useGLTF } from "@react-three/drei";

interface PokemonProps {
  pokemon: "charmander" | "squirtle" | "bulbasaur";
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const { scene } = useGLTF(`/pokemon/${pokemon}.glb`);

  return <primitive object={scene} />;
}
