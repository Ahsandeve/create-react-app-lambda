import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Advanced Image Converter | Get Help & Support",
  description:
    "Contact Advanced Image Converter for support, questions, or feedback. We're here to help with your image conversion needs.",
  keywords: "contact image converter, support, help, customer service, feedback, technical support",
  openGraph: {
    title: "Contact Advanced Image Converter - Get Help & Support",
    description:
      "Need help with image conversion? Contact our support team for assistance with our free image conversion tool.",
    type: "website",
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Support",
      description: "Get detailed help via email",
      detail: "support@imageconverter.com",
      time: "Response within 24 hours",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Live Chat",
      description: "Instant help when available",
      detail: "Available on our website",
      time: "Mon-Fri, 9 AM - 6 PM UTC",
    },
    {
      icon: <Phone className="h-8 w-8 text-purple-600" />,
      title: "Community Forum",
      description: "Get help from our community",
      detail: "forum.imageconverter.com",
      time: "24/7 community support",
    },
  ]

  const supportTopics = [
    {
      title: "Technical Issues",
      description: "Problems with image conversion, browser compatibility, or tool functionality",
    },
    {
      title: "Feature Requests",
      description: "Suggestions for new features or improvements to existing functionality",
    },
    {
      title: "Privacy & Security",
      description: "Questions about data handling, privacy, or security measures",
    },
    {
      title: "Business Inquiries",
      description: "Partnership opportunities, licensing, or commercial use questions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We're here to help! Get in touch with our support team for assistance, feedback, or questions.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Reach Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the best way to get in touch based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{method.icon}</div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">{method.detail}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{method.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                  >
                    <option value="">Select a category</option>
                    <option value="technical">Technical Issues</option>
                    <option value="feature">Feature Request</option>
                    <option value="privacy">Privacy & Security</option>
                    <option value="business">Business Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your question or issue..." rows={6} />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Support Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Support Topics</h2>
              <div className="space-y-4">
                {supportTopics.map((topic, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Technical Issues</span>
                      <span className="font-semibold">4-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>General Questions</span>
                      <span className="font-semibold">12-24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feature Requests</span>
                      <span className="font-semibold">2-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business Inquiries</span>
                      <span className="font-semibold">1-2 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Is the service really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, Advanced Image Converter is completely free to use with no hidden costs or subscription fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are my images secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Absolutely. All processing happens in your browser - your images never leave your device.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What formats are supported?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We support JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and HEIC formats with more coming soon.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is there a file size limit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  No server-side limits! Processing happens on your device, so it depends on your browser and device
                  capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
