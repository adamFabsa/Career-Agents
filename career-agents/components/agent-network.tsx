"use client"

import { useEffect, useRef } from "react"

export function AgentNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Node class
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = 4
      }

      update(width: number, height: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        this.x = Math.max(0, Math.min(width, this.x))
        this.y = Math.max(0, Math.min(height, this.y))
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = "oklch(0.35 0.12 160)"
        ctx.fill()
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = 30
    const rect = canvas.getBoundingClientRect()

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(Math.random() * rect.width, Math.random() * rect.height))
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update(rect.width, rect.height)
        node.draw(ctx)
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 99, 65, ${1 - distance / 150})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <canvas ref={canvasRef} className="w-full h-full rounded-2xl bg-muted/30 border border-border" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-2 bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border">
          <div className="text-4xl font-bold text-primary">AI</div>
          <div className="text-sm text-muted-foreground">Career Agents</div>
        </div>
      </div>
    </div>
  )
}
