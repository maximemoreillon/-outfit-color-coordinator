"use client"
import { useState } from "react"
import Blazer from "./garments/blazer"
import DressShirt from "./garments/dressShirt"
import Trousers from "./garments/trousers"
import { svgHeight, svgWidth } from "./params"

export default function Home() {
  const [trousers, setTrousers] = useState(true)
  const [dressShirt, setDressShirt] = useState(true)
  const [blazer, setBlazer] = useState(true)

  return (
    <main className="">
      <h1>Outfit color coordinator</h1>
      {/* TODO: use % ? */}
      <div className="flex">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="border-red-600 border-2"
        >
          {trousers && <Trousers style={{ fill: "grey" }} />}
          {dressShirt && <DressShirt style={{ fill: "white" }} />}
          {blazer && <Blazer style={{ fill: "navy" }} />}
        </svg>
        <div className="flex flex-col gap-2 items-start p-2">
          <button onClick={() => setTrousers(!trousers)}>Trousers</button>
          <button onClick={() => setBlazer(!blazer)}>Blazer</button>
          <button onClick={() => setDressShirt(!dressShirt)}>Shirt</button>
        </div>
      </div>
    </main>
  )
}
