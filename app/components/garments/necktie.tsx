import {
  svgHeight,
  hipY,
  ankleSpacing,
  ankleWidth,
  svgHorizontalMidpoint,
  ankleY,
  waistWidth,
  hipWidth,
  bustWidth,
  armpitsHeight,
  handsSpacing,
  shouldersY,
  shouldersWidth,
  waistY,
  neckWidth,
  neckBaseY,
} from "@/app/params"
import { Point, horizontalSymmetry, pointsToD } from "@/app/svgUtils"
import { CSSProperties } from "react"

type Props = {
  style?: CSSProperties
}

export default function Necktie(props: Props) {
  const points: Point[] = horizontalSymmetry([
    [svgHorizontalMidpoint, waistY],
    [svgHorizontalMidpoint - 20, waistY - 50],
    [svgHorizontalMidpoint - 0.15 * neckWidth, neckBaseY],
    [svgHorizontalMidpoint - 0.15 * neckWidth + 10, neckBaseY - 30],
    [svgHorizontalMidpoint - 30, neckBaseY - 30],
  ])

  const pathD = pointsToD(points)

  return <path d={pathD} style={props.style} />
}
