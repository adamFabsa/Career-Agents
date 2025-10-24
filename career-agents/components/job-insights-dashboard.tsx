"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, TrendingUp, DollarSign, Briefcase } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Line, LineChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const topJobsData = [
  { role: "Data Scientist", count: 1250 },
  { role: "ML Engineer", count: 980 },
  { role: "Data Analyst", count: 850 },
  { role: "AI Researcher", count: 620 },
  { role: "Data Engineer", count: 540 },
]

const trendingSkillsData = [
  { month: "Jan", python: 85, sql: 72, ml: 68 },
  { month: "Feb", python: 87, sql: 74, ml: 71 },
  { month: "Mar", python: 89, sql: 76, ml: 75 },
  { month: "Apr", python: 91, sql: 78, ml: 79 },
  { month: "May", python: 93, sql: 80, ml: 82 },
  { month: "Jun", python: 95, sql: 82, ml: 85 },
]

const salaryData = [
  { city: "San Francisco", salary: 145 },
  { city: "New York", salary: 135 },
  { city: "Seattle", salary: 130 },
  { city: "Austin", salary: 115 },
  { city: "Dallas", salary: 105 },
  { city: "Boston", salary: 125 },
]

export function JobInsightsDashboard() {
  const [cityFilter, setCityFilter] = useState<string>("all")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [industryFilter, setIndustryFilter] = useState<string>("all")

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
            <Link href="/dashboard" className="text-sm text-foreground font-medium">
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Market Insights</h1>
          <p className="text-muted-foreground">Real-time data on trending jobs, skills, and salaries</p>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">City</label>
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="seattle">Seattle</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="dallas">Dallas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Role</label>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="data-scientist">Data Scientist</SelectItem>
                  <SelectItem value="ml-engineer">ML Engineer</SelectItem>
                  <SelectItem value="data-analyst">Data Analyst</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Industry</label>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Job Openings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">4,240</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+12%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Salary</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">$125K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+8%</span> from last year
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trending Skills</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">Python</div>
              <p className="text-xs text-muted-foreground">95% of data science jobs</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Top Job Roles */}
          <Card>
            <CardHeader>
              <CardTitle>Top Job Roles</CardTitle>
              <CardDescription>Most in-demand positions in data science</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  count: {
                    label: "Job Openings",
                    color: "oklch(0.35 0.12 160)",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topJobsData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
                    <XAxis type="number" stroke="oklch(0.556 0 0)" />
                    <YAxis dataKey="role" type="category" width={120} stroke="oklch(0.556 0 0)" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="oklch(0.35 0.12 160)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Trending Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Skills</CardTitle>
              <CardDescription>Skill demand over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  python: {
                    label: "Python",
                    color: "oklch(0.35 0.12 160)",
                  },
                  sql: {
                    label: "SQL",
                    color: "oklch(0.65 0.18 45)",
                  },
                  ml: {
                    label: "Machine Learning",
                    color: "oklch(0.6 0.118 184.704)",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendingSkillsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
                    <XAxis dataKey="month" stroke="oklch(0.556 0 0)" />
                    <YAxis stroke="oklch(0.556 0 0)" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="python" stroke="oklch(0.35 0.12 160)" strokeWidth={2} />
                    <Line type="monotone" dataKey="sql" stroke="oklch(0.65 0.18 45)" strokeWidth={2} />
                    <Line type="monotone" dataKey="ml" stroke="oklch(0.6 0.118 184.704)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Salary by City */}
        <Card>
          <CardHeader>
            <CardTitle>Average Salary by City</CardTitle>
            <CardDescription>Data science salaries across major tech hubs (in thousands)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                salary: {
                  label: "Salary (K)",
                  color: "oklch(0.65 0.18 45)",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
                  <XAxis dataKey="city" stroke="oklch(0.556 0 0)" />
                  <YAxis stroke="oklch(0.556 0 0)" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="salary" fill="oklch(0.65 0.18 45)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
