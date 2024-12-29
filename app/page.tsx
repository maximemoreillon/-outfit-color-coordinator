"use client"
import { Component, useState } from "react"
import Blazer from "./components/garments/blazer"
import DressShirt from "./components/garments/dressShirt"
import Trousers from "./components/garments/trousers"
import { svgHeight, svgWidth } from "./params"
import GarmentControls from "./components/garmentControls"
import Necktie from "./components/garments/necktie"

type GarmentListItem = {
  type: string
  color: string
}

export default function Home() {
  const [garments, setGarments] = useState<GarmentListItem[]>([])

  const [trousers, setTrousers] = useState({ show: true, color: "#c00000" })
  const [dressShirt, setDressShirt] = useState({ show: true, color: "#00c000" })
  const [blazer, setBlazer] = useState({ show: true, color: "#0000c0" })
  const [necktie, setNecktie] = useState({ show: true, color: "#666666" })

  function addGarment() {
    setGarments([
      ...garments,
      {
        type: "trousers",
        color: "#c00000",
      },
    ])
  }

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
          {necktie.show && <Necktie style={{ fill: necktie.color }} />}
          {blazer.show && <Blazer style={{ fill: blazer.color }} />}
        </svg>
        <div className="flex flex-col gap-2 items-start p-2">
          <button onClick={() => addGarment()}>Add garment</button>
          <GarmentControls
            label="Trousers"
            garmentState={[trousers, setTrousers]}
          />
          <GarmentControls label="Blazer" garmentState={[blazer, setBlazer]} />
          <GarmentControls
            label="Dress shirt"
            garmentState={[dressShirt, setDressShirt]}
          />
          <GarmentControls
            label="Necktie"
            garmentState={[necktie, setNecktie]}
          />
        </div>
      </div>
    </main>
  )
}
