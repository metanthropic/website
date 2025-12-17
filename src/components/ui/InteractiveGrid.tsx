'use client';

import { useEffect, useRef } from 'react';

interface InteractiveGridProps {
  className?: string;
}

export default function InteractiveGrid({ className = '' }: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
      }
    };

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 50;
      const glowRadius = 250;
      const baseOpacity = 0.05;
      const maxOpacity = 0.4;

      // --- SPEED ADJUSTMENT ---
      // Reduced from 0.1 to 0.08 (80% speed) for a heavier, smoother feel
      const ease = 0.08;

      mouseX += (targetX - mouseX) * ease;
      mouseY += (targetY - mouseY) * ease;

      ctx.lineWidth = 1;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = baseOpacity;
          if (distance < glowRadius) {
            const glowFactor = 1 - distance / glowRadius;
             opacity = baseOpacity + glowFactor * (maxOpacity - baseOpacity);
          }

          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 1);
          ctx.stroke();
        }
      }

      // Draw Crosshairs
      for (let x = 0; x <= canvas.width; x += gridSize) {
          for (let y = 0; y <= canvas.height; y += gridSize) {
            const dx = x - mouseX;
            const dy = y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < glowRadius) {
               const glowFactor = 1 - distance / glowRadius;
               const opacity = baseOpacity + glowFactor * (maxOpacity - baseOpacity);

               ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
               ctx.beginPath();
               ctx.arc(x, y, 1.5, 0, Math.PI * 2);
               ctx.fill();
            }
          }
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Initialize center
    targetX = window.innerWidth / 2;
    targetY = window.innerHeight / 2;
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
    />
  );
}
