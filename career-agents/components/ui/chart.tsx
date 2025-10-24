"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: Record<string, { label: string; color: string }>
  }
>(({ className, children, config, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
    hideLabel?: boolean
    hideIndicator?: boolean
  }
>(({ active, payload, label, hideLabel, hideIndicator }, ref) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div ref={ref} className="rounded-lg border bg-background p-2 shadow-md">
      {!hideLabel && label && <div className="mb-1 font-medium text-xs text-foreground">{label}</div>}
      <div className="space-y-1">
        {payload.map((item: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            {!hideIndicator && <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />}
            <span className="text-muted-foreground">{item.name}:</span>
            <span className="font-medium text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
