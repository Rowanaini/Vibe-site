"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkBackground = ({ isDark }: { isDark: boolean }) => {
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
      ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.05)' : 'rgba(100, 116, 139, 0.15)'; 
      ctx.fillStyle = isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(100, 116, 139, 0.3)';

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
          ctx.strokeStyle = isDark 
            ? `rgba(16, 185, 129, ${1 - mDist / 200})`
            : `rgba(59, 130, 246, ${1 - mDist / 200})`; 
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', handleMouseMove);
    init();
    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

// 🌟 核心改动 1：在属性里无缝注入白天模式下的切页控制状态
interface HeroProps {
  isResumeActive: boolean;
  setIsResumeActive: (active: boolean) => void;
  activeTab: 'cards' | 'referee';
  setActiveTab: (tab: 'cards' | 'referee') => void;
}

export default function Hero({ 
  isResumeActive, 
  setIsResumeActive,
  activeTab,
  setActiveTab
}: HeroProps) {
  return (
    <section className={`relative min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-1000 ${isResumeActive ? 'bg-black' : 'bg-[#F8FAFC]'}`}>
      <NeuralNetworkBackground isDark={isResumeActive} />

      <div className="z-10 text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-8xl font-black tracking-tighter mb-4 uppercase transition-colors duration-1000 ${isResumeActive ? 'text-emerald-500' : 'text-slate-900'}`}>
            Rowan Ruan
          </h1>
          <div className={`h-1 w-20 mx-auto mb-6 transition-colors duration-1000 ${isResumeActive ? 'bg-emerald-500' : 'bg-blue-500'}`} /> 
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`text-lg md:text-xl font-medium tracking-widest uppercase transition-colors duration-1000 ${isResumeActive ? 'text-emerald-600/80' : 'text-slate-500'}`}
        >
          Project Leader • AI Enthusiast
        </motion.p>
      </div>

      {/* 🌟 核心改动 2：100% 保留你原本的大胶囊导航栏的所有毛玻璃样式、阴影、位置和尺寸 */}
      <nav className={`absolute bottom-12 z-20 w-[95%] max-w-5xl px-8 py-5 rounded-2xl border transition-all duration-700 flex justify-around items-center backdrop-blur-xl ${
        isResumeActive 
          ? 'bg-zinc-950/40 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
          : 'bg-white/40 border-slate-200/50 shadow-sm'
      }`}>
        
        {/* Project 按钮：切换到主页卡片流 */}
        <button 
          onClick={() => setActiveTab('cards')}
          disabled={isResumeActive}
          className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
            isResumeActive 
              ? 'text-zinc-600 pointer-events-none' 
              : activeTab === 'cards'
                ? 'text-blue-600 font-extrabold'
                : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          Project
        </button>

        {/* Referee 按钮：点击顺畅滑入云端推荐信板块 */}
        <button 
          onClick={() => setActiveTab('referee')}
          disabled={isResumeActive}
          className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
            isResumeActive 
              ? 'text-zinc-600 pointer-events-none' 
              : activeTab === 'referee'
                ? 'text-emerald-600 font-extrabold'
                : 'text-slate-600 hover:text-emerald-600'
          }`}
        >
          Referee
        </button>

        {/* 🌟 完美适配白天和黑夜极客模式的下载选项 */}
        <a 
          href="/Rowan_Ruan_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
            isResumeActive 
              ? 'text-emerald-500/80 hover:text-emerald-400 font-mono' 
              : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          {isResumeActive ? '> [GET_PDF]' : 'Download CV'}
        </a>

        {/* 极客黑夜大闸开关 */}
        <button 
          onClick={() => setIsResumeActive(!isResumeActive)}
          className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
            isResumeActive 
              ? 'text-emerald-400 font-mono scale-115 border-b border-emerald-500 pb-0.5' 
              : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          {isResumeActive ? '✕ Close Terminal' : 'Resume Magic'}
        </button>
      </nav>
    </section>
  );
}