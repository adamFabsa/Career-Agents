"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Award, Share2 } from "lucide-react"
import Link from "next/link"

interface ProgressWidgetProps {
  readiness: number
  earnedBadges: number
  totalBadges: number
  recentBadge?: {
    name: string
    icon: string
  }
}

export function ProgressWidget({ readiness, earnedBadges, totalBadges, recentBadge }: ProgressWidgetProps) {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Career Progress
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/progress">View All</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Readiness Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Readiness Score</span>
            <span className="text-2xl font-bold text-foreground">{readiness}%</span>
          </div>
          <Progress value={readiness} className="h-3" />
        </div>

        {/* Badges */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              {earnedBadges}/{totalBadges} Badges
            </span>
          </div>
          {recentBadge && (
            <Badge variant="secondary" className="text-xs">
              <span className="mr-1">{recentBadge.icon}</span>
              {recentBadge.name}
            </Badge>
          )}
        </div>

        {/* Share Button */}
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <Share2 className="w-4 h-4 mr-2" />
          Share Progress
        </Button>
      </CardContent>
    </Card>
  )
}
