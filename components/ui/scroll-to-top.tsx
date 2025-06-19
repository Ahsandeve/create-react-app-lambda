"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
  showAfter?: number // Scroll position in pixels to show the button
  className?: string
  buttonClassName?: string
}

export function ScrollToTop({ showAfter = 300, className, buttonClassName }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [showAfter])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      )}
    >
      <button
        onClick={scrollToTop}
        className={cn(
          "flex items-center justify-center p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          buttonClassName,
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}
