import { Dispatch, SetStateAction } from "react"

type GarmentStateProperties = {
  show: boolean
  color: string
}

type Props = {
  label: string
  garmentState: [
    GarmentStateProperties,
    Dispatch<SetStateAction<GarmentStateProperties>>
  ]
}

export default function GarmentControls(props: Props) {
  return (
    <div>
      <button
        onClick={() =>
          props.garmentState[1]({
            ...props.garmentState[0],
            show: !props.garmentState[0].show,
          })
        }
      >
        {props.label}
      </button>
      <input
        type="color"
        value={props.garmentState[0].color}
        onChange={(e) =>
          props.garmentState[1]({
            ...props.garmentState[0],
            color: e.target.value,
          })
        }
      />
    </div>
  )
}
