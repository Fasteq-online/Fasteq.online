"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Fast, responsive spring physics for instant feel
  const springConfig = { damping: 28, stiffness: 450 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let rAF: number;

    const moveCursor = (e: MouseEvent) => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
      });
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

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHoverStart, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Outer Glass Lens Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.6 : 1,
          borderColor: isHovered ? "rgba(200, 125, 79, 0.95)" : "rgba(255, 255, 255, 0.25)",
          boxShadow: isHovered
            ? "0 0 25px rgba(200, 125, 79, 0.4), inset 0 0 15px rgba(200, 125, 79, 0.2)"
            : "0 0 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: isHovered ? "rgba(200, 125, 79, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
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
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#E08E5A" : "#C87D4F",
          boxShadow: isHovered ? "0 0 14px #C87D4F" : "none",
        }}
        transition={{ duration: 0.12 }}
        className="w-2 h-2 rounded-full fixed top-0 left-0"
      />
    </div>
  );
}
