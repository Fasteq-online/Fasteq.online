"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth physics spring for organic movement
  const springConfig = { damping: 24, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Outer Glass Ring — Spring Zoom Lens Effect */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          borderColor: isHovered ? "rgba(200, 125, 79, 0.9)" : "rgba(255, 255, 255, 0.25)",
          boxShadow: isHovered
            ? "0 0 25px rgba(200, 125, 79, 0.35), inset 0 0 15px rgba(200, 125, 79, 0.15)"
            : "0 0 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: isHovered ? "rgba(200, 125, 79, 0.04)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-10 h-10 rounded-full border-2 fixed top-0 left-0"
      />

      {/* Inner Precision Core */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? "#E08E5A" : "#C87D4F",
          boxShadow: isHovered ? "0 0 12px #C87D4F" : "none",
        }}
        transition={{ duration: 0.15 }}
        className="w-2 h-2 rounded-full fixed top-0 left-0"
      />
    </div>
  );
}
