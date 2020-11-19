import React, { useRef, useEffect } from 'react'

const useInterval = (callback: () => void, delay: number | null) => {
  const latestCallback = useRef(() => {})

  useEffect(() => {
    latestCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (dalay !== null) {
      const id = setInterval(() => latestCallback.current(), delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval