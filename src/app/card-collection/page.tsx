"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";

//const Dog = dynamic(() => import("@/components/canvas/Examples").then((mod) => mod.Dog), { ssr: false });
const Card = dynamic(() => import("@/components/canvas/Card").then((mod) => mod.Card), { ssr: false });
const View = dynamic(() => import("@/components/canvas/View").then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ),
});
const Common = dynamic(() => import("@/components/canvas/View").then((mod) => mod.Common), { ssr: false });

const cardStyles =
  "relative rounded-lg flex flex-col justify-center items-center w-full min-h-[30rem] user-select-none rounded-2xl";

const cards = [
  { scene: <Card pokemon="bulbasaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="wartortle" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charizard" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="bulbasaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="ivysaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="charmander" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="venusaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="charmander" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="squirtle" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charmeleon" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="blastoise" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="blastoise" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charmeleon" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="charizard" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="venusaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="wartortle" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charizard" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="bulbasaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="wartortle" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charizard" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="bulbasaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="ivysaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="charmander" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="venusaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="charmander" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="squirtle" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charmeleon" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="blastoise" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="blastoise" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charmeleon" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="charizard" artSectionColor="#db5b12" /> },
  { scene: <Card pokemon="venusaur" artSectionColor="#5fb81f" /> },
  { scene: <Card pokemon="wartortle" artSectionColor="#02a6f7" /> },
  { scene: <Card pokemon="charizard" artSectionColor="#db5b12" /> },
];

export default function Page() {
  const cardDivRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <main className="w-full min-h-full flex flex-col items-center gap-5 p-4 bg-[#2faea7] pt-12">
        <h1 className="font-extrabold basis-20 text-4xl p-4 px-[1em] bg-[#0f7a7a] text-white rounded-3xl mb-6 shadow-lg">
          Card Collection
        </h1>
        <section className="grid min-h-full grow lg:grid-cols-4 w-full select-none max-w-[95em] md:grid-cols-3 gap-5 rounded-2xl p-8 relative">
          {cards.map((card, index) => (
            <div key={index} className={cardStyles}>
              <View orbit={false} className="w-full h-full">
                <Suspense fallback={null}>
                  <Common />
                  {card.scene}
                </Suspense>
              </View>
              <div
                ref={cardDivRef}
                className="blur-[80px] rounded-lg bg-black opacity-[85%] pointer-events-none absolute h-[100%] w-[100%] scale-[0.7] z-0 top-0"
              ></div>
              {/*
              <button className="px-6 py-3 w-[60%] rounded-lg bg-[#0f7a7a] text-white font-bold text-xl mt-2 shadow-md z-20">
                Details
              </button>
              */}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
