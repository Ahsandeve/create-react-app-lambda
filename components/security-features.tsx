"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Server, Fingerprint, AlertTriangle } from "lucide-react"

const securityFeatures = [
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Client-Side Processing",
    description:
      "All image conversion happens locally in your browser. Your files never leave your device, ensuring complete privacy.",
    technical: "Uses HTML5 Canvas API and WebAssembly for local processing",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Zero Data Collection",
    description:
      "We don't collect, store, or transmit any of your images or personal data. What happens on your device, stays on your device.",
    technical: "No server communication for image processing",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "No Tracking",
    description:
      "No cookies, pixels, or tracking mechanisms monitor your image conversion activities. Your usage patterns remain private.",
    technical: "Privacy-focused analytics with no personal data collection",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Secure Infrastructure",
    description: "Our website is hosted on secure, encrypted servers with regular security audits and updates.",
    technical: "HTTPS encryption, CSP headers, and secure hosting",
  },
  {
    icon: <Fingerprint className="h-8 w-8" />,
    title: "Memory Safety",
    description:
      "Converted images are automatically cleared from memory when you close the browser tab or navigate away.",
    technical: "Automatic garbage collection and memory management",
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: "Input Validation",
    description:
      "All uploaded files are validated to ensure they're legitimate image files and don't contain malicious code.",
    technical: "File type validation and security scanning",
  },
]

export default function SecurityFeatures() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Security & Privacy First</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Your security and privacy are our top priorities. Here's how we protect your data and images.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{feature.description}</CardDescription>
                  <div className="text-xs text-muted-foreground p-3 bg-muted/50 rounded-md">
                    <strong>Technical:</strong> {feature.technical}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔒 Privacy Guarantee</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                    We guarantee that your images never leave your device. All processing happens locally in your
                    browser using advanced web technologies. We can't see, access, or store your files because they
                    never reach our servers. This isn't just a privacy policy promise – it's technically impossible for
                    us to access your data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
