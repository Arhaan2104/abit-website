"use client"

import { useEffect, useRef } from "react"

interface TrailParticle {
  x: number
  y: number
  timestamp: number
  id: number
}

export function CursorFollower() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<TrailParticle[]>([])
  const particleIdRef = useRef(0)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const particle: TrailParticle = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        id: particleIdRef.current++,
      }
      particlesRef.current.push(particle)

      // Limit number of particles
      if (particlesRef.current.length > 30) {
        particlesRef.current.shift()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = Date.now()
      const trailLifetime = 600 // milliseconds

      // Remove old particles
      particlesRef.current = particlesRef.current.filter(
        (p) => now - p.timestamp < trailLifetime
      )

      // Draw particles with chalky texture
      particlesRef.current.forEach((particle) => {
        const age = now - particle.timestamp
        const progress = age / trailLifetime
        const alpha = 1 - progress // Fade out over time
        const size = 8 - progress * 4 // Shrink over time

        // Create chalky effect with multiple overlapping circles
        for (let i = 0; i < 3; i++) {
          const offset = Math.random() * 2 - 1
          ctx.beginPath()
          ctx.arc(
            particle.x + offset,
            particle.y + offset,
            size + Math.random() * 2,
            0,
            Math.PI * 2
          )

          // Use ABIT brand colors - yellow with slight variation
          const yellowShade = 188 + Math.random() * 15 // Varying the BC in FABC0D
          ctx.fillStyle = `rgba(250, ${yellowShade}, 13, ${alpha * 0.15})`
          ctx.fill()
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
