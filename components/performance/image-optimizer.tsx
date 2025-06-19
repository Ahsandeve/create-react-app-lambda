"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Upload, Zap, Settings, FileText, Gauge, Shield, Clock } from "lucide-react"

interface OptimizationSettings {
  format: string
  quality: number
  maxWidth: number
  maxHeight: number
  progressive: boolean
  stripMetadata: boolean
}

interface ProcessingStats {
  originalSize: number
  optimizedSize: number
  compressionRatio: number
  processingTime: number
  dimensions: { width: number; height: number }
}

export default function ImageOptimizer() {
  const [file, setFile] = useState<File | null>(null)
  const [optimizedBlob, setOptimizedBlob] = useState<Blob | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [stats, setStats] = useState<ProcessingStats | null>(null)
  const [settings, setSettings] = useState<OptimizationSettings>({
    format: "webp",
    quality: 80,
    maxWidth: 1920,
    maxHeight: 1080,
    progressive: true,
    stripMetadata: true,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const workerRef = useRef<Worker | null>(null)

  // Initialize Web Worker for image processing
  useEffect(() => {
    const workerCode = `
      self.onmessage = function(e) {
        const { imageData, settings } = e.data;
        
        try {
          // Create OffscreenCanvas for processing
          const canvas = new OffscreenCanvas(imageData.width, imageData.height);
          const ctx = canvas.getContext('2d');
          
          // Apply image data
          ctx.putImageData(imageData, 0, 0);
          
          // Resize if needed
          if (settings.maxWidth < imageData.width || settings.maxHeight < imageData.height) {
            const ratio = Math.min(settings.maxWidth / imageData.width, settings.maxHeight / imageData.height);
            const newWidth = Math.floor(imageData.width * ratio);
            const newHeight = Math.floor(imageData.height * ratio);
            
            const resizedCanvas = new OffscreenCanvas(newWidth, newHeight);
            const resizedCtx = resizedCanvas.getContext('2d');
            resizedCtx.drawImage(canvas, 0, 0, newWidth, newHeight);
            
            canvas.width = newWidth;
            canvas.height = newHeight;
            const newCtx = canvas.getContext('2d');
            newCtx.drawImage(resizedCanvas, 0, 0);
          }
          
          // Convert to desired format
          const options = {
            type: settings.format === 'jpeg' ? 'image/jpeg' : 
                  settings.format === 'png' ? 'image/png' : 'image/webp',
            quality: settings.quality / 100
          };
          
          canvas.convertToBlob(options).then(blob => {
            self.postMessage({ 
              success: true, 
              blob,
              dimensions: { width: canvas.width, height: canvas.height }
            });
          });
          
        } catch (error) {
          self.postMessage({ success: false, error: error.message });
        }
      };
    `

    const blob = new Blob([workerCode], { type: "application/javascript" })
    workerRef.current = new Worker(URL.createObjectURL(blob))

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate()
      }
    }
  }, [])

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setOptimizedBlob(null)
      setStats(null)
    }
  }, [])

  const processImage = useCallback(async () => {
    if (!file || !workerRef.current || !canvasRef.current) return

    setIsProcessing(true)
    setProgress(0)

    const startTime = performance.now()

    try {
      // Load image
      const img = new Image()
      img.crossOrigin = "anonymous"

      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = URL.createObjectURL(file)
      })

      setProgress(25)

      // Draw to canvas and get image data
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)

      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)
      if (!imageData) throw new Error("Failed to get image data")

      setProgress(50)

      // Process with Web Worker
      workerRef.current.onmessage = (e) => {
        const { success, blob, dimensions, error } = e.data

        if (success) {
          setOptimizedBlob(blob)
          setProgress(100)

          const endTime = performance.now()
          const processingTime = endTime - startTime

          setStats({
            originalSize: file.size,
            optimizedSize: blob.size,
            compressionRatio: ((file.size - blob.size) / file.size) * 100,
            processingTime,
            dimensions,
          })
        } else {
          console.error("Processing error:", error)
        }

        setIsProcessing(false)
      }

      workerRef.current.postMessage({ imageData, settings })
      setProgress(75)
    } catch (error) {
      console.error("Error processing image:", error)
      setIsProcessing(false)
    }
  }, [file, settings])

  const downloadOptimized = useCallback(() => {
    if (!optimizedBlob || !file) return

    const url = URL.createObjectURL(optimizedBlob)
    const a = document.createElement("a")
    a.href = url
    a.download = `optimized_${file.name.split(".")[0]}.${settings.format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [optimizedBlob, file, settings.format])

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Advanced Image Optimizer</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Professional-grade image optimization with real-time preview and detailed analytics
        </p>
      </div>

      {/* Performance Features */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <h3 className="font-semibold">Web Workers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Non-blocking processing</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold">Client-Side</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">100% private</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Gauge className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold">Real-time</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Instant feedback</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <h3 className="font-semibold">Fast Processing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Optimized algorithms</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg"
              />

              {file && (
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{formatBytes(file.size)}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Settings Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Optimization Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Output Format</label>
                  <Select
                    value={settings.format}
                    onValueChange={(value) => setSettings((prev) => ({ ...prev, format: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webp">WebP (Recommended)</SelectItem>
                      <SelectItem value="jpeg">JPEG</SelectItem>
                      <SelectItem value="png">PNG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Quality: {settings.quality}%</label>
                  <Slider
                    value={[settings.quality]}
                    onValueChange={([value]) => setSettings((prev) => ({ ...prev, quality: value }))}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Max Width</label>
                    <input
                      type="number"
                      value={settings.maxWidth}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          maxWidth: Number.parseInt(e.target.value) || 1920,
                        }))
                      }
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Max Height</label>
                    <input
                      type="number"
                      value={settings.maxHeight}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          maxHeight: Number.parseInt(e.target.value) || 1080,
                        }))
                      }
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.progressive}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          progressive: e.target.checked,
                        }))
                      }
                    />
                    <span className="text-sm">Progressive encoding</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.stripMetadata}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          stripMetadata: e.target.checked,
                        }))
                      }
                    />
                    <span className="text-sm">Strip metadata</span>
                  </label>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button onClick={processImage} disabled={!file || isProcessing} className="w-full">
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Optimize Image
                  </>
                )}
              </Button>

              {isProcessing && <Progress value={progress} className="w-full" />}

              {stats && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Original</p>
                      <p className="font-medium">{formatBytes(stats.originalSize)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Optimized</p>
                      <p className="font-medium">{formatBytes(stats.optimizedSize)}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Badge variant={stats.compressionRatio > 0 ? "default" : "secondary"}>
                      {stats.compressionRatio > 0 ? "-" : "+"}
                      {Math.abs(stats.compressionRatio).toFixed(1)}% size
                    </Badge>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    Processed in {stats.processingTime.toFixed(0)}ms
                  </div>

                  {optimizedBlob && (
                    <Button onClick={downloadOptimized} variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Optimized
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hidden canvas for processing */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  )
}
