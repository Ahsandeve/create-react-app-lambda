"use client";
import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className=" fixed top-16 left-0 w-full h-1 bg-transparent z-[9] ">
      <div
        // className="h-full bg-orange-500 transition-all duration-150 ease-out"
        className="h-full bg-blue-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
