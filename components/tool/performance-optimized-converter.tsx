"use client"

import { useState, useCallback, useMemo } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/toast-notification"
import { Upload, Download, Zap, Shield, Clock } from "lucide-react"

// Web Worker for image processing
const createImageWorker = () => {
  const workerCode = `
    self.onmessage = function(e) {
      const { imageData, format, quality } = e.data;
      
      // Create canvas in worker context
      const canvas = new OffscreenCanvas(imageData.width, imageData.height);
      const ctx = canvas.getContext('2d');
      
      // Put image data on canvas
      ctx.putImageData(imageData, 0, 0);
      
      // Convert to desired format
      canvas.convertToBlob({
        type: format,
        quality: quality
      }).then(blob => {
        self.postMessage({ success: true, blob });
      }).catch(error => {
        self.postMessage({ success: false, error: error.message });
      });
    };
  `

  const blob = new Blob([workerCode], { type: "application/javascript" })
  return new Worker(URL.createObjectURL(blob))
}

interface ConversionJob {
  id: string
  file: File
  targetFormat: string
  quality: number
  status: "pending" | "processing" | "completed" | "error"
  progress: number
  result?: Blob
  error?: string
}

export default function PerformanceOptimizedConverter() {
  const [jobs, setJobs] = useState<ConversionJob[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const toast = useToast()

  // Memoized worker creation
  const worker = useMemo(() => {
    if (typeof window !== "undefined") {
      return createImageWorker()
    }
    return null
  }, [])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newJobs: ConversionJob[] = acceptedFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      targetFormat: "image/webp",
      quality: 0.8,
      status: "pending",
      progress: 0,
    }))

    setJobs((prev) => [...prev, ...newJobs])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".tiff", ".webp"],
    },
    maxSize: 50 * 1024 * 1024, // 50MB limit
  })

  const processImage = useCallback(
    async (job: ConversionJob): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (!worker) {
          reject(new Error("Worker not available"))
          return
        }

        // Update job status
        setJobs((prev) => prev.map((j) => (j.id === job.id ? { ...j, status: "processing", progress: 10 } : j)))

        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        const img = new Image()

        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          ctx?.drawImage(img, 0, 0)

          const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)

          if (!imageData) {
            reject(new Error("Failed to get image data"))
            return
          }

          // Update progress
          setJobs((prev) => prev.map((j) => (j.id === job.id ? { ...j, progress: 50 } : j)))

          worker.onmessage = (e) => {
            const { success, blob, error } = e.data

            if (success) {
              setJobs((prev) =>
                prev.map((j) =>
                  j.id === job.id
                    ? {
                        ...j,
                        status: "completed",
                        progress: 100,
                        result: blob,
                      }
                    : j,
                ),
              )
              resolve()
            } else {
              setJobs((prev) =>
                prev.map((j) =>
                  j.id === job.id
                    ? {
                        ...j,
                        status: "error",
                        error: error,
                      }
                    : j,
                ),
              )
              reject(new Error(error))
            }
          }

          worker.postMessage({
            imageData,
            format: job.targetFormat,
            quality: job.quality,
          })
        }

        img.onerror = () => {
          reject(new Error("Failed to load image"))
        }

        img.src = URL.createObjectURL(job.file)
      })
    },
    [worker],
  )

  const processAllJobs = useCallback(async () => {
    setIsProcessing(true)
    const pendingJobs = jobs.filter((job) => job.status === "pending")

    try {
      // Process jobs in batches to avoid overwhelming the browser
      const batchSize = 3
      for (let i = 0; i < pendingJobs.length; i += batchSize) {
        const batch = pendingJobs.slice(i, i + batchSize)
        await Promise.allSettled(batch.map(processImage))
      }

      toast.success(`Successfully processed ${pendingJobs.length} images!`)
    } catch (error) {
      toast.error("Some images failed to process")
    } finally {
      setIsProcessing(false)
    }
  }, [jobs, processImage, toast])

  const downloadAll = useCallback(() => {
    const completedJobs = jobs.filter((job) => job.status === "completed" && job.result)

    completedJobs.forEach((job) => {
      if (job.result) {
        const url = URL.createObjectURL(job.result)
        const a = document.createElement("a")
        a.href = url
        a.download = `${job.file.name.split(".")[0]}.webp`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    })
  }, [jobs])

  const clearJobs = useCallback(() => {
    setJobs([])
  }, [])

  const completedCount = jobs.filter((job) => job.status === "completed").length
  const totalJobs = jobs.length

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Performance Features */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">Web Workers</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">Non-blocking processing</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-green-900 dark:text-green-100">Client-Side</h3>
          <p className="text-sm text-green-700 dark:text-green-300">100% private processing</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
          <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <h3 className="font-semibold text-purple-900 dark:text-purple-100">Batch Processing</h3>
          <p className="text-sm text-purple-700 dark:text-purple-300">Multiple files at once</p>
        </div>
      </div>

      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
          isDragActive ? "border-primary bg-primary/5" : "border-gray-300 dark:border-gray-600 hover:border-primary/50"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">{isDragActive ? "Drop images here" : "Upload Images"}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Drag & drop images or click to browse</p>
        <p className="text-sm text-gray-500">Supports JPEG, PNG, GIF, BMP, TIFF, WebP • Max 50MB per file</p>
      </div>

      {/* Job Queue */}
      {jobs.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              Conversion Queue ({completedCount}/{totalJobs})
            </h3>
            <div className="flex gap-2">
              <Button
                onClick={processAllJobs}
                disabled={isProcessing || jobs.every((job) => job.status !== "pending")}
                className="flex items-center gap-2"
              >
                <Zap className="h-4 w-4" />
                {isProcessing ? "Processing..." : "Convert All"}
              </Button>
              {completedCount > 0 && (
                <Button onClick={downloadAll} variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download All
                </Button>
              )}
              <Button onClick={clearJobs} variant="outline" size="sm">
                Clear
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium truncate">{job.file.name}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      job.status === "completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : job.status === "processing"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : job.status === "error"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                {job.status === "processing" && <Progress value={job.progress} className="mb-2" />}

                {job.error && <p className="text-sm text-red-600 dark:text-red-400">{job.error}</p>}

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{(job.file.size / 1024 / 1024).toFixed(2)} MB</span>
                  <span>→ WebP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
