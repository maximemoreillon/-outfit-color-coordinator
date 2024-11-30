import { svgWidth } from "./params"

// type Point = { x: number; y: number }
export type Point = [number, number]

export const pointsToD = (points: Point[]) =>
  ` M${points[0][0]} ${points[0][1]}` +
  points.slice(1).reduce((acc, [x, y]) => `${acc} L${x} ${y}`, "") +
  ` L${points[0][0]} ${points[0][1]}`

export const horizontalSymmetry = (points: Point[]): Point[] => [
  ...points,
  ...points.toReversed().map(([x, y]): Point => [svgWidth - x, y]),
]
