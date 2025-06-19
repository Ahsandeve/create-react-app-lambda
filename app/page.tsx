"use client";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/faq";
import ImageConverter from "@/components/tool/image-converter";
import MouseFollower from "@/components/ui/mouse-follower2";
export default function Home() {
  return (
    <div className="select-none flex flex-col items-center justify-center w-full">
        <MouseFollower/>
        <Hero />
        <ImageConverter />
        <Features />
        <ContactForm />
        <FAQ />
      </div>
  );
}
