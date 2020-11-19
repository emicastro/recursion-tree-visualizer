import { Point } from '../../types'

// Vector returns the difference between two points
function vector(P: Point, Q: Point): Point {
  return [Q[0] - P[0], Q[1] - P[1]]
}

// Norm returns the norm of the vector PQ
function norm(P: Point, Q: Point) {
  const dx = vector(P, Q)[0]
  const dy = vector(P, Q)[1]
  return Math.sqrt(dx**2 + dy**2)
}

// Translate returns the point P moved as many as vector V's length
function translate(P: Point, V: Point): Point {
  return [V[0] + P[0], V[1] + P[1]]
}

// Scale returns point V times scalar k
function scale(V: Point, k: number): Point {
  return [V[0] * k, V[1] * k]
}

// PointOnLine returns the point on the line defined by points P and Q
// which is at distance d from the point Q
export function pointOnLine(P: Point, Q: Point, d: number): Point {
  return translate(Q, scale(vector(Q, P), d / norm(P, Q)))
}

// CentralPoint returns the central point between P and Q
export function centralPoint(P: Point, Q: Point): Point {
  return [(P[0] + Q[0])/2, (P[1] + Q[1])/2]
}