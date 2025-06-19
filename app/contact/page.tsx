import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Advanced Image Converter | Get Help & Support",
  description:
    "Need help with image conversion? Contact our support team for assistance with JPG, PNG, WebP, AVIF, GIF, BMP, TIFF conversion issues and questions.",
  keywords:
    "contact image converter support, help with image conversion, technical support, customer service, image format help",
  openGraph: {
    title: "Contact Advanced Image Converter Support Team",
    description:
      "Get help with image conversion issues. Our support team is ready to assist with any questions about our free image converter tool.",
    type: "website",
    url: "https://image-converter.unaux.com/contact/",
  },
  twitter: {
    card: "summary",
    title: "Contact Advanced Image Converter Support",
    description: "Need help with image conversion? Contact our friendly support team for assistance.",
  },
  alternates: {
    canonical: "https://image-converter.unaux.com/contact/",
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      description: "Get help via email",
      details: "support@imageconverter.com",
      note: "We respond within 24 hours",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      description: "Chat with our team",
      details: "Available on our website",
      note: "Monday - Friday, 9 AM - 6 PM EST",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Response Time",
      description: "Quick support",
      details: "Average: 2-4 hours",
      note: "During business hours",
    },
  ]

  const commonQuestions = [
    {
      question: "How do I convert multiple images at once?",
      answer:
        "Simply drag and drop multiple files into the upload area, select your desired format, and click 'Convert All Files'.",
    },
    {
      question: "Why isn't my image converting?",
      answer:
        "Check that your file is under 50MB and in a supported format. Try refreshing the page and uploading again.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes! All processing happens in your browser. Your images never leave your device or get uploaded to our servers.",
    },
    {
      question: "Can I use this tool offline?",
      answer:
        "The tool requires an internet connection to load initially, but once loaded, the conversion process works offline.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about image conversion? Need technical support? We're here to help! Reach out to our friendly
            support team for assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">{info.description}</p>
                        <p className="font-medium text-primary mb-1">{info.details}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.note}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Help</CardTitle>
                <CardDescription>Common questions and answers to get you started quickly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {commonQuestions.map((qa, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">{qa.question}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{qa.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Email support is available 24/7. We'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
