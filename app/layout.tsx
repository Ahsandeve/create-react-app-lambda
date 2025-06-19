import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { ToastProvider } from "@/components/ui/toast-notification";
import { CustomToastContainer } from "@/components/ui/custom-toast";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import AnimatedBackground from "@/components/animated-background";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { DomainProvider } from "@/context/DomainContext";

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Advanced Image Converter",
  description: "Convert images to any format with advanced options",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}> */}
      <body>
        <DomainProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <ToastProvider>
                <AnimatedBackground />
                <div className="flex flex-col min-h-screen relative z-10">
                  <Header />
                  <ScrollProgressBar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <ScrollToTop />
                <CustomToastContainer />
              </ToastProvider>
            </AuthProvider>
          </ThemeProvider>
        </DomainProvider>
      </body>
    </html>
  );
}
