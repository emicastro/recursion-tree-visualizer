import React from 'react'

import { Svg } from './styles/graph'
import DirectedEdge from './directed-edge'
import Node from './node'
import { Point, NodesData, EdgesData } from '../../types'

type Props = {
  time: number,
  bottomRight: Point,
  nodes: NodesData,
  edges: EdgesData
}

const Graph = ({ time, edges, nodes, bottomRight }: Props) => {
  return (
    <Svg viewBox={`0 0 ${bottomRight[0]} ${bottomRight[1]}`}>
      {Object.entries(edges).map(([key, data]) => {
        const [u, v] = JSON.parse(key)

        return (
          time >= data.timeRange[0] &&
          time <= data.timeRange[1] &&
          nodes[u]?.coord &&
          nodes[v]?.coord && (
            <DirectedEdge
              key={key}
              start={nodes[u].coord}
              end={nodes[v].coord}
              label={data.label}
              highlight={data.timeRange[0] === time}
            />
          )
        )
      })}
      {Object.entries(nodes).map(([key, data]) => {
        return (
          time >= data.times[0] && (
            <Node
              key={key}
              center={data.coord}
              label={data.label}
              highlight={
                data.times.some((t) => t === time)
                  ? 'current'
                  : data.memorized
                    ? 'memorized'
                    : 'none'
              }
            />
          )
        )
      })}
    </Svg>
  )
}

export default Graph
