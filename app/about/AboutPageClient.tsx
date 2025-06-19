"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ImageIcon, Users, Zap, Shield, Globe, Heart } from "lucide-react"

export default function AboutPageClient() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "100K+", label: "Happy Users" },
    { icon: <Zap className="h-8 w-8" />, value: "1M+", label: "Images Converted" },
    { icon: <Shield className="h-8 w-8" />, value: "100%", label: "Privacy Protected" },
    { icon: <Globe className="h-8 w-8" />, value: "50+", label: "Countries Served" },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      description: "Passionate about creating user-friendly tools with cutting-edge technology.",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      description: "Focused on delivering intuitive and beautiful user experiences.",
    },
    {
      name: "Mike Rodriguez",
      role: "Security Engineer",
      description: "Ensures your data remains private and secure throughout the conversion process.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <ImageIcon className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            About Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe image conversion should be simple, secure, and accessible to everyone. Our tool processes
            everything locally in your browser, ensuring your privacy while delivering professional-quality results.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3 text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2023, Advanced Image Converter was born from a simple frustration: existing online tools were
                either too complex, required uploads to unknown servers, or lacked the quality we needed for
                professional work.
              </p>
              <p>
                We set out to create something different - a tool that respects your privacy by processing everything
                locally, delivers professional results, and remains completely free to use.
              </p>
              <p>
                Today, we're proud to serve users worldwide, converting millions of images while maintaining our core
                values of privacy, quality, and accessibility.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-purple-600/5">
              <CardContent className="p-0">
                <div className="flex items-center justify-center h-64">
                  <Heart className="h-32 w-32 text-primary/20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base">
                  All image processing happens in your browser. We never see, store, or transmit your files anywhere.
                  Your privacy is guaranteed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Speed & Quality</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base">
                  Optimized algorithms ensure fast conversion without compromising on quality. Professional results in
                  seconds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base">
                  Free forever, works on any device, no registration required. Image conversion should be accessible to
                  everyone.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
