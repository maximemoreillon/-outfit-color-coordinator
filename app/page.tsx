"use client"
import { useState } from "react"
import Blazer from "./garments/blazer"
import DressShirt from "./garments/dressShirt"
import Trousers from "./garments/trousers"
import { svgHeight, svgWidth } from "./params"

export default function Home() {
  const [trousers, setTrousers] = useState(true)

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
          {trousers && <Trousers style={{ fill: "red" }} />}

          <DressShirt style={{ fill: "white" }} />
          <Blazer style={{ fill: "blue" }} />
        </svg>
        <div>
          <button onClick={() => setTrousers(!trousers)}>Trousers</button>
        </div>
      </div>
    </main>
  )
}
