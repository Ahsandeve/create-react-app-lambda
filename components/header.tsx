"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./auth-provider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { Menu, X, ImageIcon, ChevronDown, ChevronRight } from "lucide-react";
import LoginDialog from "./login-dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useDomain } from "@/context/DomainContext";
export default function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMobileBlogDropdownOpen, setIsMobileBlogDropdownOpen] =
    useState(false);
  const pathname = usePathname();
  const { domain, setDomain } = useDomain();
  // Blog dropdown hide delay
  const blogTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      const hash = path.substring(1);
      return (
        pathname === "/" &&
        typeof window !== "undefined" &&
        window.location.hash === hash
      );
    }

    if (path === "/") {
      return pathname === "/";
    }

    if (
      path.startsWith("/blog/category/") &&
      pathname.startsWith("/blog/category/")
    ) {
      return path === pathname;
    }

    return pathname.startsWith(path);
  };

  const isBlogCategoryActive =
    pathname.startsWith("/blog/category/") || pathname === "/blog";

  const blogCategories = [
    { name: "All Posts", path: "/blog" },
    { name: "Guides", path: "/blog/category/guides/" },
    { name: "Tutorials", path: "/blog/category/tutorials/" },
    { name: "Technology", path: "/blog/category/technology/" },
    { name: "Photography", path: "/blog/category/photography/" },
    { name: "Technical", path: "/blog/category/technical/" },
    { name: "Development", path: "/blog/category/development/" },
  ];

  const handleMouseEnter = () => {
    if (blogTimeoutRef.current) clearTimeout(blogTimeoutRef.current);
    setIsBlogDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    blogTimeoutRef.current = setTimeout(() => {
      setIsBlogDropdownOpen(false);
    }, 400);
  };

  return (
    <header className="select-none sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageIcon className="h-6 w-6 text-primary" />
          </motion.div>
          <motion.span
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {domain}
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#converter"
            className={cn(
              "text-sm font-medium transition-colors relative",
              isActive("#converter")
                ? "text-primary after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[3px] after:bg-primary"
                : "hover:text-primary"
            )}
          >
            Tool
          </Link>
          <Link
            href="#features"
            className={cn(
              "text-sm font-medium transition-colors relative",
              isActive("#features")
                ? "text-primary after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[3px] after:bg-primary"
                : "hover:text-primary"
            )}
          >
            Features
          </Link>

          {/* Blog Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={cn(
                "text-sm font-medium transition-colors relative flex items-center gap-1",
                isBlogCategoryActive
                  ? "text-primary after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[3px] after:bg-primary"
                  : "hover:text-primary"
              )}
            >
              Blog
              <ChevronDown className="h-4 w-4" />
            </button>

            {isBlogDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {blogCategories.map((category) => (
                    <Link
                      key={category.path}
                      href={category.path}
                      className={cn(
                        "block px-4 py-2 text-sm",
                        isActive(category.path)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      )}
                      onClick={() => setIsBlogDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors relative",
              isActive("/about")
                ? "text-primary after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[3px] after:bg-primary"
                : "hover:text-primary"
            )}
          >
            About
          </Link>
          <Link
            href="/#contact"
            className={cn(
              "text-sm font-medium transition-colors relative",
              isActive("/#contact")
                ? "text-primary after:absolute after:bottom-[-18px] after:left-0 after:right-0 after:h-[3px] after:bg-primary"
                : "hover:text-primary"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right-side controls */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          {user ? (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm">Hello, {user.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="rounded-custom"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex rounded-custom"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-custom"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden p-4 bg-background border-b"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#converter"
              className={cn(
                "text-sm font-medium",
                isActive("/#converter")
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Tool
            </Link>
            <Link
              href="/#features"
              className={cn(
                "text-sm font-medium",
                isActive("/#features")
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <div>
              <button
                type="button"
                className={cn(
                  "text-sm font-medium flex items-center justify-between w-full",
                  isBlogCategoryActive
                    ? "text-primary font-bold"
                    : "hover:text-primary"
                )}
                onClick={() =>
                  setIsMobileBlogDropdownOpen(!isMobileBlogDropdownOpen)
                }
              >
                <span>Blog</span>
                {isMobileBlogDropdownOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {isMobileBlogDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700">
                  {blogCategories.map((category) => (
                    <Link
                      key={category.path}
                      href={category.path}
                      className={cn(
                        "block text-sm",
                        isActive(category.path)
                          ? "text-primary font-medium"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium",
                isActive("/about")
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact-form"
              className={cn(
                "text-sm font-medium",
                isActive("/#contact-form")
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#faq"
              className={cn(
                "text-sm font-medium",
                isActive("/#faq")
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>

            {user ? (
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <span className="text-sm">Hello, {user.name}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="rounded-custom"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="mt-2 rounded-custom"
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Login
              </Button>
            )}
          </nav>
        </motion.div>
      )}

      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </header>
  );
}
