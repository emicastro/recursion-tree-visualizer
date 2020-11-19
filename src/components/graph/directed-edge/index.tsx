import React, { useRef, useEffect } from 'react'
import { Container, Line, Text } from './styles/directed-edge'
import { pointOnLine, centralPoint } from './utils'
import { VERTEX_RADIUS } from '../constants'
import { Point } from '../../../types'

type Props = {
  start: Point,
  end: Point,
  label?: string,
  highlight?: boolean
}

const DirectedEdge = ({ start, end, label, highlight = false}: Props) => {
  // renders an arrow from P to Q
  const P = pointOnLine(end, start, VERTEX_RADIUS)
  const Q = pointOnLine(start, end, VERTEX_RADIUS + 10)
  const C = centralPoint(P, Q)

  const animateRef1 = useRef<SVGAnimateElement>(null)
  const animateRef2 = useRef<SVGAnimateElement>(null)

  useEffect(() => {
    if (
      animateRef1.current === null || animateRef2.current === null
    )
    return

    // restart a SMIL animation
    // @ts-ignore
    animateRef1.current.beginElement()
    // @ts-ignore
    animateRef2.current.beginElement()
  }, [start, end])

  return (
    <Container highlight={highlight}>
    { /*FIXME: defs is rendered many times unnecessary. Find out another way to make an arrowhead. */ }
      <defs>
        <marker
          id={`arrowhead-${start}${end}`}
          markerWidth='6'
          markerHeight='4'
          refX='5'
          refY='2'
          orient='auto'
          markerUnits='strokeWidth'
        >
          <path d='M 2,0 L 2,4 L 6,2 Z' />
        </marker>
      </defs>

      <Line
        x1={P[0]}
        y1={P[1]}
        x2={Q[0]}
        y2={Q[1]}
        markerEnd={`url(#arrowhead-${start}${end})`}
      >
        <animate
          ref={animateRef1}
          attributeName='x2'
          from={P[0]}
          to={Q[0]}
          dur='0.2s'
          repeatCount='1'
          restart='whenNotActive'
        />
        <animate
          ref={animateRef2}
          attributeName='y2'
          from={P[1]}
          to={Q[1]}
          dur='0.2s'
          repeatCount='1'
          restart='whenNotActive'
        />
      </Line>

      <Text x={C[0]} y={C[1]}>
        {label}
      </Text>
    </Container>
  )
}

export default DirectedEdge