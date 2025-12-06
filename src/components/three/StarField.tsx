"use client";

import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    const starCount = 800;
    const colors = ["#00d4ff", "#ff00d4", "#8b5cf6", "#ffffff", "#00ffff"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawStar = (star: Star) => {
      const x = (star.x / star.z) * 500 + canvas.width / 2;
      const y = (star.y / star.z) * 500 + canvas.height / 2;
      const size = (1 - star.z / 1000) * star.size * 3;
      const opacity = 1 - star.z / 1000;

      if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) return;

      ctx.beginPath();
      ctx.arc(x, y, Math.max(size, 0.5), 0, Math.PI * 2);
      
      // Create gradient for glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      gradient.addColorStop(0, star.color);
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = star.color;
      ctx.globalAlpha = opacity;
      ctx.fill();
      
      // Add glow
      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = opacity * 0.3;
      ctx.fill();
    };

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 26, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }
        drawStar(star);
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createStars();
    
    // Initial fill
    ctx.fillStyle = "#0a0a1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    animate();

    window.addEventListener("resize", () => {
      resize();
      createStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 bg-[#0a0a1a]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="cyber-spinner" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#0a0a1a" }}
      />
      {/* Aurora overlay */}
      <div className="aurora" />
      {/* Nebula effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[180px]" />
      </div>
    </div>
  );
}
