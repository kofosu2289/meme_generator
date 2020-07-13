import { useState, useEffect } from 'react'

export function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}