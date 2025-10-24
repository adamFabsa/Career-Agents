"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sparkles,
  Send,
  Plus,
  ChevronDown,
  Pin,
  User,
  Target,
  Briefcase,
  GraduationCap,
  Paperclip,
  X,
  FileText,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { CareerAgentsLogo } from "./career-agents-logo"

interface Message {
  id: string
  role: "user" | "agent"
  content: string
  reasoning?: string
  timestamp: Date
  pinned?: boolean
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "agent",
      content:
        "Hello! I'm your Career Agent. I can help you plan your career path at UTD by analyzing jobs, courses, and skills. What career goals would you like to explore today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "agent",
        content:
          "Based on your interest in data science, I recommend focusing on courses like CS 4375 (Machine Learning), CS 4395 (Natural Language Processing), and STAT 4351 (Probability). These courses will build a strong foundation in ML algorithms, statistical analysis, and practical implementation skills that are highly valued in data science roles.",
        reasoning:
          "I analyzed current job postings for data science positions and found that 87% require machine learning expertise, 72% need statistical analysis skills, and 65% prefer candidates with NLP experience. The recommended courses directly align with these requirements and are offered at UTD with high student satisfaction ratings.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
      setIsLoading(false)
    }, 1500)
  }

  const togglePin = (id: string) => {
    setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, pinned: !msg.pinned } : msg)))
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setAttachments((prev) => [...prev, ...files])
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-80 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <CareerAgentsLogo className="w-10 h-10" />
            <span className="text-lg font-semibold text-card-foreground">Career Agents</span>
          </Link>
          <Button className="w-full bg-transparent" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        <div className="p-4 space-y-4 flex-1 overflow-auto">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Student Profile
              </h3>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0" asChild>
                <Link href="/settings">
                  <Settings className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <Card className="p-3 space-y-2 bg-muted/30">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Major</p>
                  <p className="text-sm font-medium text-card-foreground">Computer Science</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Career Goal</p>
                  <p className="text-sm font-medium text-card-foreground">Data Scientist</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Top Skills</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Python</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">SQL</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Statistics</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-card-foreground mb-3 flex items-center gap-2">
              <Pin className="w-4 h-4" />
              Pinned Insights
            </h3>
            <div className="space-y-2">
              {messages
                .filter((msg) => msg.pinned)
                .map((msg) => (
                  <Card key={msg.id} className="p-3 bg-accent/10 border-accent/20">
                    <p className="text-xs text-card-foreground line-clamp-3">{msg.content}</p>
                  </Card>
                ))}
              {messages.filter((msg) => msg.pinned).length === 0 && (
                <p className="text-xs text-muted-foreground">No pinned insights yet</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-card-foreground mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/courses">View Courses</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/dashboard">Job Insights</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/planner">Learning Path</Link>
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="border-b border-border p-4 bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-card-foreground">Career Planning Chat</h1>
              <p className="text-sm text-muted-foreground">Ask anything about your career path</p>
            </div>
            <Button variant="outline" size="sm">
              Saved Plans
            </Button>
          </div>
        </header>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                {message.role === "agent" && (
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div className={`flex-1 space-y-2 ${message.role === "user" ? "max-w-lg" : ""}`}>
                  <Card
                    className={`p-4 ${
                      message.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-card border-border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </Card>

                  {message.role === "agent" && (
                    <div className="flex items-center gap-2">
                      {message.reasoning && (
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-7 text-xs">
                              <ChevronDown className="w-3 h-3 mr-1" />
                              Explain Reasoning
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <Card className="mt-2 p-3 bg-muted/50 border-muted">
                              <p className="text-xs text-muted-foreground leading-relaxed">{message.reasoning}</p>
                            </Card>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                      <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => togglePin(message.id)}>
                        <Pin className={`w-3 h-3 mr-1 ${message.pinned ? "fill-current" : ""}`} />
                        {message.pinned ? "Unpin" : "Pin"}
                      </Button>
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
                </div>
                <Card className="p-4 bg-card border-border">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <div className="max-w-3xl mx-auto">
            {attachments.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {attachments.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg text-sm">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground max-w-[200px] truncate">{file.name}</span>
                    <button
                      onClick={() => removeAttachment(index)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex gap-2"
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
              >
                <Paperclip className="w-4 h-4" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask: How can I become a data scientist? (Attach transcript/resume)"
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              AI-powered career guidance for UTD students • Attach transcripts & resumes for personalized advice
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
