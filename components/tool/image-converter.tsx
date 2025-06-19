"use client"
// line num 707  or 792 bar color
import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, AlertCircle, Pencil } from "lucide-react"
import { useDomain } from "@/context/DomainContext"
import { ImageSecurityValidator, CSPHelper, InputSanitizer } from "@/lib/security"

import {
  convertImage,
  resizeImage,
  isValidImage,
  getImageInfo,
  sanitizeFileName,
  isPotentiallyProblematicImage,
  createSanitizedFile,
} from "@/components/tool/image-converter-utils"
import Image from "next/image"
import ResizeModal from "@/components/tool/resize-modal"
import { useToast } from "@/components/ui/toast-notification"
import {
  PrimaryButton,
  UploadButton,
  ConvertButton,
  DeleteallButton,
  ResizeButton,
  DownloadButton,
  DeleteButton,
  ConvertSingleButton,
  RemoveButton,
  ZipOptionsButton,
} from "@/components/ui/converter-buttons"
import { useDropzone } from "react-dropzone"

export default function ImageConverter() {
  const { domain, setDomain } = useDomain();
  const [files, setFiles] = useState<File[]>([]);
  const [convertedFiles, setConvertedFiles] = useState<
    Array<{
      name: string;
      originalName: string;
      url: string;
      size: number;
      originalFormat: string;
      convertedFormat: string;
      originalSize: number;
      width: number;
      height: number;
      quality: number;
      compressionLevel: number;
      compressionEnabled: boolean;
      renamed?: boolean;
    }>
  >([]);
  const [selectedFormat, setSelectedFormat] = useState<string>("webp");
  const [quality, setQuality] = useState<number>(80);
  const [compressionEnabled, setCompressionEnabled] = useState<boolean>(true);
  const [compressionLevel, setCompressionLevel] = useState<number>(70);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [zipName, setZipName] = useState<string>(domain);
  const [showZipOptions, setShowZipOptions] = useState<boolean>(false);
  const [resizeModalOpen, setResizeModalOpen] = useState<boolean>(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState<number>(-1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [conversionProgress, setConversionProgress] = useState<number>(0);
  const [fileErrors, setFileErrors] = useState<{ [key: string]: string }>({});
  const [renameModalOpen, setRenameModalOpen] = useState<boolean>(false);
  const [fileToRename, setFileToRename] = useState<{
    index: number;
    name: string;
  } | null>(null);
  const [newFileName, setNewFileName] = useState<string>("");
  const toast = useToast();
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Filter for image files and validate them
      const imageFiles = acceptedFiles.filter((file) => {
        const isImage = isValidImage(file);
        if (!isImage) {
          console.warn(`File rejected: ${file.name} (${file.type})`);
        }
        return isImage;
      });

      if (imageFiles.length === 0) {
        toast.error(
          "No valid image files were found. Please upload supported image formats."
        );
        return;
      }

      // Process files to sanitize names if needed
      const processedFiles = imageFiles.map((file) => {
        // Check if the file might be problematic
        if (isPotentiallyProblematicImage(file.name)) {
          console.warn(`Potentially problematic file detected: ${file.name}`);
          // Create a sanitized version of the file
          return createSanitizedFile(file);
        }
        return file;
      });

      setFiles((prev) => [...prev, ...processedFiles]);
      toast.success(
        `${imageFiles.length} image${
          imageFiles.length > 1 ? "s" : ""
        } added successfully`
      );
      setErrorMessage(null);
    },
    [toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".webp",
        ".avif",
        ".bmp",
        ".tiff",
        ".svg",
      ],
    },
    maxSize: 50 * 1024 * 1024, // 50MB max size
  });

  const handleFilesAdded = (newFiles: File[]) => {
    // Security validation for each file
    const validFiles: File[] = []
    const errors: string[] = []

    for (const file of newFiles) {
      // Validate file security
      const validation = ImageSecurityValidator.validateFile(file)
      if (!validation.isValid) {
        errors.push(`${file.name}: ${validation.error}`)
        continue
      }

      // Check rate limiting
      const rateCheck = ImageSecurityValidator.checkRateLimit()
      if (!rateCheck.allowed) {
        toast.error(rateCheck.error || "Rate limit exceeded")
        return
      }

      validFiles.push(file)
    }

    if (errors.length > 0) {
      toast.error(`Some files were rejected: ${errors.join(', ')}`)
    }

    if (validFiles.length === 0) {
      toast.error("No valid image files were found.")
      return
    }

    // Process valid files with sanitized names
    const processedFiles = validFiles.map((file) => {
      const sanitizedName = ImageSecurityValidator.sanitizeFilename(file.name)
      if (sanitizedName !== file.name) {
        return new File([file], sanitizedName, { type: file.type })
      }
      return file
    })

    setFiles((prev) => [...prev, ...processedFiles])
    toast.success(`${processedFiles.length} image${processedFiles.length > 1 ? "s" : ""} added successfully`)
    setErrorMessage(null)
  }

  const handleRemoveFile = (index: number) => {
    const fileName = files[index].name;
    setFiles((prev) => prev.filter((_, i) => i !== index));
    // Also clear any errors for this file
    if (files[index]) {
      setFileErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[files[index].name];
        return newErrors;
      });
    }
    toast.info(`Removed ${fileName}`);
  };

  const handleClearAll = () => {
    setFiles([]);
    setFileErrors({});
    toast.info("All files cleared");
  };

  const handleClearConverted = () => {
    // Revoke all object URLs to avoid memory leaks
    convertedFiles.forEach((file) => URL.revokeObjectURL(file.url));
    setConvertedFiles([]);
    toast.info("Converted files cleared");
  };

  // Update the handleConvert function to properly apply quality and compression
  const handleConvert = async (fileIndex?: number) => {
    // Check memory usage before processing
    const memoryCheck = ImageSecurityValidator.checkMemoryUsage()
    if (!memoryCheck.safe) {
      toast.warning(memoryCheck.warning || "High memory usage detected")
    }

    // Validate conversion parameters
    const paramValidation = InputSanitizer.validateConversionParams({
      format: selectedFormat,
      quality: quality,
      compressionLevel: compressionEnabled ? compressionLevel : undefined
    })

    if (!paramValidation.isValid) {
      toast.error(paramValidation.error || "Invalid conversion parameters")
      return
    }
    const filesToConvert = fileIndex !== undefined ? [files[fileIndex]] : files;

    if (filesToConvert.length === 0) return;

    setIsConverting(true);
    setErrorMessage(null);
    setConversionProgress(0);

    // Clear previous file errors if converting all files
    if (fileIndex === undefined) {
      setFileErrors({});
    }

    try {
      const newConvertedFiles: Array<{
        name: string;
        originalName: string;
        url: string;
        size: number;
        originalFormat: string;
        convertedFormat: string;
        originalSize: number;
        width: number;
        height: number;
        quality: number;
        compressionLevel: number;
        compressionEnabled: boolean;
        renamed?: boolean;
      }> = [];
      let successCount = 0;
      let errorCount = 0;
      const newFileErrors: { [key: string]: string } = { ...fileErrors };

      for (let i = 0; i < filesToConvert.length; i++) {
        try {
          const file = filesToConvert[i];
          setConversionProgress(Math.round((i / filesToConvert.length) * 100));

          // Skip files that previously had errors if we're converting all
          if (fileIndex === undefined && newFileErrors[file.name]) {
            console.warn(`Skipping previously failed file: ${file.name}`);
            errorCount++;
            continue;
          }

          // Get dimensions and format info first
          let dimensions = { width: 800, height: 600 };
          let originalFormat =
            file.name.split(".").pop()?.toLowerCase() || "unknown";

          try {
            const imageInfo = await getImageInfo(file);
            dimensions = { width: imageInfo.width, height: imageInfo.height };
            originalFormat = imageInfo.format;
          } catch (dimError) {
            console.error(
              `Error getting dimensions for file ${file.name}:`,
              dimError
            );
            // Continue with default dimensions - no need to fail the conversion
          }

          // Then convert the image with additional error handling
          let convertedBlob;
          try {
            // Only pass compression level if compression is enabled
            console.log(
              `Converting ${
                file.name
              } to ${selectedFormat} with quality: ${quality} and compression: ${
                compressionEnabled ? compressionLevel : "disabled"
              }`
            );

            // Pass undefined for compressionLevel when compression is disabled
            // This ensures no compression is applied when the feature is toggled off
            convertedBlob = await convertImage(
              file,
              selectedFormat,
              quality,
              compressionEnabled ? compressionLevel : undefined
            );

            console.log(
              `Converted ${file.name}: Size: ${convertedBlob.size} bytes, Type: ${convertedBlob.type}`
            );
          } catch (conversionError) {
            console.error(
              `Conversion error for ${file.name}:`,
              conversionError
            );

            // Store the error for this file
            newFileErrors[file.name] =
              conversionError instanceof Error
                ? conversionError.message
                : "Unknown conversion error";

            errorCount++;
            continue; // Skip to the next file
          }

          // Generate a sanitized filename for the output
          const baseName = file.name.split(".")[0];
          const sanitizedBaseName = sanitizeFileName(baseName);
          const fileName = `${sanitizedBaseName}.${selectedFormat}`;

          // Replace URL.createObjectURL(convertedBlob) with:
          const url = CSPHelper.createSecureBlobURL(convertedBlob, 'image/')

          newConvertedFiles.push({
            name: fileName,
            originalName: file.name,
            url: url,
            size: convertedBlob.size,
            originalFormat: originalFormat,
            convertedFormat: selectedFormat,
            originalSize: file.size,
            width: dimensions.width,
            height: dimensions.height,
            quality: quality,
            compressionLevel: compressionEnabled ? compressionLevel : 0,
            compressionEnabled: compressionEnabled,
            renamed: false, // Add this new property to track if file was explicitly renamed
          });

          successCount++;
        } catch (fileError) {
          console.error(`Error processing file at index ${i}:`, fileError);

          // Store the error for this file
          if (filesToConvert[i]) {
            newFileErrors[filesToConvert[i].name] =
              fileError instanceof Error
                ? fileError.message
                : "Unknown processing error";
          }

          errorCount++;
          // Continue with other files even if one fails
        }
      }

      setConversionProgress(100);
      setFileErrors(newFileErrors);

      if (newConvertedFiles.length > 0) {
        setConvertedFiles((prev) => [...prev, ...newConvertedFiles]);

        if (errorCount > 0) {
          const message = `Converted ${successCount} of ${filesToConvert.length} files. ${errorCount} file(s) could not be processed.`;
          setErrorMessage(message);
          toast.warning(message);
        } else {
          toast.success(
            `Successfully converted ${successCount} file${
              successCount > 1 ? "s" : ""
            }`
          );
        }
      } else {
        const message =
          "Failed to convert any files. Please try different images or formats.";
        setErrorMessage(message);
        toast.error(message);
      }
    } catch (error) {
      console.error("Conversion failed:", error);
      const message =
        "Conversion failed. Please try again with different images.";
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setIsConverting(false);
      setConversionProgress(0);
    }
  };

  const handleDownloadAll = async () => {
    if (convertedFiles.length === 0) return;

    try {
      // Download as ZIP
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();

      // Show loading toast
      toast.info("Creating ZIP file, please wait...");

      for (const file of convertedFiles) {
        try {
          const response = await fetch(file.url);
          if (!response.ok) {
            throw new Error(
              `Failed to fetch ${file.name}: ${response.statusText}`
            );
          }
          const blob = await response.blob();

          // Build file name for ZIP: [originalName]-[domain].[ext] (no double domain)
          const nameParts = file.name.split(".");
          const ext = nameParts.pop() || file.convertedFormat;
          let base = nameParts.join(".");
          // Remove any existing -domain suffix to avoid double domain
          if (domain && base.endsWith(`-${domain}`)) {
            base = base.slice(0, -(domain.length + 1));
          }
          const zipFileName =
            domain && domain.trim()
              ? `${base}-${domain.trim()}.${ext}`
              : `${base}.${ext}`;

          zip.file(zipFileName, blob);
        } catch (error) {
          console.error(`Error adding file ${file.name} to zip:`, error);
          toast.error(`Error adding ${file.name} to ZIP. Skipping this file.`);
          // Continue with other files
        }
      }

      const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
          level: 6, // Medium compression level
        },
      });

      // Create a direct download link
      const zipUrl = URL.createObjectURL(zipBlob);
      const downloadLink = document.createElement("a");

      const baseZipName = zipName && zipName.trim() ? zipName.trim() : "";
      const baseDomain = domain && domain.trim() ? domain.trim() : "";
      let finalZipName = "";

      if (baseZipName) {
        // Only append domain if not already present (case-insensitive)
        if (
          baseDomain &&
          !baseZipName.toLowerCase().includes(baseDomain.toLowerCase())
        ) {
          finalZipName = `${baseZipName}_${baseDomain}`;
        } else {
          finalZipName = baseZipName;
        }
      } else if (baseDomain) {
        finalZipName = baseDomain;
      } else {
        finalZipName = "download";
      }

      downloadLink.href = zipUrl;
      downloadLink.download = `${finalZipName}.zip`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Clean up
      setTimeout(() => URL.revokeObjectURL(zipUrl), 100);
      toast.success(
        `Downloaded ${convertedFiles.length} files as ${zipName}.zip`
      );
    } catch (error) {
      console.error("Download failed:", error);
      toast.error(
        "Failed to create ZIP file. Please try downloading files individually."
      );
    }
  };

  const handleDownloadSingle = (url: string, fileName: string) => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.download = fileName;
      downloadLinkRef.current.click();
      toast.success(`Downloaded ${fileName}`);
    }
  };

  const handleDeleteConverted = (index: number) => {
    const fileName = convertedFiles[index].name;
    // Replace URL.revokeObjectURL calls with:
    CSPHelper.safeRevokeURL(convertedFiles[index].url)
    setConvertedFiles((prev) => prev.filter((_, i) => i !== index));
    toast.info(`Removed ${fileName}`);
  };

  const handleOpenResizeModal = (index: number) => {
    setSelectedFileIndex(index);
    setResizeModalOpen(true);
  };

  const handleResizeImage = async (width: number, height: number) => {
    if (selectedFileIndex === -1) return;

    const file = convertedFiles[selectedFileIndex];

    try {
      const resizedBlob = await resizeImage(
        file.url,
        width,
        height,
        file.convertedFormat,
        quality
      );

      // Update the file in the convertedFiles array
      const updatedFiles = [...convertedFiles];

      // Revoke the old URL to avoid memory leaks
      // Replace URL.revokeObjectURL calls with:
      CSPHelper.safeRevokeURL(updatedFiles[selectedFileIndex].url)

      // Create a new URL for the resized image
      const newUrl = URL.createObjectURL(resizedBlob);

      updatedFiles[selectedFileIndex] = {
        ...updatedFiles[selectedFileIndex],
        url: newUrl,
        size: resizedBlob.size,
        width: width,
        height: height,
      };

      setConvertedFiles(updatedFiles);
      setResizeModalOpen(false);
      toast.success(`Resized ${file.name} to ${width}×${height}px`);
    } catch (error) {
      console.error(
        "Resize failed:",
        error instanceof Error ? error.message : String(error)
      );
      toast.error("Failed to resize image. Please try again.");
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const getQualityLabel = (value: number) => {
    if (value < 40) return "Low";
    if (value < 70) return "Medium";
    return "High";
  };

  const getCompressionLabel = (value: number) => {
    if (value < 40) return "Light";
    if (value < 80) return "Medium";
    return "Heavy";
  };

  const handleOpenRenameModal = (index: number) => {
    const file = convertedFiles[index];
    setFileToRename({ index, name: file.name });
    setNewFileName(file.name.split(".").slice(0, -1).join(".")); // Set initial value to filename without extension
    setRenameModalOpen(true);
  };

  const handleRenameFile = () => {
    if (!fileToRename) return;

    const index = fileToRename.index;
    const file = convertedFiles[index];
    const extension = file.name.split(".").pop() || file.convertedFormat;
    const newName = `${newFileName}.${extension}`;
    console.log({ domain });
    const updatedFiles = [...convertedFiles];
    updatedFiles[index] = {
      ...updatedFiles[index],
      name: newName,
      renamed: true, // Set this flag when user explicitly renames a file
    };

    setConvertedFiles(updatedFiles);
    setRenameModalOpen(false);
    toast.success(`Renamed to ${newName}`);
  };

  const formats = [
    { value: "jpg", label: "JPG", description: "Best for photos" },
    { value: "png", label: "PNG", description: "Supports transparency" },
    { value: "webp", label: "WebP", description: "Smaller file size" },
    { value: "gif", label: "GIF", description: "Supports animation" },
    { value: "svg", label: "SVG", description: "Vector format" },
    { value: "tiff", label: "TIFF", description: "High quality" },
  ];

  return (
    <section id="converter" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-tool">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            {/* <h2 className="text-3xl font-bold tracking-tight">Image Converter</h2> */}
            {/* <p className="text-muted-foreground mt-2">Upload your images and convert them to any format you need</p> */}
          </motion.div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-custom text-red-600 dark:text-red-400 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>{errorMessage}</div>
            </div>
          )}

          <div className="space-y-6">
            {/* Upload Area */}
            <div className="bg-white dark:bg-gray-900 rounded-custom shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden p-6">
              <div
                {...getRootProps()}
                className={`
                  border-2 border-dashed rounded-custom p-10 text-center cursor-pointer transition-colors
                  ${
                    isDragActive
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                  }
                `}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-4">
                    <ArrowUp className="h-8 w-8 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">
                      Drop your images here
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      SVG, PNG, JPG, GIF, WEBP or TIFF (max 50MB)
                    </p>
                  </div>

                  <div className="pt-4">
                    <UploadButton
                      onClick={() => fileInputRef.current?.click()}
                    />
                  </div>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) {
                    handleFilesAdded(Array.from(e.target.files));
                  }
                }}
              />
            </div>

            {/* Format and Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Output Format */}
              <div className="bg-white dark:bg-gray-900 rounded-custom shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden p-6">
                <h3 className="text-lg font-medium mb-4">Output Format</h3>
                <div className="grid grid-cols-2 gap-3">
                  {formats.map((format) => (
                    <div
                      key={format.value}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-custom border transition-all duration-200 cursor-pointer
                        ${
                          selectedFormat === format.value
                            ? "border-primary bg-primary/5 ring-2 ring-primary"
                            : "border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5"
                        }
                      `}
                      onClick={() => setSelectedFormat(format.value)}
                    >
                      <FormatIcon format={format.value} />
                      <div className="text-center">
                        <div className="font-medium">{format.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {format.description}
                        </div>
                      </div>
                      {selectedFormat === format.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 rounded-full bg-primary p-0.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Settings */}
              <div className="bg-white dark:bg-gray-900 rounded-custom shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden p-6">
                <h3 className="text-lg font-medium mb-4">Settings</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="quality" className="text-sm font-medium">
                        Quality: {quality}%
                      </label>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                        ${
                          quality < 40
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500"
                            : quality < 70
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500"
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500"
                        }`}
                      >
                        {getQualityLabel(quality)}
                      </span>
                    </div>
                    <div className="relative w-full h-2 mb-4">
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div
                        // className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 via-amber-900 to-green-500 rounded-full"
                        //my black and white color combo
                        //  className="absolute inset-y-0 left-0 bg-black dark:bg-white rounded-full"
                        // style={{ width: `${quality}%`, transition: 'width 0.3s ease' }}
                        className="absolute inset-y-0 left-0 bg-primary dark:bg-primary rounded-full"
                        style={{
                          width: `${quality}%`,
                          transition: "width 0.3s ease",
                        }}
                      ></div>
                      <div
                        // className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow-md border-2 border-white dark:border-gray-800 bg-gradient-to-r from-yellow-400 to-green-500 cursor-pointer transition-all duration-200 hover:scale-110"
                        // className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow-md border-2 border-black dark:border-white bg-white dark:bg-black cursor-pointer transition-all duration-200 hover:scale-110"
                        className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow-md border-2 border-primary dark:border-primary bg-white dark:bg-white cursor-pointer transition-all duration-200 hover:scale-110"
                        style={{
                          left: `calc(${quality}% - 12px)`,
                          transition: "left 0.3s ease, transform 0.2s ease",
                        }}
                      ></div>
                      <input
                        id="quality"
                        type="range"
                        min={1}
                        max={100}
                        value={quality}
                        onChange={(e) =>
                          setQuality(Number.parseInt(e.target.value))
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>Smaller file</span>
                      <span>High quality</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <label
                        htmlFor="compression-toggle"
                        className="text-sm font-medium"
                      >
                        Enable Compression
                      </label>
                    </div>
                    <button
                      id="compression-toggle"
                      type="button"
                      role="switch"
                      aria-checked={compressionEnabled}
                      data-state={compressionEnabled ? "checked" : "unchecked"}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${
                        compressionEnabled
                          ? "bg-primary shadow-inner shadow-primary/25"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                      onClick={() => setCompressionEnabled(!compressionEnabled)}
                    >
                      <span
                        className={`
                          pointer-events-none block h-5 w-5 rounded-full bg-white shadow-md 
                          transition-all duration-300 ease-in-out
                          ${
                            compressionEnabled
                              ? "translate-x-5 ring-2 ring-primary/25"
                              : "translate-x-0"
                          }
                        `}
                      />
                    </button>
                  </div>

                  {compressionEnabled && (
                    <div className="pt-4">
                      <div className="flex justify-between mb-2">
                        <label
                          htmlFor="compression"
                          className="text-sm font-medium"
                        >
                          Compression Level: {compressionLevel}%
                        </label>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                            ${
                              compressionLevel < 40
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500"
                                : compressionLevel < 80
                                ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-500"
                                : "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-500"
                            }`}
                        >
                          {getCompressionLabel(compressionLevel)}
                        </span>
                      </div>
                      <div className="relative w-full h-2 mb-4">
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div
                          // className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-600 rounded-full"
                          // className="absolute inset-y-0 left-0 bg-black dark:bg-white rounded-full"
                          className="absolute inset-y-0 left-0 bg-primary dark:bg-primary rounded-full"
                          style={{
                            width: `${compressionLevel}%`,
                            transition: "width 0.3s ease",
                          }}
                        ></div>
                        <div
                          // className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow-md border-2 border-white dark:border-gray-800 bg-gradient-to-r from-purple-400 to-violet-600 cursor-pointer transition-all duration-200 hover:scale-110"
                          // className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow-md border-2 border-black dark:border-white bg-white dark:bg-black cursor-pointer transition-all duration-200 hover:scale-110"
                          className="absolute top-1/2 -mt-3 w-6 h-6 rounded-full shadow-md border-2 border-primary dark:border-primary bg-white dark:bg-white cursor-pointer transition-all duration-200 hover:scale-110"
                          style={{
                            left: `calc(${compressionLevel}% - 12px)`,
                            transition: "left 0.3s ease, transform 0.2s ease",
                          }}
                        ></div>
                        <input
                          id="compression"
                          type="range"
                          min={1}
                          max={100}
                          value={compressionLevel}
                          onChange={(e) =>
                            setCompressionLevel(Number.parseInt(e.target.value))
                          }
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>Light</span>
                        <span>Heavy</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Uploaded Files */}
            {files.length > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-custom shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden p-6">
                <div className="flex flex-col justify-between items-center mb-4 xsm:flex-row xsm:items-start">
                  <h3 className="text-lg font-medium mb-4 xsm:mb-0">
                    Images ({files.length})
                  </h3>

                  <div className="flex gap-2">
                    <ConvertButton
                      onClick={() => handleConvert()}
                      isConverting={isConverting}
                      disabled={files.length === 0}
                    />
                    <DeleteallButton onClick={() => handleClearAll()} />
                  </div>
                </div>

                {isConverting && (
                  <div className="mb-4">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300 ease-in-out"
                        style={{ width: `${conversionProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-center mt-1 text-muted-foreground">
                      Converting... {conversionProgress}%
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  {files.map((file, index) => {
                    // Create a safe object URL that we can revoke later
                    const objectUrl = URL.createObjectURL(file);
                    const hasError = fileErrors[file.name] !== undefined;

                    return (
                      <div
                        key={`${file.name}-${index}`}
                        className={`flex items-center justify-between p-3 rounded-custom border ${
                          hasError
                            ? "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20"
                            : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-custom overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <Image
                              src={objectUrl || "/placeholder.svg"}
                              alt={file.name}
                              width={40}
                              height={40}
                              className="object-cover w-full h-full"
                              onLoad={() => {
                                // We keep the URL for the image display
                              }}
                              onError={() => {
                                // If image fails to load, we still want to revoke the URL
                                URL.revokeObjectURL(objectUrl);
                              }}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium truncate max-w-[120px] sm:max-w-[400px]  xsm:max-w-[250px]">
                              {file.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatFileSize(file.size)}
                            </p>
                            {hasError && (
                              <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                                Error: {fileErrors[file.name]}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-col xsm:flex-row">
                          <ConvertSingleButton
                            onClick={() => {
                              handleConvert(index);
                              // We don't revoke the URL here as it's still needed for display
                            }}
                            disabled={isConverting}
                          />
                          <RemoveButton
                            onClick={() => {
                              handleRemoveFile(index);
                              // Revoke the URL when removing the file
                              URL.revokeObjectURL(objectUrl);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Converted Files */}
            {convertedFiles.length > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-custom shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden p-6">
                <div className="flex flex-col justify-between items-center mb-4 xsm:flex-row xsm:items-start">
                  <h3 className="text-lg font-medium mb-4 xsm:mb-0">
                    Converted Files ({convertedFiles.length})
                  </h3>

                  <div className=" flex gap-2">
                    <ZipOptionsButton
                      onClick={() => setShowZipOptions(!showZipOptions)}
                      showZipOptions={showZipOptions}
                    />
                    <DeleteallButton onClick={() => handleClearConverted()} />
                  </div>
                </div>

                {showZipOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 p-4 border rounded-custom bg-gray-50 dark:bg-gray-800/50"
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                      <div className="flex-1">
                        <label
                          htmlFor="zip-name"
                          className="text-sm font-medium mb-1 block"
                        >
                          ZIP File Name
                        </label>
                        <input
                          id="zip-name"
                          type="text"
                          placeholder={domain}
                          onChange={(e) => setZipName(e.target.value)}
                          className="w-full rounded-custom border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
                        />
                      </div>
                      <PrimaryButton
                        onClick={handleDownloadAll}
                        className="mt-2 md:mt-6"
                      >
                        Download ZIP
                      </PrimaryButton>
                    </div>
                  </motion.div>
                )}
                <div className="space-y-3">
                  {convertedFiles.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-custom border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className=" flex items-start w-32 h-32 rounded-custom overflow-hidden bg-gray-100 dark:bg-gray-800 xsm:w-10 xsm:h-10">
                          <Image
                            src={file.url || "/placeholder.svg"}
                            alt={file.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <div>
                            <div className="flex flex-col ">
                              <span
                                className={`font-medium truncate max-w-[150px] md:max-w-[400px] sm:max-w-[340px]  xsm:max-w-[300px] ${
                                  file.renamed ? "text-xs " : "text-sm "
                                }`}
                              >
                                {file.originalName.split(".")[0] +
                                  // "-" +
                                  // domain +
                                  "." +
                                  file.convertedFormat}
                              </span>

                              {file.renamed && (
                                <span className="text-sm font-medium truncate max-w-[150px] md:max-w-[400px] sm:max-w-[340px]  xsm:max-w-[300px]">
                                  {/* <span className="text-xs text-muted-foreground"> */}
                                  Renamed: {file.name}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-col flex-wrap gap-x-3 text-xs text-muted-foreground mt-1 xsm:flex-row">
                              <span>{formatFileSize(file.size)}</span>
                              <span className="flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-1"></span>
                                {file.originalFormat.toUpperCase()} →{" "}
                                {file.convertedFormat.toUpperCase()}
                              </span>
                              <span className="flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1"></span>
                                {formatFileSize(file.originalSize)} →{" "}
                                {formatFileSize(file.size)}
                              </span>
                              <span>
                                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-1"></span>
                                {file.width}×{file.height}px
                              </span>
                              <span className="flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-1"></span>
                                Quality: {file.quality}%
                              </span>
                              {file.compressionEnabled && (
                                <span className="flex items-center">
                                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-1"></span>
                                  Compression: {file.compressionLevel}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-2 mt-3 sm:mt-0 xsm:justify-end">
                        <button
                          onClick={() => handleOpenRenameModal(index)}
                          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:text-amber-500 dark:hover:text-amber-400 dark:hover:bg-amber-900/20 inline-flex items-center justify-center whitespace-nowrap rounded-custom p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  [--renamescale:1] hover:[--renamescale:1.25] "
                          title="Rename"
                        >
                          <Pencil className="h-4 w-4  scale-[var(--renamescale)] transition-all duration-300" />
                        </button>
                        <ResizeButton
                          onClick={() => handleOpenResizeModal(index)}
                        />
                        <DownloadButton
                          onClick={() =>
                            handleDownloadSingle(
                              file.url,
                              file.name.split(".")[0] +
                                "-" +
                                domain +
                                "." +
                                file.convertedFormat
                            )
                          }
                        />
                        <DeleteButton
                          onClick={() => handleDeleteConverted(index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hidden download link */}
          <a ref={downloadLinkRef} className="hidden" />

          {/* Resize Modal */}
          <AnimatePresence>
            {resizeModalOpen && selectedFileIndex !== -1 && (
              <ResizeModal
                file={convertedFiles[selectedFileIndex]}
                onClose={() => setResizeModalOpen(false)}
                onResize={handleResizeImage}
              />
            )}
          </AnimatePresence>

          {/* Rename Modal */}
          <AnimatePresence>
            {renameModalOpen && fileToRename && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
\
