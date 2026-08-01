"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Velocity tracking for dynamic stretch/trail
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevPos = useRef({ x: -100, y: -100 });

  // Layered springs — outer ring lags behind for a fluid trail
  const fastSpring = { damping: 30, stiffness: 500 };
  const slowSpring = { damping: 22, stiffness: 180 };
  const trailSpring = { damping: 18, stiffness: 100 };

  const fastX = useSpring(cursorX, fastSpring);
  const fastY = useSpring(cursorY, fastSpring);

  const slowX = useSpring(cursorX, slowSpring);
  const slowY = useSpring(cursorY, slowSpring);

  const trailX = useSpring(cursorX, trailSpring);
  const trailY = useSpring(cursorY, trailSpring);

  // Velocity-based rotation for the ring
  const smoothVelX = useSpring(velocityX, { damping: 25, stiffness: 120 });
  const smoothVelY = useSpring(velocityY, { damping: 25, stiffness: 120 });

  const rotation = useTransform(
    [smoothVelX, smoothVelY],
    ([vx, vy]: number[]) => Math.atan2(vy, vx) * (180 / Math.PI)
  );

  // Velocity magnitude for skew/stretch
  const speed = useTransform(
    [smoothVelX, smoothVelY],
    ([vx, vy]: number[]) => Math.min(Math.sqrt(vx * vx + vy * vy), 60)
  );

  const ringScaleX = useTransform(speed, [0, 60], [1, 1.45]);
  const ringScaleY = useTransform(speed, [0, 60], [1, 0.7]);
  const trailOpacity = useTransform(speed, [0, 15, 60], [0, 0.15, 0.45]);

  const handleHoverCheck = useCallback((e: MouseEvent) => {
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
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let rAF: number;

    const moveCursor = (e: MouseEvent) => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        cursorX.set(clientX);
        cursorY.set(clientY);

        velocityX.set(clientX - prevPos.current.x);
        velocityY.set(clientY - prevPos.current.y);
        prevPos.current = { x: clientX, y: clientY };

        if (!isVisible) setIsVisible(true);
      });
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHoverCheck, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverCheck);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, velocityX, velocityY, isVisible, handleHoverCheck]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">

      {/* Layer 1 — Aurora Trail (slowest, fades with speed) */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: trailOpacity,
        }}
        className="w-24 h-24 rounded-full fixed top-0 left-0"
        animate={{
          background: isHovered
            ? "radial-gradient(circle, rgba(224,142,90,0.35) 0%, rgba(200,125,79,0.08) 55%, transparent 80%)"
            : "radial-gradient(circle, rgba(200,125,79,0.2) 0%, rgba(78,168,168,0.06) 55%, transparent 80%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Layer 2 — Morphing Ring (stretches with velocity) */}
      <motion.div
        style={{
          x: slowX,
          y: slowY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotation,
          scaleX: isHovered ? 2.2 : ringScaleX,
          scaleY: isHovered ? 2.2 : ringScaleY,
        }}
        animate={{
          borderColor: isHovered
            ? "rgba(200, 125, 79, 0.9)"
            : isClicking
            ? "rgba(78, 168, 168, 0.6)"
            : "rgba(248, 246, 243, 0.2)",
          boxShadow: isHovered
            ? "0 0 20px rgba(200,125,79,0.3), inset 0 0 12px rgba(200,125,79,0.1)"
            : isClicking
            ? "0 0 15px rgba(78,168,168,0.25)"
            : "none",
          backgroundColor: isHovered ? "rgba(200, 125, 79, 0.04)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-10 h-10 rounded-full border fixed top-0 left-0"
      />

      {/* Layer 3 — Precision Dot Core (instant tracking) */}
      <motion.div
        style={{
          x: fastX,
          y: fastY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovered ? 0 : 1,
          backgroundColor: isClicking ? "#4EA8A8" : "#C87D4F",
          boxShadow: isClicking
            ? "0 0 10px rgba(78,168,168,0.6)"
            : "0 0 6px rgba(200,125,79,0.4)",
        }}
        transition={{ duration: 0.1 }}
        className="w-1.5 h-1.5 rounded-full fixed top-0 left-0"
      />

      {/* Layer 4 — Crosshair Ticks (visible on hover) */}
      <motion.div
        style={{
          x: slowX,
          y: slowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.6,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="w-10 h-10 fixed top-0 left-0"
      >
        {/* Top tick */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-[#C87D4F]/70 rounded-full" />
        {/* Bottom tick */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-[#C87D4F]/70 rounded-full" />
        {/* Left tick */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-[#C87D4F]/70 rounded-full" />
        {/* Right tick */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-[#C87D4F]/70 rounded-full" />
      </motion.div>
    </div>
  );
}
