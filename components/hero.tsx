"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ContentBoxes from "./content-boxes";

export default function Hero() {
  const scrollToConverter = () => {
    const converterSection = document.getElementById("converter");
    if (converterSection) {
      converterSection.scrollIntoView({ behavior: "smooth" });
    }

  };
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none leading-tight">
              Transform your images to <br /> any format in{" "}
              <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
                seconds
              </span>
            </h1>

            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Convert between JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and HEIC
              formats instantly with our powerful, easy-to-use tool. 
       
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="mt-4 group"
              onClick={scrollToConverter}
            >
              Try It Now
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Add the ContentBoxes component here */}
      <ContentBoxes />
    </section>
  );
}
