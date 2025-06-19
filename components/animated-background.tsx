"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number
      size: number
      left: number
      type: number
      duration: number
      delay: number
      travelY: number
      travelX: number
      rotate: number
    }>
  >([])
  const { theme } = useTheme()

  useEffect(() => {
    const createBubbles = () => {
      const newBubbles = []
      const count = Math.floor(window.innerWidth / 80) // Adjust bubble count based on screen width

      for (let i = 0; i < count; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 100 + 50, // Random size between 50-150px
          left: Math.random() * 100, // Random position
          type: Math.floor(Math.random() * 5) + 1, // Random bubble type (1-5)
          duration: Math.random() * 60 + 60, // Random duration between 60-120s
          delay: Math.random() * 60, // Random delay
          travelY: Math.random() * -1000 - 200, // Random Y travel distance (negative to go up)
          travelX: Math.random() * 400 - 200, // Random X travel distance
          rotate: Math.random() * 360, // Random rotation
        })
      }

      setBubbles(newBubbles)
    }

    createBubbles()

    const handleResize = () => {
      createBubbles()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble bubble-${bubble.type}`}
          style={
            {
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: `-${bubble.size}px`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              "--travel-y": `${bubble.travelY}px`,
              "--travel-x": `${bubble.travelX}px`,
              "--rotate": `${bubble.rotate}deg`,
              opacity: theme === "dark" ? 0.3 : 0.2,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
