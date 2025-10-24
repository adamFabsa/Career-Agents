"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge as UIBadge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Award, Target, TrendingUp, Share2, Trophy, Star, Zap } from "lucide-react"
import Link from "next/link"

interface Skill {
  name: string
  level: number
  maxLevel: number
}

const mockBadges: {
  id: string
  name: string
  description: string
  icon: string
  earned: boolean
  earnedDate?: string
}[] = [
  {
    id: "1",
    name: "First Course",
    description: "Completed your first course",
    icon: "🎓",
    earned: true,
    earnedDate: "2025-01-15",
  },
  {
    id: "2",
    name: "ML Master",
    description: "Completed 3 machine learning courses",
    icon: "🤖",
    earned: true,
    earnedDate: "2025-02-20",
  },
  {
    id: "3",
    name: "Project Builder",
    description: "Built your first portfolio project",
    icon: "🔨",
    earned: true,
    earnedDate: "2025-03-10",
  },
  {
    id: "4",
    name: "Data Wizard",
    description: "Master data analysis and visualization",
    icon: "📊",
    earned: false,
  },
  {
    id: "5",
    name: "Code Warrior",
    description: "Complete 10 coding challenges",
    icon: "⚔️",
    earned: false,
  },
  {
    id: "6",
    name: "Career Ready",
    description: "Reach 100% career readiness",
    icon: "🎯",
    earned: false,
  },
]

const mockSkills: Skill[] = [
  { name: "Python", level: 8, maxLevel: 10 },
  { name: "Machine Learning", level: 7, maxLevel: 10 },
  { name: "SQL", level: 6, maxLevel: 10 },
  { name: "Data Visualization", level: 5, maxLevel: 10 },
  { name: "Statistics", level: 6, maxLevel: 10 },
  { name: "Deep Learning", level: 4, maxLevel: 10 },
]

const milestones = [
  { title: "Completed first course", date: "Jan 15, 2025", type: "course" },
  { title: "Built ML classification model", date: "Feb 20, 2025", type: "project" },
  { title: "Earned ML Master badge", date: "Feb 20, 2025", type: "badge" },
  { title: "Completed NLP course", date: "Mar 10, 2025", type: "course" },
]

export function ProgressTracking() {
  const [badges] = useState(mockBadges)
  const [skills] = useState(mockSkills)
  const [showConfetti, setShowConfetti] = useState(false)

  const careerReadiness = 68
  const earnedBadges = badges.filter((b) => b.earned).length
  const totalBadges = badges.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-card-foreground">Career Agents</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Chat
            </Link>
            <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </Link>
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/planner" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Planner
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Career Progress</h1>
          <p className="text-muted-foreground">Track your journey to becoming a data scientist</p>
        </div>

        {/* Career Readiness Card */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Career Readiness Score</CardTitle>
                  <CardDescription>Your overall progress toward career goals</CardDescription>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Progress
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold text-foreground">{careerReadiness}%</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-medium">+12% this month</span>
                </div>
              </div>
              <Progress value={careerReadiness} className="h-4" />
              <p className="text-sm text-muted-foreground">
                Keep going! Complete 3 more courses to reach 80% readiness.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Skill Levels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Skill Levels
              </CardTitle>
              <CardDescription>Your proficiency in key data science skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-card-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">
                      Level {skill.level}/{skill.maxLevel}
                    </span>
                  </div>
                  <Progress value={(skill.level / skill.maxLevel) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                Recent Milestones
              </CardTitle>
              <CardDescription>Your latest achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.type === "course"
                          ? "bg-primary/10 text-primary"
                          : milestone.type === "project"
                            ? "bg-accent/10 text-accent"
                            : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {milestone.type === "course" ? (
                        <Award className="w-4 h-4" />
                      ) : milestone.type === "project" ? (
                        <Star className="w-4 h-4" />
                      ) : (
                        <Trophy className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">{milestone.title}</p>
                      <p className="text-xs text-muted-foreground">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges & Achievements */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Badges & Achievements
                </CardTitle>
                <CardDescription>
                  {earnedBadges} of {totalBadges} badges earned
                </CardDescription>
              </div>
              <Progress value={(earnedBadges / totalBadges) * 100} className="w-32 h-2" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {badges.map((badge) => (
                <Card
                  key={badge.id}
                  className={`p-4 text-center transition-all ${
                    badge.earned
                      ? "bg-primary/5 border-primary/20 hover:shadow-md"
                      : "bg-muted/30 border-muted opacity-60"
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <h4 className="font-semibold text-card-foreground mb-1">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                  {badge.earned ? (
                    <UIBadge variant="default" className="text-xs">
                      Earned {badge.earnedDate}
                    </UIBadge>
                  ) : (
                    <UIBadge variant="outline" className="text-xs">
                      Locked
                    </UIBadge>
                  )}
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
