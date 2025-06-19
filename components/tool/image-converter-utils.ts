// This file contains utility functions for image conversion

/**
 * Converts an image file to the specified format with the given quality and compression
 */
export async function convertImage(
  file: File,
  format: string,
  quality: number,
  compressionLevel?: number,
): Promise<Blob> {
  // Try the primary conversion method first
  try {
    return await primaryConvertImage(file, format, quality, compressionLevel)
  } catch (error) {
    console.warn("Primary conversion failed, trying fallback method:", error)
    // If primary method fails, try the fallback method
    return fallbackConvertImage(file, format, quality, compressionLevel)
  }
}

/**
 * Primary method to convert an image using canvas
 */
async function primaryConvertImage(
  file: File,
  format: string,
  quality: number,
  compressionLevel?: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      if (!event || !event.target || !event.target.result) {
        reject(new Error("Failed to read file"))
        return
      }

      const img = new Image()
      img.crossOrigin = "anonymous" // Add this to avoid CORS issues

      // Set a timeout to prevent hanging on image load
      const timeoutId = setTimeout(() => {
        img.src = "" // Cancel the image load
        reject(new Error("Image load timed out"))
      }, 30000) // 30 second timeout

      img.onload = () => {
        clearTimeout(timeoutId) // Clear the timeout
        try {
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")

          if (!ctx) {
            reject(new Error("Failed to get canvas context"))
            return
          }

          // Set canvas dimensions to match the image
          canvas.width = img.width
          canvas.height = img.height

          // Draw the image onto the canvas
          ctx.drawImage(img, 0, 0)

          // Calculate final quality based on both quality and compression level
          let finalQuality = quality / 100; // Convert to 0-1 range
          
          if (compressionLevel && compressionLevel > 0) {
            // Adjust quality based on compression level (0-100)
            const compressionFactor = (100 - compressionLevel) / 100;
            finalQuality = finalQuality * compressionFactor;
          }

          // Ensure quality is between 0.1 and 1.0
          finalQuality = Math.max(0.1, Math.min(1.0, finalQuality));

          // Apply format-specific optimizations
          if (format === "png") {
            // For PNG, apply color quantization based on compression level
            if (compressionLevel && compressionLevel > 0) {
              const colors = Math.max(2, Math.min(256, Math.round(256 * (1 - compressionLevel / 100))));
              applyColorQuantization(canvas, ctx, colors);
            }
          }

          // Convert the canvas to the desired format
          const mimeType = getMimeType(format)
          
          console.log(`Converting with format: ${format}, final quality: ${finalQuality}, compression: ${compressionLevel}`);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error(`Failed to convert to ${format}`))
                return
              }
              resolve(blob)
            },
            mimeType,
            format === "png" ? undefined : finalQuality // Only use quality for non-PNG formats
          )
        } catch (error) {
          reject(new Error(`Error during conversion: ${error instanceof Error ? error.message : String(error)}`))
        }
      }

      img.onerror = () => {
        clearTimeout(timeoutId)
        const fileInfo = `File: ${file.name}, Size: ${file.size}, Type: ${file.type}`
        reject(new Error(`Failed to load image. ${fileInfo}`))
      }

      try {
        img.src = event.target.result as string
      } catch (error) {
        clearTimeout(timeoutId)
        reject(new Error(`Error setting image source: ${error instanceof Error ? error.message : String(error)}`))
      }
    }

    reader.onerror = () => {
      reject(new Error(`Failed to read file: ${file.name}`))
    }

    try {
      reader.readAsDataURL(file)
    } catch (error) {
      reject(new Error(`Error reading file: ${error instanceof Error ? error.message : String(error)}`))
    }
  })
}

/**
 * Fallback method to convert an image using createObjectURL
 * This method may work when the primary method fails
 */
async function fallbackConvertImage(
  file: File,
  format: string,
  quality: number,
  compressionLevel?: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      // Create an object URL directly from the file
      const objectUrl = URL.createObjectURL(file)

      const img = new Image()
      img.crossOrigin = "anonymous"

      // Set a timeout to prevent hanging on image load
      const timeoutId = setTimeout(() => {
        img.src = ""
        URL.revokeObjectURL(objectUrl)
        reject(new Error("Fallback image load timed out"))
      }, 30000)

      img.onload = () => {
        clearTimeout(timeoutId)
        try {
          // Create a canvas with the image dimensions
          const canvas = document.createElement("canvas")
          canvas.width = img.width
          canvas.height = img.height

          const ctx = canvas.getContext("2d")
          if (!ctx) {
            URL.revokeObjectURL(objectUrl)
            reject(new Error("Failed to get canvas context in fallback method"))
            return
          }

          // Draw the image onto the canvas
          ctx.drawImage(img, 0, 0)

          // Calculate final quality based on both quality and compression level
          let finalQuality = quality / 100; // Convert to 0-1 range
          
          if (compressionLevel && compressionLevel > 0) {
            // Adjust quality based on compression level (0-100)
            const compressionFactor = (100 - compressionLevel) / 100;
            finalQuality = finalQuality * compressionFactor;
          }

          // Ensure quality is between 0.1 and 1.0
          finalQuality = Math.max(0.1, Math.min(1.0, finalQuality));

          // Apply format-specific optimizations
          if (format === "png") {
            // For PNG, apply color quantization based on compression level
            if (compressionLevel && compressionLevel > 0) {
              const colors = Math.max(2, Math.min(256, Math.round(256 * (1 - compressionLevel / 100))));
              applyColorQuantization(canvas, ctx, colors);
            }
          }

          // Convert the canvas to the desired format
          const mimeType = getMimeType(format)

          console.log(`Fallback converting with format: ${format}, final quality: ${finalQuality}, compression: ${compressionLevel}`);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                URL.revokeObjectURL(objectUrl)
                reject(new Error(`Failed to convert to ${format}`))
                return
              }
              URL.revokeObjectURL(objectUrl)
              resolve(blob)
            },
            mimeType,
            format === "png" ? undefined : finalQuality // Only use quality for non-PNG formats
          )
        } catch (error) {
          URL.revokeObjectURL(objectUrl)
          reject(new Error(`Error during fallback conversion: ${error instanceof Error ? error.message : String(error)}`))
        }
      }

      img.onerror = () => {
        clearTimeout(timeoutId)
        URL.revokeObjectURL(objectUrl)
        reject(new Error("Failed to load image in fallback method"))
      }

      img.src = objectUrl
    } catch (error) {
      reject(new Error(`Error in fallback conversion: ${error instanceof Error ? error.message : String(error)}`))
    }
  })
}

/**
 * Gets the MIME type for the specified format
 */
export function getMimeType(format: string): string {
  switch (format.toLowerCase()) {
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    case "png":
      return "image/png"
    case "webp":
      return "image/webp"
    case "gif":
      return "image/gif"
    case "bmp":
      return "image/bmp"
    case "tiff":
      return "image/tiff"
    case "avif":
      return "image/avif"
    case "svg":
      return "image/svg+xml"
    // Note: HEIC conversion is limited in browsers, but we include it for completeness
    case "heic":
      return "image/heic"
    default:
      return "image/png" // Default to PNG
  }
}

/**
 * Resizes an image to the specified dimensions
 */
export async function resizeImage(
  url: string,
  width: number,
  height: number,
  format: string,
  quality: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      const img = new Image()
      img.crossOrigin = "anonymous" // Add this to avoid CORS issues

      // Set a timeout to prevent hanging on image load
      const timeoutId = setTimeout(() => {
        img.src = "" // Cancel the image load
        reject(new Error("Image resize timed out"))
      }, 30000) // 30 second timeout

      img.onload = () => {
        clearTimeout(timeoutId) // Clear the timeout
        try {
          const canvas = document.createElement("canvas")
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext("2d")

          if (!ctx) {
            reject(new Error("Failed to get canvas context"))
            return
          }

          ctx.drawImage(img, 0, 0, width, height)

          const mimeType = getMimeType(format)
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error(`Failed to resize image`))
                return
              }
              resolve(blob)
            },
            mimeType,
            quality / 100,
          )
        } catch (error) {
          reject(new Error(`Error during resize: ${error instanceof Error ? error.message : String(error)}`))
        }
      }

      img.onerror = () => {
        clearTimeout(timeoutId) // Clear the timeout
        reject(new Error(`Failed to load image for resizing: ${url.substring(0, 50)}...`))
      }

      img.src = url
    } catch (error) {
      reject(new Error(`Error setting up resize: ${error instanceof Error ? error.message : String(error)}`))
    }
  })
}

/**
 * Validates if a file is a supported image
 */
export function isValidImage(file: File): boolean {
  // Check if the file type starts with image/
  if (!file.type.startsWith("image/")) {
    return false
  }

  // Check if the file size is reasonable (less than 50MB)
  if (file.size > 50 * 1024 * 1024) {
    return false
  }

  return true
}

/**
 * Gets image information including dimensions
 * Now with fallback methods and better error handling
 */
export async function getImageInfo(file: File): Promise<{ width: number; height: number; format: string }> {
  // Try primary method first
  try {
    return await primaryGetImageInfo(file)
  } catch (error) {
    console.warn("Primary image info method failed, trying fallback:", error)
    try {
      // Try fallback method
      return await fallbackGetImageInfo(file)
    } catch (fallbackError) {
      console.error("All image info methods failed:", fallbackError)
      // If all methods fail, return default dimensions
      // This allows conversion to continue even if we can't get dimensions
      const format = file.name.split(".").pop()?.toLowerCase() || "unknown"
      return {
        width: 800, // Default width
        height: 600, // Default height
        format,
      }
    }
  }
}

/**
 * Primary method to get image dimensions using createObjectURL
 */
async function primaryGetImageInfo(file: File): Promise<{ width: number; height: number; format: string }> {
  return new Promise((resolve, reject) => {
    try {
      const objectUrl = URL.createObjectURL(file)
      const img = new Image()
      img.crossOrigin = "anonymous"

      // Set a timeout to prevent hanging on image load
      const timeoutId = setTimeout(() => {
        img.src = "" // Cancel the image load
        URL.revokeObjectURL(objectUrl) // Clean up
        reject(new Error("Image info load timed out"))
      }, 10000) // 10 second timeout (shorter for info)

      img.onload = function() {
        clearTimeout(timeoutId) // Clear the timeout
        const format = file.name.split(".").pop()?.toLowerCase() || "unknown"
        URL.revokeObjectURL(objectUrl) // Clean up
        resolve({
          width: img.width,
          height: img.height,
          format,
        })
      }

      img.onerror = () => {
        clearTimeout(timeoutId) // Clear the timeout
        URL.revokeObjectURL(objectUrl) // Clean up
        reject(new Error(`Failed to load image for info: ${file.name}`))
      }

      img.src = objectUrl
    } catch (error) {
      reject(new Error(`Error getting image info: ${error instanceof Error ? error.message : String(error)}`))
    }
  })
}

/**
 * Fallback method to get image dimensions using FileReader
 */
async function fallbackGetImageInfo(file: File): Promise<{ width: number; height: number; format: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      if (!event || !event.target || !event.target.result) {
        reject(new Error("Failed to read file for dimensions"))
        return
      }

      const img = new Image()
      img.crossOrigin = "anonymous"

      // Set a timeout to prevent hanging on image load
      const timeoutId = setTimeout(() => {
        img.src = "" // Cancel the image load
        reject(new Error("Fallback image info load timed out"))
      }, 10000) // 10 second timeout

      img.onload = function() {
        clearTimeout(timeoutId) // Clear the timeout
        const format = file.name.split(".").pop()?.toLowerCase() || "unknown"
        resolve({
          width: img.width,
          height: img.height,
          format,
        })
      }

      img.onerror = () => {
        clearTimeout(timeoutId) // Clear the timeout
        reject(new Error(`Fallback method failed to load image for info: ${file.name}`))
      }

      try {
        img.src = event.target.result as string
      } catch (error) {
        clearTimeout(timeoutId) // Clear the timeout
        reject(
          new Error(`Error setting image source for info: ${error instanceof Error ? error.message : String(error)}`),
        )
      }
    }

    reader.onerror = () => {
      reject(new Error(`Failed to read file for dimensions: ${file.name}`))
    }

    try {
      reader.readAsDataURL(file)
    } catch (error) {
      reject(new Error(`Error reading file for dimensions: ${error instanceof Error ? error.message : String(error)}`))
    }
  })
}

/**
 * Sanitizes a filename to remove potentially problematic characters
 */
export function sanitizeFileName(fileName: string): string {
  // Remove any path information (just in case)
  let sanitized = fileName.split(/[/\\]/).pop() || fileName

  // Remove or replace problematic characters
  // sanitized = sanitized
    // .replace(/[&/\\#,+()$~%'":*?<>{}]/g, "_") // Replace special chars with underscore
    // .replace(/\s+/g, "_") // Replace spaces with underscore
    // .replace(/$$\d+$$/g, "") // Remove copy indicators like (1), (2), etc.
    // .replace(/__+/g, "_") // Replace multiple underscores with a single one

  // Ensure the filename isn't too long
  if (sanitized.length > 100) {
    const extension = sanitized.split(".").pop() || ""
    sanitized = sanitized.substring(0, 90) + "." + extension
  }

  return sanitized
}

/**
 * Checks if an image might be problematic based on filename patterns
 */
export function isPotentiallyProblematicImage(fileName: string): boolean {
  // Check for patterns that might indicate a problematic file
  const hasMultipleCopyIndicators = (fileName.match(/$$\d+$$/g) || []).length > 1
  const hasExcessiveLength = fileName.length > 100
  const hasMultipleExtensions = (fileName.match(/\./g) || []).length > 1

  return hasMultipleCopyIndicators || hasExcessiveLength || hasMultipleExtensions
}

/**
 * Creates a new File object with a sanitized name
 * This is useful for problematic files
 */
export function createSanitizedFile(file: File): File {
  const sanitizedName = sanitizeFileName(file.name)

  // If the name is already sanitized, return the original file
  if (sanitizedName === file.name) {
    return file
  }

  // Create a new File object with the sanitized name
  try {
    return new File([file], sanitizedName, { type: file.type })
  } catch (error) {
    console.warn("Could not create sanitized file:", error)
    return file // Return the original file if we can't create a new one
  }
}

/**
 * Helper function to apply color quantization for PNG compression
 */
function applyColorQuantization(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, colorCount: number) {
  try {
    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    // Simple color quantization - reduce color depth
    for (let i = 0; i < data.length; i += 4) {
      // Apply bit depth reduction based on colorCount
      const factor = 256 / colorCount
      data[i] = Math.floor(data[i] / factor) * factor // R
      data[i + 1] = Math.floor(data[i + 1] / factor) * factor // G
      data[i + 2] = Math.floor(data[i + 2] / factor) * factor // B
      // Alpha channel remains unchanged
    }

    // Put the modified image data back
    ctx.putImageData(imageData, 0, 0)
    console.log(`Applied color quantization with ${colorCount} colors`)
  } catch (error) {
    console.error("Error applying color quantization:", error)
    // Continue without color quantization if it fails
  }
}
