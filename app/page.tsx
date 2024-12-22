"use client"
import { useState } from "react"
import Blazer from "./garments/blazer"
import DressShirt from "./garments/dressShirt"
import Trousers from "./garments/trousers"
import { svgHeight, svgWidth } from "./params"

export default function Home() {
  const [trousers, setTrousers] = useState({ show: true, color: "#c00000" })
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
          {trousers.show && <Trousers style={{ fill: trousers.color }} />}
          {dressShirt && <DressShirt style={{ fill: "white" }} />}
          {blazer && <Blazer style={{ fill: "navy" }} />}
        </svg>
        <div className="flex flex-col gap-2 items-start p-2">
          <div>
            <button
              onClick={() => setTrousers({ ...trousers, show: !trousers.show })}
            >
              Trousers
            </button>
            <input
              type="color"
              value={trousers.color}
              onChange={(e) =>
                setTrousers({ ...trousers, color: e.target.value })
              }
            />
          </div>
          <button onClick={() => setBlazer(!blazer)}>Blazer</button>
          <button onClick={() => setDressShirt(!dressShirt)}>Shirt</button>
        </div>
      </div>
    </main>
  )
}
