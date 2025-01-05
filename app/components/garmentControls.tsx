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
    <tr>
      <td className="p-2">{props.label}</td>
      <td className="p-2">
        <input
          type="checkbox"
          checked={props.garmentState[0].show}
          onChange={(e) =>
            props.garmentState[1]({
              ...props.garmentState[0],
              show: e.target.checked,
            })
          }
        />
      </td>
      <td className="p-2">
        <input
          disabled={!props.garmentState[0].show}
          type="color"
          className=""
          value={props.garmentState[0].color}
          onChange={(e) =>
            props.garmentState[1]({
              ...props.garmentState[0],
              color: e.target.value,
            })
          }
        />
      </td>
    </tr>
  )
}
