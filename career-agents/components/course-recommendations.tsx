"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Plus, BookOpen, Filter } from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  code: string
  name: string
  department: string
  level: string
  semester: string
  confidence: number
  skills: string[]
  reason: string
}

const mockCourses: Course[] = [
  {
    id: "1",
    code: "CS 4375",
    name: "Machine Learning",
    department: "Computer Science",
    level: "Senior",
    semester: "Fall 2025",
    confidence: 95,
    skills: ["Python", "ML Algorithms", "Data Analysis"],
    reason: "Essential for data science roles. Covers supervised and unsupervised learning algorithms.",
  },
  {
    id: "2",
    code: "CS 4395",
    name: "Natural Language Processing",
    department: "Computer Science",
    level: "Senior",
    semester: "Spring 2026",
    confidence: 88,
    skills: ["NLP", "Deep Learning", "Python"],
    reason: "High demand skill in AI/ML roles. 65% of data science jobs prefer NLP experience.",
  },
  {
    id: "3",
    code: "STAT 4351",
    name: "Probability and Statistics",
    department: "Statistics",
    level: "Senior",
    semester: "Fall 2025",
    confidence: 92,
    skills: ["Statistics", "Probability", "R"],
    reason: "Foundation for data analysis and ML. Required by 87% of data science positions.",
  },
  {
    id: "4",
    code: "CS 4349",
    name: "Advanced Algorithm Design",
    department: "Computer Science",
    level: "Senior",
    semester: "Spring 2026",
    confidence: 78,
    skills: ["Algorithms", "Problem Solving", "Optimization"],
    reason: "Strengthens algorithmic thinking crucial for technical interviews and complex data problems.",
  },
  {
    id: "5",
    code: "CS 4485",
    name: "Database Systems",
    department: "Computer Science",
    level: "Senior",
    semester: "Fall 2025",
    confidence: 85,
    skills: ["SQL", "Database Design", "Data Modeling"],
    reason: "Data management is core to data science. 90% of roles require strong SQL skills.",
  },
  {
    id: "6",
    code: "CS 4390",
    name: "Computer Networks",
    department: "Computer Science",
    level: "Senior",
    semester: "Spring 2026",
    confidence: 65,
    skills: ["Networking", "Protocols", "Systems"],
    reason: "Useful for distributed systems and cloud-based ML deployments.",
  },
]

export function CourseRecommendations() {
  const [courses] = useState<Course[]>(mockCourses)
  const [departmentFilter, setDepartmentFilter] = useState<string>("all")
  const [levelFilter, setLevelFilter] = useState<string>("all")
  const [semesterFilter, setSemesterFilter] = useState<string>("all")

  const filteredCourses = courses.filter((course) => {
    if (departmentFilter !== "all" && course.department !== departmentFilter) return false
    if (levelFilter !== "all" && course.level !== levelFilter) return false
    if (semesterFilter !== "all" && course.semester !== semesterFilter) return false
    return true
  })

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
            <Link href="/courses" className="text-sm text-foreground font-medium">
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Smart Course Recommendations</h1>
          <p className="text-muted-foreground">
            AI-powered course suggestions tailored to your data science career goal
          </p>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <h2 className="text-sm font-semibold text-card-foreground">Filters</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Department</label>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Statistics">Statistics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Level</label>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Junior">Junior</SelectItem>
                  <SelectItem value="Senior">Senior</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Semester</label>
              <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  <SelectItem value="Fall 2025">Fall 2025</SelectItem>
                  <SelectItem value="Spring 2026">Spring 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              {/* Course Header */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-card-foreground">{course.code}</h3>
                    <p className="text-sm text-muted-foreground">{course.name}</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{course.department}</span>
                  <span>•</span>
                  <span>{course.semester}</span>
                </div>
              </div>

              {/* Confidence Score */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Confidence Score</span>
                  <span className="font-semibold text-card-foreground">{course.confidence}%</span>
                </div>
                <Progress value={course.confidence} className="h-2" />
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Skills Taught</p>
                <div className="flex flex-wrap gap-1.5">
                  {course.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Reason */}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Why this course matters</p>
                <p className="text-sm text-card-foreground leading-relaxed">{course.reason}</p>
              </div>

              {/* Action Button */}
              <Button className="w-full bg-transparent" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add to My Plan
              </Button>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="p-12 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more recommendations</p>
          </Card>
        )}
      </main>
    </div>
  )
}
