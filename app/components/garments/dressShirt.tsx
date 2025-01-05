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

export default function (props: Props) {
  const points: Point[] = horizontalSymmetry([
    [svgHorizontalMidpoint - 0.5 * hipWidth, hipY + 150],
    [svgHorizontalMidpoint - 0.5 * waistWidth, waistY],
    [svgHorizontalMidpoint - 0.5 * bustWidth, armpitsHeight],
    [svgHorizontalMidpoint - 0.5 * handsSpacing + 50, hipY + 200],
    [svgHorizontalMidpoint - 0.5 * handsSpacing - 50, hipY + 200],
    [svgHorizontalMidpoint - 0.5 * shouldersWidth - 50, shouldersY],
    [svgHorizontalMidpoint - 0.5 * neckWidth, neckBaseY],
    [svgHorizontalMidpoint - 0.5 * neckWidth + 10, neckBaseY - 30],
    [svgHorizontalMidpoint - 30, neckBaseY - 30],
    // [svgHorizontalMidpoint, shouldersY + 30],
  ])

  const trousersD = pointsToD(points)

  return <path d={trousersD} style={props.style} />
}
