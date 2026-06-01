'use client';
import { useState, useEffect } from 'react';
import Hero from './Hero';

export default function Home() {
  const [isResumeActive, setIsResumeActive] = useState(false);

  // 100% 完美平移你的英文简历核心数据
  const resumeLines = [
    "> SYSTEM: INITIALIZING RUAN_ZHENWEI_CORE_RESOURCES...",
    "> LOCATION: Canberra / Melbourne, Australia",
    "> ",
    "> [ACADEMIC_CREDENTIALS]",
    "> - THE AUSTRALIAN NATIONAL UNIVERSITY | Master of International Management (2025 - 2026)",
    ">   Specialization: Advanced Financial Accounting, Financial Modelling, Evidence based-management",
    "> - WESTERN UNIVERSITY (Canada) | Bachelor of Management & Organizational Studies (Accounting, 2020 - 2024)",
    "> ",
    "> [ENTERPRISE_EXPERIENCE_LOGS]",
    "> - NIO | Sales Consultant Intern (Oct 2024 - Jan 2025)",
    ">   * Built Power BI & Feishu dashboards for customer insight & store-level strategy analysis.",
    ">   * Maintained daily task workflows, successfully optimizing processing time by 20%-30%.",
    "> - EASYTRANSFER | Marketing Operations Intern (Apr 2022 - Sep 2022)",
    ">   * Monitored 10+ core user metrics; audited database completeness via Feishu tracking.",
    "> ",
    "> [LEADERSHIP_&_INITIATIVES]",
    "> - AUSTRALIAN UNIVERSITY VOLUNTEERS (AUV) | Co-Founder (Aug 2025 - Present)",
    ">   * Completed organization setup & registration within 1 month with a 3-person team.",
    ">   * Spearheaded social media growth, achieving 70,000+ views on a single milestone post.",
    ">   * Delivered massive student events scaling up to 300+ participants per session.",
    "> ",
    "> [TECHNICAL_SKILLS_MATRIX]",
    "> - DATA ARCHITECTURE: Power BI, Advanced Excel (VLOOKUP)",
    "> - CORE APPLICATIONS: Next.js, Vercel Deployment, AI-Automated Workflows, Case Analysis",
    "> - LANGUAGES: Mandarin (Native), English (Fluent / Professional Working Proficiency)",
    "> ",
    "> STATUS: SCANNING FOR ELITE FRONT-END ASSISTANT & ANALYST ROLES...",
    "> TERMINAL EXECUTION COMPLETE. PRESS CLOSE TERMINAL TO EXIT."
  ];

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isResumeActive ? 'bg-black text-emerald-400' : 'bg-[#F8FAFC] text-slate-800'}`}>
      
      {/* 虚拟环境氛围聚光灯 */}
      {isResumeActive && (
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,rgba(0,0,0)_60%)] animate-pulse" />
      )}

      <div className="relative">
        
        {/* 第一屏核心 */}
        <Hero isResumeActive={isResumeActive} setIsResumeActive={setIsResumeActive} />

        {/* 核心内容渲染区域 */}
        {isResumeActive ? (
          /* ================= 极客简历终端 ================= */
          <main className="max-w-5xl mx-auto px-8 pb-32 -mt-6 relative z-10 animate-fade-in">
            <div className="font-mono bg-zinc-950/90 border border-emerald-900/40 rounded-3xl p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-md min-h-[500px]">
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-900 pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="text-xs text-zinc-500 font-mono ml-2">rowan_resume_sh</span>
              </div>

              <div className="space-y-3 text-xs md:text-sm leading-relaxed font-mono text-emerald-400/90">
                {resumeLines.map((line, index) => (
                  <TypingLine key={index} text={line} delay={index * 250} />
                ))}
              </div>
            </div>
          </main>
        ) : (
          /* ================= 白天模式 ================= */
          <section className="max-w-6xl mx-auto py-24 px-8 transition-opacity duration-500">
            {/* 欢迎语 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Welcome</h2>
              <div className="h-1.5 w-12 bg-blue-600 mb-6"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-2">
                你好, 欢迎来到我的个人网站！我十分喜欢它，你会更多的了解我，试着向下滑动hhh！
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Hello, This is Rowan and welcome to my personal website! I really like it. You will get to know more about me. Please scroll down!
              </p>
            </div>

            {/* 四张精美悬停弹图卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 卡片 1 - 关于我 */}
              <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
                  <img src="/test.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
                </div>
                <div className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4">About me 阮哲炜 Rowan </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">"G'day, mate!</h3>
                <p className="text-slate-500 leading-relaxed mb-6 whitespace-pre-line">
                  a postgraduate student at ANU, 25 years old from China, Chinese name means "the wise and great one". Loving spicy food, road trip and photography, being a awesome assistant is what i want to be.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Creative</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Connecting</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Confidence</span>
                </div>
              </div>

              {/* 卡片 2 - 教育 */}
              <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
                  <img src="/test.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
                </div>
                <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">My Education 教育背景</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Australian National University</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Master Of International Management, 2025-2027</p>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">University Of Western Ontario</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Bachelor Of Accounting, 2020-2024</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">PowerBI</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Marketing</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Credit/Debit</span>
                </div>
              </div>

              {/* 卡片 3 - 经历 */}
              <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
                  <img src="/test.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
                </div>
                <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Work Experience 工作经历</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">NIO | Sales Consultant Intern</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Oct 2024 - Jan 2025</p>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">EasyTransfer | Marketing Intern</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Apr 2022 - Sep 2022</p>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Self Service Internship | Volunteer club founder</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Aug 2025 - Present</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Public relationship</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Marketing</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Event organizer</span>
                </div>
              </div>

              {/* 卡片 4 - 技能 */}
              <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
                  <img src="/test.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
                </div>
                <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Skills 技能</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">PowerBI | Excel</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Transform complex excel data into intuitive 3D charts within one day,</p>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Connection</h3>
                <p className="text-slate-500 leading-relaxed mb-6">Experienced in customer communication, volunteer coordination, external outreach, and cross-organizational collaboration.</p>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">AI utilization | Web deployment, Application design</h3>
                <p className="text-slate-500 leading-relaxed mb-6">0$ cost operating website and application by using VS code, next.js, Vercel and my hand typing.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">D3.js</span>
                </div>
              </div>

            </div>
            
            <div className="mt-12 h-[500px] bg-blue-50 rounded-3xl border-2 border-dashed border-blue-200 flex items-center justify-center">
              <span className="text-blue-400 font-medium">这里可以放你的项目作品集</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// 🛠️ 终极无后顾之忧的打字机组件：基于长度截取字符串，完美规避 StrictMode 的干扰
function TypingLine({ text, delay }: { text: string; delay: number }) {
  const [visibleText, setVisibleText] = useState('');
  const [start, setStart] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    // 🌟 核心改动：不再使用外部累加的临时变量 index！
    const interval = setInterval(() => {
      setVisibleText((prev) => {
        // 直接读取当前已经渲染出来的文本长度，作为截取的下一个坐标
        if (prev.length < text.length) {
          return text.slice(0, prev.length + 1);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 12); // 维持你最满意的 12ms 吐字速度

    return () => clearInterval(interval);
  }, [start, text]);

  if (!start) return null;

  return (
    <p className="font-mono min-h-[1.5rem] break-all tracking-wide">
      {visibleText}
      {visibleText.length < text.length && (
        <span className="bg-emerald-400 h-3.5 w-1.5 inline-block ml-0.5 animate-pulse">|</span>
      )}
    </p>
  );
}