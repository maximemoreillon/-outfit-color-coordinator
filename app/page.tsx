"use client"
import { useState } from "react"
import Blazer from "./components/garments/blazer"
import DressShirt from "./components/garments/dressShirt"
import Trousers from "./components/garments/trousers"
import { svgHeight, svgWidth } from "./params"

export default function Home() {
  const [trousers, setTrousers] = useState({ show: true, color: "#c00000" })
  const [dressShirt, setDressShirt] = useState({ show: true, color: "#00c000" })
  const [blazer, setBlazer] = useState({ show: true, color: "#0000c0" })

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
          {dressShirt.show && <DressShirt style={{ fill: dressShirt.color }} />}
          {blazer.show && <Blazer style={{ fill: blazer.color }} />}
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
          <div>
            <button
              onClick={() => setBlazer({ ...blazer, show: !blazer.show })}
            >
              Blazer
            </button>
            <input
              type="color"
              value={blazer.color}
              onChange={(e) => setBlazer({ ...blazer, color: e.target.value })}
            />
          </div>
          <div>
            <button
              onClick={() =>
                setDressShirt({ ...dressShirt, show: !dressShirt.show })
              }
            >
              Dress shirt
            </button>
            <input
              type="color"
              value={dressShirt.color}
              onChange={(e) =>
                setDressShirt({ ...dressShirt, color: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </main>
  )
}
