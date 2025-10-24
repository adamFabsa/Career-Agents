"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CareerAgentsLogo } from "./career-agents-logo"
import { ArrowLeft, Save, User, GraduationCap, Target, Briefcase, Plus, X } from "lucide-react"
import Link from "next/link"

export function SettingsPage() {
  const [major, setMajor] = useState("Computer Science")
  const [careerGoal, setCareerGoal] = useState("Data Scientist")
  const [skills, setSkills] = useState(["Python", "SQL", "Statistics"])
  const [newSkill, setNewSkill] = useState("")
  const [bio, setBio] = useState("Junior at UTD passionate about data science and machine learning.")
  const [isSaving, setIsSaving] = useState(false)

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleSave = () => {
    setIsSaving(true)
    // Simulate save
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/chat">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <CareerAgentsLogo className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-semibold text-card-foreground">Student Profile Settings</h1>
                <p className="text-sm text-muted-foreground">Manage your career profile and preferences</p>
              </div>
            </div>
          </div>
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Profile Overview */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-card-foreground">Your Profile</h2>
                <p className="text-muted-foreground">Update your information to get better recommendations</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="bio" className="text-sm font-medium text-card-foreground mb-2 block">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </Card>

          {/* Academic Information */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">Academic Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="major" className="text-sm font-medium text-card-foreground mb-2 block">
                  Major
                </Label>
                <Input
                  id="major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  placeholder="e.g., Computer Science"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Expected Graduation</Label>
                <Input type="month" placeholder="2026-05" />
              </div>
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Current GPA</Label>
                <Input type="number" step="0.01" min="0" max="4" placeholder="3.75" />
              </div>
            </div>
          </Card>

          {/* Career Goals */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-card-foreground">Career Goals</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="career-goal" className="text-sm font-medium text-card-foreground mb-2 block">
                  Primary Career Goal
                </Label>
                <Input
                  id="career-goal"
                  value={careerGoal}
                  onChange={(e) => setCareerGoal(e.target.value)}
                  placeholder="e.g., Data Scientist, Software Engineer"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Target Companies</Label>
                <Input placeholder="e.g., Google, Microsoft, Amazon (comma separated)" />
              </div>
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Preferred Work Location</Label>
                <Input placeholder="e.g., Dallas, Remote, San Francisco" />
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">Top Skills</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Your Skills</Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                      <button onClick={() => removeSkill(skill)} className="hover:bg-primary/20 rounded-full p-0.5">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addSkill()
                      }
                    }}
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Skills to Learn</Label>
                <Input placeholder="e.g., React, TensorFlow, AWS (comma separated)" />
              </div>
            </div>
          </Card>

          {/* Preferences */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">Preferred Learning Style</Label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option>Hands-on Projects</option>
                  <option>Theoretical Learning</option>
                  <option>Mixed Approach</option>
                </select>
              </div>
              <div>
                <Label className="text-sm font-medium text-card-foreground mb-2 block">
                  Weekly Study Hours Available
                </Label>
                <Input type="number" min="0" placeholder="15" />
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" asChild>
              <Link href="/chat">Cancel</Link>
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save All Changes"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
