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

export type Variable = { name: string; value: string }
export type FunctionData = {
  name?: string
  params: Variable[]
  body: string
  variables?: Variable[] // variables that need to be accessed from the fn scope
}

// adjList[u]: [{v, w}, ...], being u -w-> v
export type AdjList = Record<number, { v: number; w?: number }[]>
// args[u]: vertex u param values
export type Args = Record<number, any[]>