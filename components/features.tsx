"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileType, Zap, Shield, Download, Layers, Smartphone, CloudOff, Palette } from "lucide-react"

const features = [
  {
    icon: <FileType className="h-10 w-10 text-primary " />,
    title: "Multiple Formats",
    description: "Convert between JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and HEIC formats with ease.",
  },
  // {
  //   icon: <Zap className="h-10 w-10 text-primary" />,
  //   title: "Lightning Fast",
  //   description: "Our optimized conversion engine processes your images in seconds.",
  // },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Processing",
    description: "All conversions happen in your browser. Your images never leave your device.",
  },
  {
    icon: <Download className="h-10 w-10 text-primary" />,
    title: "Batch Processing",
    description: "Convert multiple images at once and download them as a convenient ZIP file.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Quality Control",
    description: "Adjust compression levels to balance between quality and file size.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Friendly",
    description: "Convert images on any device with our responsive design.",
  },
  {
    icon: <CloudOff className="h-10 w-10 text-primary" />,
    title: "No Upload Limits",
    description: "No file size restrictions or upload limits to worry about.",
  },
  // {
  //   icon: <Palette className="h-10 w-10 text-primary" />,
  //   title: "Dark Mode",
  //   description: "Easy on the eyes with our beautiful dark mode interface.",
  // },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need for seamless image conversion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full w-[300px] ">
                {/* <Card className="h-full w-[300px]  hover:bg-gray-100/10 dark:hover:bg-gray-300"> */}
                  <CardHeader className=" flex  items-center justify-center pb-2">
                    <div className="mb-2 bg-gray/10 dark:bg-black/20 border-[1px] border-primary/10 dark:border-primary/20  rounded-sm p-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
