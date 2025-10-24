"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Code, ExternalLink, Github, Lightbulb } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  skills: string[]
  techStack: string[]
  estimatedTime: string
  guideUrl?: string
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction Model",
    description:
      "Build a machine learning model to predict customer churn using historical data. Implement feature engineering, model training, and evaluation metrics.",
    difficulty: "Intermediate",
    skills: ["Machine Learning", "Python", "Data Analysis"],
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    estimatedTime: "2-3 weeks",
  },
  {
    id: "2",
    title: "Real-Time Sentiment Analysis Dashboard",
    description:
      "Create a web application that performs real-time sentiment analysis on social media data. Visualize trends and insights with interactive charts.",
    difficulty: "Advanced",
    skills: ["NLP", "Web Development", "Data Visualization"],
    techStack: ["Python", "React", "FastAPI", "Transformers", "Recharts"],
    estimatedTime: "3-4 weeks",
  },
  {
    id: "3",
    title: "SQL Database Design for E-commerce",
    description:
      "Design and implement a normalized database schema for an e-commerce platform. Include complex queries, indexes, and stored procedures.",
    difficulty: "Intermediate",
    skills: ["SQL", "Database Design", "Data Modeling"],
    techStack: ["PostgreSQL", "SQL", "ER Diagrams"],
    estimatedTime: "1-2 weeks",
  },
  {
    id: "4",
    title: "Image Classification with CNNs",
    description:
      "Build a convolutional neural network to classify images into categories. Train on a public dataset and deploy as a web API.",
    difficulty: "Advanced",
    skills: ["Deep Learning", "Computer Vision", "Python"],
    techStack: ["Python", "TensorFlow", "Keras", "Flask"],
    estimatedTime: "3-4 weeks",
  },
  {
    id: "5",
    title: "Data Cleaning and EDA Portfolio",
    description:
      "Demonstrate data cleaning and exploratory data analysis skills on multiple datasets. Create detailed Jupyter notebooks with visualizations.",
    difficulty: "Beginner",
    skills: ["Data Analysis", "Python", "Visualization"],
    techStack: ["Python", "Pandas", "Seaborn", "Jupyter"],
    estimatedTime: "1 week",
  },
  {
    id: "6",
    title: "Recommendation System",
    description:
      "Build a collaborative filtering recommendation system for movies or products. Implement both user-based and item-based approaches.",
    difficulty: "Intermediate",
    skills: ["Machine Learning", "Python", "Algorithms"],
    techStack: ["Python", "Scikit-learn", "NumPy", "Surprise"],
    estimatedTime: "2-3 weeks",
  },
]

export function PortfolioGenerator() {
  const [projects] = useState<Project[]>(mockProjects)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")

  const filteredProjects =
    selectedDifficulty === "all" ? projects : projects.filter((p) => p.difficulty === selectedDifficulty)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-primary/10 text-primary border-primary/20"
      case "Intermediate":
        return "bg-accent/10 text-accent border-accent/20"
      case "Advanced":
        return "bg-destructive/10 text-destructive border-destructive/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

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
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Project Generator</h1>
              <p className="text-muted-foreground">AI-suggested projects to build your data science portfolio</p>
            </div>
            <Button>
              <Github className="w-4 h-4 mr-2" />
              Connect GitHub
            </Button>
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2">
            <Button
              variant={selectedDifficulty === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty("all")}
            >
              All Projects
            </Button>
            <Button
              variant={selectedDifficulty === "Beginner" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty("Beginner")}
            >
              Beginner
            </Button>
            <Button
              variant={selectedDifficulty === "Intermediate" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty("Intermediate")}
            >
              Intermediate
            </Button>
            <Button
              variant={selectedDifficulty === "Advanced" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty("Advanced")}
            >
              Advanced
            </Button>
          </div>
        </div>

        {/* Info Card */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-card-foreground leading-relaxed">
                These projects are tailored to your data science career goal. Each project helps you build practical
                skills that employers look for. Start with beginner projects and work your way up!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Code className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <Badge className={getDifficultyColor(project.difficulty)} variant="outline">
                    {project.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                {/* Skills */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Key Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Estimated Time */}
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Estimated time:</span> {project.estimatedTime}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-4">
                  <Button className="flex-1" variant="default">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Guide
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="p-12 text-center">
            <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try selecting a different difficulty level</p>
          </Card>
        )}
      </main>
    </div>
  )
}
