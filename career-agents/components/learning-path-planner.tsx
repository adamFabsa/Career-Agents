"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sparkles, BookOpen, Code, Download, Plus, GripVertical } from "lucide-react"
import Link from "next/link"

interface PlanItem {
  id: string
  type: "course" | "project"
  title: string
  code?: string
  skills: string[]
  completed: boolean
}

interface Semester {
  id: string
  name: string
  items: PlanItem[]
}

const initialSemesters: Semester[] = [
  {
    id: "fall-2025",
    name: "Fall 2025",
    items: [
      {
        id: "1",
        type: "course",
        title: "Machine Learning",
        code: "CS 4375",
        skills: ["Python", "ML Algorithms"],
        completed: false,
      },
      {
        id: "2",
        type: "course",
        title: "Probability and Statistics",
        code: "STAT 4351",
        skills: ["Statistics", "R"],
        completed: false,
      },
      {
        id: "3",
        type: "project",
        title: "Build ML Classification Model",
        skills: ["Python", "Scikit-learn"],
        completed: false,
      },
    ],
  },
  {
    id: "spring-2026",
    name: "Spring 2026",
    items: [
      {
        id: "4",
        type: "course",
        title: "Natural Language Processing",
        code: "CS 4395",
        skills: ["NLP", "Deep Learning"],
        completed: false,
      },
      {
        id: "5",
        type: "course",
        title: "Advanced Algorithm Design",
        code: "CS 4349",
        skills: ["Algorithms", "Optimization"],
        completed: false,
      },
      {
        id: "6",
        type: "project",
        title: "NLP Sentiment Analysis App",
        skills: ["Python", "Transformers"],
        completed: false,
      },
    ],
  },
  {
    id: "fall-2026",
    name: "Fall 2026",
    items: [
      {
        id: "7",
        type: "course",
        title: "Database Systems",
        code: "CS 4485",
        skills: ["SQL", "Database Design"],
        completed: false,
      },
      {
        id: "8",
        type: "project",
        title: "Full-Stack Data Dashboard",
        skills: ["React", "Python", "SQL"],
        completed: false,
      },
    ],
  },
]

export function LearningPathPlanner() {
  const [semesters, setSemesters] = useState<Semester[]>(initialSemesters)

  const toggleComplete = (semesterId: string, itemId: string) => {
    setSemesters((prev) =>
      prev.map((semester) =>
        semester.id === semesterId
          ? {
              ...semester,
              items: semester.items.map((item) =>
                item.id === itemId ? { ...item, completed: !item.completed } : item,
              ),
            }
          : semester,
      ),
    )
  }

  const totalItems = semesters.reduce((acc, semester) => acc + semester.items.length, 0)
  const completedItems = semesters.reduce(
    (acc, semester) => acc + semester.items.filter((item) => item.completed).length,
    0,
  )
  const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

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
            <Link href="/planner" className="text-sm text-foreground font-medium">
              Planner
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Personalized Learning Path</h1>
          <p className="text-muted-foreground">Your roadmap to becoming a data scientist</p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Career Readiness</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {completedItems} of {totalItems} items completed
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export as PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="font-semibold text-foreground">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Semester Roadmap */}
        <div className="space-y-6">
          {semesters.map((semester) => {
            const semesterCompleted = semester.items.filter((item) => item.completed).length
            const semesterTotal = semester.items.length
            const semesterProgress = semesterTotal > 0 ? Math.round((semesterCompleted / semesterTotal) * 100) : 0

            return (
              <Card key={semester.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{semester.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {semesterCompleted} of {semesterTotal} completed
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{semesterProgress}%</span>
                      <Button variant="ghost" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Progress value={semesterProgress} className="h-2 mt-3" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {semester.items.map((item) => (
                      <Card
                        key={item.id}
                        className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                          item.completed ? "bg-muted/50 border-primary/30" : "bg-card"
                        }`}
                        onClick={() => toggleComplete(semester.id, item.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <GripVertical className="w-4 h-4 text-muted-foreground" />
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                item.completed ? "bg-primary border-primary" : "border-muted-foreground bg-transparent"
                              }`}
                            >
                              {item.completed && (
                                <svg
                                  className="w-3 h-3 text-primary-foreground"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  {item.type === "course" ? (
                                    <BookOpen className="w-4 h-4 text-primary" />
                                  ) : (
                                    <Code className="w-4 h-4 text-accent" />
                                  )}
                                  <h4
                                    className={`font-medium ${
                                      item.completed ? "text-muted-foreground line-through" : "text-card-foreground"
                                    }`}
                                  >
                                    {item.title}
                                  </h4>
                                </div>
                                {item.code && <p className="text-xs text-muted-foreground mb-2">{item.code}</p>}
                              </div>
                              <Badge variant={item.type === "course" ? "default" : "secondary"} className="text-xs">
                                {item.type === "course" ? "Course" : "Project"}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.skills.map((skill) => (
                                <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Add Semester Button */}
        <Card className="mt-6 p-8 text-center border-dashed cursor-pointer hover:bg-muted/30 transition-colors">
          <Plus className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Add another semester</p>
        </Card>
      </main>
    </div>
  )
}
