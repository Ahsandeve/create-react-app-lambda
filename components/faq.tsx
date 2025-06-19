"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  const allFaqs = [
    {
      category: "General",
      question: "What image formats can I convert?",
      answer:
        "Our tool supports a wide range of formats including JPG, PNG, WebP, GIF, BMP, TIFF, HEIC/HEIF, SVG, ICO, PDF, EPS, RAW, and PSD. You can convert between any of these formats with maintained quality and optimized file sizes.",
    },
    {
      category: "General",
      question: "Is there a limit to how many images I can convert?",
      answer:
        "There's no hard limit on the number of images you can convert. However, for very large batches (100+ images), we recommend processing them in smaller groups for optimal performance. The tool is designed to handle multiple conversions efficiently.",
    },
    {
      category: "Quality",
      question: "Will my images lose quality during conversion?",
      answer:
        "Our converter is designed to maintain the highest possible quality. You can adjust the quality settings to find the perfect balance between file size and image quality. For lossless formats like PNG, we ensure no quality loss occurs during conversion. For formats like JPG, you can control the compression level to preserve details.",
    },
    {
      category: "Security",
      question: "Are my images secure when using this tool?",
      answer:
        "All processing happens directly in your browser. Your images never leave your device or get uploaded to any server, ensuring complete privacy and security. We don't store any of your images or personal data, making this one of the most secure image conversion tools available.",
    },
    {
      category: "Usage",
      question: "Can I use this tool on my mobile device?",
      answer:
        "Yes, our image converter is fully responsive and works on all devices including smartphones and tablets. The interface automatically adapts to your screen size, providing an optimal experience whether you're on desktop, tablet, or mobile.",
    },
    {
      category: "Features",
      question: "How do I batch convert multiple images?",
      answer:
        "Simply drag and drop multiple files into the upload area, select your desired output format and settings, then click 'Convert All Files'. You can download them individually or as a ZIP archive. Our batch processing is optimized to handle multiple files efficiently.",
    },
    {
      category: "Technical",
      question: "What's the maximum file size I can convert?",
      answer:
        "The tool can handle images up to 50MB in size. For larger files, we recommend compressing them first or using our compression settings during conversion. If you need to process exceptionally large images, consider splitting them or adjusting the quality settings.",
    },
    {
      category: "Account",
      question: "Do I need to create an account to use this tool?",
      answer:
        "No, our image converter is completely free to use without any registration or account creation required. We believe in providing hassle-free tools that respect your privacy and time.",
    },
    {
      category: "Technical",
      question: "How does the quality setting affect my images?",
      answer:
        "The quality setting primarily affects lossy formats like JPG and WebP. A higher quality setting (closer to 100%) preserves more details but results in larger file sizes. Lower settings (below 70%) reduce file size but may introduce visible artifacts. For most use cases, a setting between 80-90% offers the best balance.",
    },
    {
      category: "Features",
      question: "Can I resize my images during conversion?",
      answer:
        "Yes, our tool allows you to resize images during or after conversion. After converting an image, you can click the resize button to adjust dimensions while maintaining aspect ratio. This is particularly useful for web optimization or when you need specific image dimensions.",
    },
    {
      category: "Technical",
      question: "Which format is best for web images?",
      answer:
        "WebP is generally the best format for web images as it offers excellent compression with minimal quality loss. For photographs, JPG at 80-85% quality is a good choice. For images with transparency or sharp details, PNG is recommended. For simple graphics or icons, SVG provides perfect scaling at minimal file size.",
    },
    {
      category: "Usage",
      question: "How can I convert multiple images to different formats?",
      answer:
        "Currently, all images in a batch will be converted to the same format. If you need different formats, you'll need to process them in separate batches. We're considering adding per-file format selection in a future update to streamline this process.",
    },
    {
      category: "Features",
      question: "Can I compress images without changing their format?",
      answer:
        "Yes, you can compress images without changing their format by selecting the same output format as the input and adjusting the quality/compression settings. This is useful when you want to reduce file size while maintaining the original format.",
    },
    {
      category: "Technical",
      question: "Does the tool preserve EXIF data?",
      answer:
        "By default, our converter strips EXIF data to reduce file size and protect your privacy. EXIF data often contains sensitive information like GPS coordinates and device details. If you need to preserve this metadata, please use the 'Preserve Metadata' option in the advanced settings.",
    },
    {
      category: "Usage",
      question: "How do I download all converted images at once?",
      answer:
        "After converting multiple images, click the 'ZIP Options' button above the converted files list. You can customize the ZIP file name and then click 'Download ZIP' to get all your converted images in a single compressed file.",
    },
    {
      category: "Features",
      question: "Can I convert animated GIFs to other formats?",
      answer:
        "Yes, you can convert animated GIFs to WebP format while preserving animation. When converting to other formats like JPG or PNG, only the first frame will be extracted. For full animation support, we recommend using the WebP format which offers better compression than GIF.",
    },
    {
      category: "Technical",
      question: "What's the difference between lossy and lossless compression?",
      answer:
        "Lossy compression (used in JPG, WebP) reduces file size by permanently removing some image data, which can affect quality at lower settings. Lossless compression (used in PNG, some WebP modes) preserves all image data while still reducing file size, resulting in larger files but perfect quality. Our tool lets you choose between these approaches based on your needs.",
    },
    {
      category: "Security",
      question: "Is my data tracked when using this tool?",
      answer:
        "We respect your privacy and do not track individual image conversions. We only collect anonymous usage statistics to help improve the tool. No personal data or image content is ever stored or analyzed. You can use our tool with complete confidence in your privacy.",
    },
    {
      category: "Features",
      question: "Can I adjust the compression level for PNG files?",
      answer:
        "Yes, our tool allows you to adjust compression levels for PNG files. Higher compression levels result in smaller file sizes but may increase conversion time. Since PNG uses lossless compression, the image quality will remain the same regardless of compression level - only the file size is affected.",
    },
  ]

  // Group FAQs by category
  const faqsByCategory: Record<string, typeof allFaqs> = {}
  allFaqs.forEach((faq) => {
    if (!faqsByCategory[faq.category]) {
      faqsByCategory[faq.category] = []
    }
    faqsByCategory[faq.category].push(faq)
  })

  return (
    <div className="w-full max-w-3xl mx-auto px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Find answers to common questions about our image converter.
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        {Object.entries(faqsByCategory).map(([category, faqs]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <HelpCircle className="mr-2 h-5 w-5 text-primary" />
              {category}
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                  const faqId = `${category}-${index}`
                  return (
                    <AccordionItem key={faqId} value={faqId}>
                      <AccordionTrigger className="w-full text-left text-gray-900 dark:text-white px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300 px-6 pb-2">
                        <div className="mb-2">{faq.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
