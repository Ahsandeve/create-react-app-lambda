// Security utilities for image processing
export class ImageSecurityValidator {
  private static readonly MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB
  private static readonly ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/bmp",
    "image/tiff",
    "image/avif",
    "image/svg+xml",
    "image/heic",
  ]

  private static readonly DANGEROUS_EXTENSIONS = [
    ".exe",
    ".bat",
    ".cmd",
    ".com",
    ".pif",
    ".scr",
    ".vbs",
    ".js",
    ".jar",
    ".dll",
    ".msi",
    ".app",
    ".deb",
    ".rpm",
    ".dmg",
  ]

  /**
   * Validates if a file is safe for processing
   */
  static validateFile(file: File): { isValid: boolean; error?: string } {
    // Check file size
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: `File size exceeds maximum limit of ${this.MAX_FILE_SIZE / (1024 * 1024)}MB`,
      }
    }

    // Check file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      return {
        isValid: false,
        error: `File type ${file.type} is not supported`,
      }
    }

    // Check file extension
    const extension = this.getFileExtension(file.name).toLowerCase()
    if (this.DANGEROUS_EXTENSIONS.includes(extension)) {
      return {
        isValid: false,
        error: "File extension is not allowed for security reasons",
      }
    }

    // Check filename for suspicious patterns
    if (this.hasSuspiciousFilename(file.name)) {
      return {
        isValid: false,
        error: "Filename contains suspicious patterns",
      }
    }

    return { isValid: true }
  }

  /**
   * Sanitizes filename to prevent path traversal attacks
   */
  static sanitizeFilename(filename: string): string {
    // Remove path separators and dangerous characters
    let sanitized = filename
      .replace(/[/\\:*?"<>|]/g, "_")
      .replace(/\.\./g, "_")
      .replace(/^\.+/, "")
      .trim()

    // Ensure filename isn't empty after sanitization
    if (!sanitized || sanitized === "_") {
      sanitized = "converted_image"
    }

    // Limit filename length
    if (sanitized.length > 100) {
      const extension = this.getFileExtension(sanitized)
      const nameWithoutExt = sanitized.substring(0, sanitized.lastIndexOf("."))
      sanitized = nameWithoutExt.substring(0, 90) + extension
    }

    return sanitized
  }

  /**
   * Validates image dimensions to prevent memory exhaustion attacks
   */
  static validateImageDimensions(width: number, height: number): { isValid: boolean; error?: string } {
    const MAX_PIXELS = 50000000 // 50 megapixels
    const MAX_DIMENSION = 20000 // 20k pixels per side

    if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
      return {
        isValid: false,
        error: `Image dimensions exceed maximum allowed size of ${MAX_DIMENSION}px`,
      }
    }

    if (width * height > MAX_PIXELS) {
      return {
        isValid: false,
        error: `Image total pixels exceed maximum allowed of ${MAX_PIXELS / 1000000}MP`,
      }
    }

    return { isValid: true }
  }

  /**
   * Rate limiting for conversion operations
   */
  static checkRateLimit(): { allowed: boolean; error?: string } {
    const key = "image_conversion_rate_limit"
    const now = Date.now()
    const windowMs = 60000 // 1 minute
    const maxOperations = 100 // Max 100 conversions per minute

    try {
      const stored = localStorage.getItem(key)
      let data = stored ? JSON.parse(stored) : { count: 0, resetTime: now + windowMs }

      // Reset if window has passed
      if (now > data.resetTime) {
        data = { count: 1, resetTime: now + windowMs }
      } else {
        data.count++
      }

      localStorage.setItem(key, JSON.stringify(data))

      if (data.count > maxOperations) {
        return {
          allowed: false,
          error: "Rate limit exceeded. Please wait before converting more images.",
        }
      }

      return { allowed: true }
    } catch (error) {
      // If localStorage fails, allow the operation
      console.warn("Rate limiting failed:", error)
      return { allowed: true }
    }
  }

  /**
   * Memory usage monitoring
   */
  static checkMemoryUsage(): { safe: boolean; warning?: string } {
    try {
      // @ts-ignore - performance.memory is available in Chrome
      const memory = performance.memory
      if (memory) {
        const usedMB = memory.usedJSHeapSize / (1024 * 1024)
        const limitMB = memory.jsHeapSizeLimit / (1024 * 1024)

        if (usedMB > limitMB * 0.8) {
          return {
            safe: false,
            warning: "High memory usage detected. Consider processing fewer images at once.",
          }
        }
      }
      return { safe: true }
    } catch (error) {
      // Memory API not available or failed
      return { safe: true }
    }
  }

  private static getFileExtension(filename: string): string {
    const lastDot = filename.lastIndexOf(".")
    return lastDot !== -1 ? filename.substring(lastDot) : ""
  }

  private static hasSuspiciousFilename(filename: string): boolean {
    const suspiciousPatterns = [
      /\.{2,}/, // Multiple consecutive dots
      /[\x00-\x1f\x80-\x9f]/, // Control characters
      /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i, // Windows reserved names
      /%[0-9a-f]{2}/i, // URL encoded characters
      /[<>:"|?*]/, // Invalid filename characters
    ]

    return suspiciousPatterns.some((pattern) => pattern.test(filename))
  }
}

/**
 * Content Security Policy helpers
 */
export class CSPHelper {
  /**
   * Creates a secure blob URL with validation
   */
  static createSecureBlobURL(blob: Blob, expectedType: string): string {
    // Validate blob type matches expected type
    if (!blob.type.startsWith(expectedType.split("/")[0])) {
      throw new Error("Blob type does not match expected type")
    }

    // Create URL with automatic cleanup
    const url = URL.createObjectURL(blob)

    // Set up automatic cleanup after 5 minutes
    setTimeout(
      () => {
        try {
          URL.revokeObjectURL(url)
        } catch (error) {
          console.warn("Failed to revoke blob URL:", error)
        }
      },
      5 * 60 * 1000,
    )

    return url
  }

  /**
   * Safely revokes blob URLs
   */
  static safeRevokeURL(url: string): void {
    try {
      if (url.startsWith("blob:")) {
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.warn("Failed to revoke URL:", error)
    }
  }
}

/**
 * Input sanitization utilities
 */
export class InputSanitizer {
  /**
   * Sanitizes user input to prevent XSS
   */
  static sanitizeString(input: string): string {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
      .trim()
  }

  /**
   * Validates and sanitizes numeric input
   */
  static sanitizeNumber(input: number, min: number, max: number): number {
    if (typeof input !== "number" || isNaN(input)) {
      throw new Error("Invalid number input")
    }

    return Math.max(min, Math.min(max, Math.floor(input)))
  }

  /**
   * Validates conversion parameters
   */
  static validateConversionParams(params: {
    format: string
    quality: number
    compressionLevel?: number
  }): { isValid: boolean; error?: string } {
    const allowedFormats = ["jpg", "jpeg", "png", "webp", "gif", "bmp", "tiff", "avif", "svg"]

    if (!allowedFormats.includes(params.format.toLowerCase())) {
      return { isValid: false, error: "Invalid output format" }
    }

    if (params.quality < 1 || params.quality > 100) {
      return { isValid: false, error: "Quality must be between 1 and 100" }
    }

    if (params.compressionLevel !== undefined && (params.compressionLevel < 0 || params.compressionLevel > 100)) {
      return { isValid: false, error: "Compression level must be between 0 and 100" }
    }

    return { isValid: true }
  }
}
