import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Clock, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Advanced Image Converter | Get Help & Support",
  description:
    "Contact our support team for help with image conversion, technical issues, or general questions. We're here to help you get the most out of our tool.",
  keywords: "contact support, image converter help, technical support, customer service, get help",
  openGraph: {
    title: "Contact Advanced Image Converter Support",
    description: "Get help with image conversion and technical support from our team.",
    type: "website",
  },
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Support",
      description: "Get detailed help via email",
      details: "support@imageconverter.com",
      responseTime: "Usually within 24 hours",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Contact Form",
      description: "Send us a message directly",
      details: "Use the form below",
      responseTime: "Usually within 12 hours",
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      title: "FAQ Section",
      description: "Find quick answers",
      details: "Check our FAQ page",
      responseTime: "Instant answers",
    },
  ]

  const commonTopics = [
    "Technical issues with image conversion",
    "Supported file formats and limitations",
    "Quality and compression settings help",
    "Browser compatibility questions",
    "Feature requests and suggestions",
    "Privacy and security concerns",
    "Business partnership inquiries",
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our image converter? Need technical support? We're here to help! Reach out to us using
            any of the methods below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">{method.icon}</div>
                <CardTitle>{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">{method.details}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {method.responseTime}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
              <Card>
                <CardHeader>
                  <CardTitle>What can we help you with?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {commonTopics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Before You Contact Us</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Check Our FAQ</h4>
                      <p className="text-muted-foreground text-sm">
                        Many common questions are answered in our FAQ section. This might save you time!
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technical Issues</h4>
                      <p className="text-muted-foreground text-sm">
                        Please include your browser version, operating system, and a description of the problem.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Feature Requests</h4>
                      <p className="text-muted-foreground text-sm">
                        We love hearing your ideas! Tell us how we can improve the tool for you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Response Times</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>General Questions</span>
                      <span className="text-muted-foreground">12-24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Technical Support</span>
                      <span className="text-muted-foreground">6-12 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bug Reports</span>
                      <span className="text-muted-foreground">2-6 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Inquiries</span>
                      <span className="text-muted-foreground">24-48 hours</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Response times may be longer during weekends and holidays
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-muted-foreground mb-6">
            For urgent technical issues, try refreshing the page or using a different browser. Most problems are
            resolved by clearing your browser cache.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#faq"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View FAQ
            </a>
            <a
              href="/#converter"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Try the Tool
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
