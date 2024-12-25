import {
  svgHeight,
  hipY,
  ankleSpacing,
  ankleWidth,
  svgHorizontalMidpoint,
  ankleY,
  waistWidth,
} from "@/app/params"
import { Point, horizontalSymmetry, pointsToD } from "@/app/svgUtils"
import { CSSProperties } from "react"

type Props = {
  style?: CSSProperties
}

export default function Trousers(props: Props) {
  const trousersPoints: Point[] = horizontalSymmetry([
    [svgHorizontalMidpoint, hipY + 200],
    [svgHorizontalMidpoint - 0.5 * ankleSpacing + 0.5 * ankleWidth, ankleY],
    [svgHorizontalMidpoint - 0.5 * ankleSpacing - 0.5 * ankleWidth, ankleY],
    [svgHorizontalMidpoint - 0.5 * waistWidth, hipY],
  ])

  const trousersD = pointsToD(trousersPoints)

  return <path d={trousersD} style={props.style} />
}
