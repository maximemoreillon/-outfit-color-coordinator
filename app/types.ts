import { Component, Dispatch, SetStateAction } from "react"

export type GarmentStateProperties = {
  show: boolean
  color: string
}

export type GarmentState = [
  GarmentStateProperties,
  Dispatch<SetStateAction<GarmentStateProperties>>
]

export type Garment = {
  state: GarmentState
  component: Component
  label: string
}
