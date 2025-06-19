"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContentBoxes() {
  const boxes = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Don’t lose quality when you convert. Our powerful system protects every detail of your image, so it stays clean, clear, and full of color from start to finish.",
      // description: "Preserve image quality with our advanced conversion algorithms",
      color: "from-purple-500 to-indigo-600",
      delay: 0.1,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Convert your images in just seconds using our powerful and optimized engine — no delays, no waiting, just quick and smooth performance every time.",
      // description: "Convert your images in seconds with our optimized engine",
      color: "from-amber-500 to-orange-600",
      delay: 0.3,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Secure",
      description: "All conversions happen right on your device — nothing is uploaded, shared, or stored. Your images stay private, safe, and fully under your control.",
      // description: "Your images never leave your device. Complete privacy guaranteed",
      color: "from-emerald-500 to-green-600",
      delay: 0.5,
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-12 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: box.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
            className={cn("group relative overflow-hidden rounded-xl bg-gradient-to-br p-0.5", box.color)}
          >
            <div className="relative flex h-full flex-col gap-2 rounded-[calc(0.75rem-1px)] bg-white p-6 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-white",
                    box.color,
                  )}
                >
                  {box.icon}
                </div>
                <h3 className="text-lg font-semibold">{box.title}</h3>
              </div>

              <p className="mt-2 text-muted-foreground">{box.description}</p>

              

              <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br opacity-0 group-hover:opacity-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
