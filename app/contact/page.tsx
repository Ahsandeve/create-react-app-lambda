import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Advanced Image Converter | Get Help & Support",
  description:
    "Need help with image conversion? Contact our support team for assistance, feedback, or business inquiries. We're here to help with all your image processing needs.",
  keywords: "contact support, image converter help, customer service, technical support, business inquiries",
  openGraph: {
    title: "Contact Advanced Image Converter Support",
    description: "Get help with image conversion and technical support",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions, feedback, or need assistance? We're here to help you get the most out of your image
            conversion experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Send us a Message</CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" id="contact-form">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject *
                  </Label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a topic</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="business-inquiry">Business Inquiry</option>
                    <option value="privacy-question">Privacy Question</option>
                    <option value="general-feedback">General Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    placeholder="Please describe your question or feedback in detail..."
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Privacy Note:</strong> This form does not collect any image data. We only store your contact
                    information to respond to your inquiry.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Email Support</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">support@advancedimageconverter.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Live Chat</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Response Time</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <MessageSquare className="h-6 w-6" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-100 mb-4">
                  Before reaching out, check our comprehensive FAQ section for quick answers to common questions.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  asChild
                >
                  <a href="/#faq">View FAQ Section</a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Inquiries */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                  Business Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Partnership Opportunities</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">business@advancedimageconverter.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">API & Integration</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">api@advancedimageconverter.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Press & Media</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">press@advancedimageconverter.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Support Hours */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                  <span className="font-medium text-gray-800 dark:text-white">9:00 AM - 6:00 PM (EST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                  <span className="font-medium text-gray-800 dark:text-white">10:00 AM - 4:00 PM (EST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                  <span className="font-medium text-gray-800 dark:text-white">Email only</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Emergency Support:</strong> For critical issues, email us with "URGENT" in the subject line.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
