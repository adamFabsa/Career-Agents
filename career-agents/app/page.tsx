import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AgentNetwork } from "@/components/agent-network"
import { CareerAgentsLogo } from "@/components/career-agents-logo"
import { Sparkles, TrendingUp, BookOpen, Target } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CareerAgentsLogo className="w-10 h-10" />
            <span className="text-xl font-semibold text-foreground">Career Agents</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link href="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              For UTD Students
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Plan your UTD career with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Intelligent agents that analyze jobs, courses, and skills — to guide your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/chat">Launch Career Chat</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <AgentNetwork />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Everything you need to plan your career
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              AI-powered insights and personalized recommendations to help you succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="AI Career Chat"
              description="Conversational interface with intelligent agents that understand your goals and provide personalized guidance."
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Smart Course Recommendations"
              description="Get course suggestions based on your career goals, with confidence scores and skill mappings."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Job Market Insights"
              description="Real-time data on trending jobs, in-demand skills, and salary information across industries."
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Personalized Learning Path"
              description="Drag-and-drop semester planner with courses and projects tailored to your career trajectory."
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Portfolio Projects"
              description="AI-generated project ideas with tech stacks and guides to build your portfolio."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Progress Tracking"
              description="Gamified career readiness score with skill badges and achievement milestones."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How it works</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Get started in minutes with our AI-powered career planning platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard
              number="1"
              title="Share Your Goals"
              description="Tell us about your career aspirations and interests through our conversational interface."
            />
            <StepCard
              number="2"
              title="Get Personalized Insights"
              description="Our AI agents analyze your profile and provide tailored course, skill, and project recommendations."
            />
            <StepCard
              number="3"
              title="Track Your Progress"
              description="Follow your personalized learning path and watch your career readiness score grow."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to plan your future?</h2>
          <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto opacity-90">
            Join UTD students who are using AI to make smarter career decisions
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link href="/chat">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold text-foreground">Career Agents</span>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered career planning for UTD students</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/chat" className="hover:text-foreground transition-colors">
                    Career Chat
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-foreground transition-colors">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Career Agents. Built for UTD students.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-3 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">{icon}</div>
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center space-y-3">
      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
