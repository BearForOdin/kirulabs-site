'use client'

import React, { useEffect, useRef } from 'react'

/**
 * Purple floating line constellations canvas.
 * Renders purple nodes and constellation lines that drift and connect to the cursor.
 */
export function SlxInteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    }

    const particles = Array.from({ length: 58 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.6 + 0.5,
      radius: Math.random() * 1.8 + 0.9,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }))

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      const isDark = document.documentElement.classList.contains('dark')
      const dotColor = isDark
        ? 'rgba(192, 132, 252, 0.65)'
        : 'rgba(147, 51, 234, 0.55)'

      const offsetX = (mouse.x - width / 2) * 0.03
      const offsetY = (mouse.y - height / 2) * 0.03

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        const drawX = p.x - offsetX * p.z
        const drawY = p.y - offsetY * p.z

        ctx.beginPath()
        ctx.arc(drawX, drawY, p.radius * p.z * 0.75, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.fill()

        // Connect constellation lines in purple
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const drawX2 = p2.x - offsetX * p2.z
          const drawY2 = p2.y - offsetY * p2.z
          const dx = drawX - drawX2
          const dy = drawY - drawY2
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 165) {
            const alpha = (1 - dist / 165) * (isDark ? 0.32 : 0.26)
            ctx.beginPath()
            ctx.moveTo(drawX, drawY)
            ctx.lineTo(drawX2, drawY2)
            ctx.strokeStyle = isDark
              ? `rgba(168, 85, 247, ${alpha.toFixed(3)})`
              : `rgba(147, 51, 234, ${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
