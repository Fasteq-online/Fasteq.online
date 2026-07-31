"use client";

import React, { useEffect, useRef } from "react";

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use devicePixelRatio-aware sizing but render at 1x for perf
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animId: number;
    let particles: Particle[] = [];
    // Cap at 45 particles — half of before — still looks great, way less GPU
    const maxParticles = Math.min(45, Math.floor((width * height) / 28000));
    let mouse = { x: width / 2, y: height / 2, active: false };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.8;
        this.color = Math.random() > 0.35 ? "rgba(13, 46, 47, 0.2)" : "rgba(200, 125, 79, 0.35)";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = dx * dx + dy * dy; // skip sqrt
          const radiusSq = 180 * 180;
          if (dist < radiusSq) {
            const d = Math.sqrt(dist);
            const force = (180 - d) / 180;
            this.x -= (dx / d) * force * 0.5;
            this.y -= (dy / d) * force * 0.5;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // No per-frame grid drawing — removed for perf

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.update();
        p.draw();

        // Only check next few particles for connections, not ALL
        const end = Math.min(i + 8, len);
        for (let j = i + 1; j < end; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 16900) { // 130^2
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200, 125, 79, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    init();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-5 opacity-60"
    />
  );
};

export default HeroCanvas;