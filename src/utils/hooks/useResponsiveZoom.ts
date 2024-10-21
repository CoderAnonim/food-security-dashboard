import { useState, useEffect } from "react"

export const useResponsiveZoom = () => {
  const [zoomLevel, setZoomLevel] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setZoomLevel(3) // Mobile
      } else if (width < 1024) {
        setZoomLevel(4) // Tablet
      } else {
        setZoomLevel(5) // Desktop
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Set initial zoom level based on screen size

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return zoomLevel
}
