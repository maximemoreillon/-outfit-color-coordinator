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

  const [trousers, setTrousers] = useState({ show: true, color: "#444444" })
  const [dressShirt, setDressShirt] = useState({ show: true, color: "#ffffff" })
  const [blazer, setBlazer] = useState({ show: true, color: "#000099" })
  const [necktie, setNecktie] = useState({ show: true, color: "#990000" })

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
      <h1 className="text-3xl my-4">Outfit color coordinator</h1>
      {/* TODO: use % ? */}
      <div className="flex">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="border-white border-2 rounded-xl h-screen "
        >
          {trousers.show && <Trousers style={{ fill: trousers.color }} />}
          {dressShirt.show && <DressShirt style={{ fill: dressShirt.color }} />}
          {necktie.show && <Necktie style={{ fill: necktie.color }} />}
          {blazer.show && <Blazer style={{ fill: blazer.color }} />}
        </svg>
        <div className="">
          <table className=" ">
            <tbody>
              <GarmentControls
                label="Trousers"
                garmentState={[trousers, setTrousers]}
              />
              <GarmentControls
                label="Blazer"
                garmentState={[blazer, setBlazer]}
              />
              <GarmentControls
                label="Dress shirt"
                garmentState={[dressShirt, setDressShirt]}
              />
              <GarmentControls
                label="Necktie"
                garmentState={[necktie, setNecktie]}
              />
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
