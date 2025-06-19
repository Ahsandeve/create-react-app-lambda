"use client";
import { clear } from "console";
import React, { useEffect, useRef, useState } from "react";

function isMobileDevice() {
  if (typeof window === "undefined") return false;
  
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const MouseFollower: React.FC = () => {
  const [transform, setTransform] = useState("");
  if (isMobileDevice()) return null; // <-- Add this line to disable on mobile
  
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    const speed = 0.25;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    const tick = () => {
      // MOVE
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
      setTransform(translateTransform);
      
      window.requestAnimationFrame(tick);
    };
    
    tick();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Fixed size value (previously --circle-size: 40px)
  const size = 24;


  return (
    <>
      {/* dot */}
      <div
        className="bg-primary dark:bg-primary-foreground "
        ref={dotRef}
        style={{
          width: `${size /3}px`,
          height: `${size / 3}px`,
          top: `${-size / 6}px`,
          left: `${-size / 6}px`,
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.2s ease-out",
          transform: `${transform}`,
          transformOrigin: "center",
        }}
      />
      {/* circle */}
      <div
        className=" border-2 border-primary dark:border-primary-foreground"
        ref={circleRef}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${-size / 2}px`,
          left: `${-size / 2}px`,
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.4s ease-out",
          transform: `${transform}`,
        }}
      />
    </>
  );
};

export default MouseFollower;
