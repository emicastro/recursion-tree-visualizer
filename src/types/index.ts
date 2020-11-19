export type Point = [number, number] // [x, y]

// key: node id
export type NodesData = Record<
  number,
  {
    times: number[] // times that a node is the current (in incremental order)
    coord: Point
    label?: string
    memorized: boolean
  }
>

// key = JSON.stringify([m, n]), for edge m -> n
export type EdgesData = Record<
  string,
  {
    timeRange: [number, number] // Min/Max intervals in which edge should be displayed
    label?: string
  }
>