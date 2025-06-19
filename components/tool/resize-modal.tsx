"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useToast } from "@/components/ui/toast-notification"

interface ResizeModalProps {
  file: {
    name: string
    url: string
    width: number
    height: number
    convertedFormat: string
  }
  onClose: () => void
  onResize: (width: number, height: number) => Promise<void>
}

export default function ResizeModal({ file, onClose, onResize }: ResizeModalProps) {
  const [width, setWidth] = useState<number>(file.width)
  const [height, setHeight] = useState<number>(file.height)
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const toast = useToast()

  // Store the original aspect ratio
  const aspectRatio = file.width / file.height

  useEffect(() => {
    // Add event listener to close modal on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth)
    if (maintainAspectRatio) {
      setHeight(Math.round(newWidth / aspectRatio))
    }
  }

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight)
    if (maintainAspectRatio) {
      setWidth(Math.round(newHeight * aspectRatio))
    }
  }

  const handleResize = async () => {
    if (width <= 0 || height <= 0) {
      setError("Width and height must be greater than 0")
      toast.error("Width and height must be greater than 0")
      return
    }

    setIsResizing(true)
    setError(null)

    try {
      await onResize(width, height)
      onClose()
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to resize image"
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsResizing(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-white dark:bg-gray-900 rounded-custom shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Resize Image</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-64 h-64 rounded-custom overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img src={file.url || "/placeholder.svg"} alt={file.name} className="object-contain w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 text-center">
                {file.width} × {file.height}px
              </div>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-custom text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="width" className="block text-sm font-medium mb-1">
                Width (px)
              </label>
              <input
                id="width"
                type="number"
                min="1"
                value={width}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="w-full rounded-custom border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-sm font-medium mb-1">
                Height (px)
              </label>
              <input
                id="height"
                type="number"
                min="1"
                value={height}
                onChange={(e) => handleHeightChange(Number(e.target.value))}
                className="w-full rounded-custom border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="aspect-ratio"
              type="checkbox"
              checked={maintainAspectRatio}
              onChange={(e) => setMaintainAspectRatio(e.target.checked)}
              className="h-4 w-4 rounded-custom border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="aspect-ratio" className="ml-2 block text-sm">
              Maintain aspect ratio
            </label>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-custom text-sm font-medium transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleResize}
              disabled={isResizing}
              className="px-4 py-2 bg-primary text-white rounded-custom text-sm font-medium transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {isResizing ? "Resizing..." : "Resize"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
