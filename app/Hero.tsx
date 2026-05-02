"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let animationFrameId: number;
    let mouse = { x: -100, y: -100 };

    class Particle {
      x: number; y: number; vx: number; vy: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 100 }, () => new Particle());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.15)'; 
      ctx.fillStyle = 'rgba(100, 116, 139, 0.3)';

      particles.forEach((p, i) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.lineWidth = 1 - dist / 150;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mDist < 200) {
          ctx.strokeStyle = `rgba(59, 130, 246, ${1 - mDist / 200})`; 
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    init();
    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#F8FAFC]">
      <NeuralNetworkBackground />

      <div className="z-10 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 mb-4 uppercase">
            Rowan Ruan
          </h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6" /> 
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-slate-500 font-medium tracking-widest uppercase"
        >
          Project Leader • AI Enthusiast
        </motion.p>
      </div>

      <nav className="absolute bottom-12 z-20 w-[90%] max-w-5xl px-8 py-5 bg-white/40 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-sm flex justify-around items-center">
        {['Home', 'Projects', 'Resume'].map((item) => (
          <a key={item} href="#" className="text-xs font-bold tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-all uppercase">
            {item}
          </a>
        ))}
      </nav>
    </section>
  );
}