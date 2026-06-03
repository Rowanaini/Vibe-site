'use client';
import { useState, useEffect } from 'react';
import Hero from './Hero';

// ==========================================
// 1. 核心数据接口定义
// ==========================================
interface RefereeCard {
  id: string;
  name: string;
  title: string;
  avatar_url: string;
  content: string;
}

export default function Home() {
  const [isResumeActive, setIsResumeActive] = useState(false);
  
  // 🌟 新增：统一控制白天模式下展示 'cards' (主页作品集卡片) 还是 'referee' (动态推荐信区)
  const [activeTab, setActiveTab] = useState<'cards' | 'referee'>('cards');

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
        
        {/* 第一屏核心 (联动切页状态) */}
        <Hero 
          isResumeActive={isResumeActive} 
          setIsResumeActive={setIsResumeActive} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* 核心内容渲染区域 */}
        {isResumeActive ? (
          /* ================= 极客简历终端 ================= */
          <main className="max-w-5xl mx-auto px-8 pb-32 -mt-6 relative z-10">
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
          <div className="transition-all duration-500">
            
            {activeTab === 'cards' ? (
              /* 选项卡 A：原本的主页四张悬停弹图卡片 */
              <section className="max-w-6xl mx-auto py-24 px-8">
                {/* 欢迎语 */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-800 mb-8">Welcome</h2>
                  <div className="h-1.5 w-12 bg-blue-600 mb-6"></div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-2">
                    你好, 欢迎来到我的个人网站！我十分喜欢它，你会更多的了解我，试着向下滑动！
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
                      <img src="/kapian1.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
                    </div>
                    <div className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4">About me 阮哲炜 Rowan </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">"G'day, mate!</h3>
                    <p className="text-slate-500 leading-relaxed mb-6 whitespace-pre-line">
                      A postgraduate student at ANU, 25 years old from China, Chinese name means "the wise and great one". Loving Volunteer work :D, spicy food, road trip and photography, Happy for being a awesome assistant to everyone!
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
                      <img src="/kapian2.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
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
                      <img src="/kapian3.jpg" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
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
                      <img src="kapian5.png" alt="Preview" className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white" />
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

                {/* 底部作品集留白 */}
                <div className="mt-12 h-[500px] bg-blue-50 rounded-3xl border-2 border-dashed border-blue-200 flex items-center justify-center">
                  <span className="text-blue-400 font-medium">Loading new idea........</span>
                </div>
              </section>
            ) : (
              /* 🔮 选项卡 B：w1 极客美学作品集级别的 —— 全自动云端动态推荐信卡片区 */
              <RefereeSection />
            )}

          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 2. ⚡ 完美解耦的高级云端推荐信区块组件 (带全套毛玻璃及悬停动效)
// ==========================================
function RefereeSection() {
  const [referees, setReferees] = useState<RefereeCard[]>([]);
  const [loading, setLoading] = useState(true);

  // 挂载时抓取云端数据
  useEffect(() => {
    fetch('/api/referees')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReferees(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 自服务表单状态控制
  const [showAddModal, setShowAddModal] = useState(false);
  const [password, setPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('password', password);
    formData.append('name', newName);
    formData.append('title', newTitle);
    formData.append('content', newContent);
    if (avatarFile) formData.append('avatar', avatarFile);

    try {
      const response = await fetch('/api/referees', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        alert(result.error || '验证失败或网络错误');
      } else {
        alert('🎉 推荐信已上传！数据已实时同步至全网分布式数据库。');
        setReferees([result.data[0], ...referees]);
        setShowAddModal(false);
        setPassword('');
        setNewName('');
        setNewTitle('');
        setNewContent('');
        setAvatarFile(null);
      }
    } catch (err) {
      alert('网络连接异常');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-24 px-8">
      {/* 模块头部 */}
      <div className="flex justify-between items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Professional Referees</h2>
          <div className="h-1.5 w-12 bg-emerald-500"></div>
        </div>
        
        {/* 高级极客自服务按钮 */}
        <button 
          onClick={() => setShowAddModal(true)}
          className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl hover:bg-emerald-500 shadow-xl shadow-slate-950/20 active:scale-95 hover:scale-105 transition-all duration-300"
          title="导师自服务入口"
        >
          +
        </button>
      </div>

      {/* 状态加载层 */}
      {loading ? (
        <div className="text-center py-20">
          <div className="w-9 h-9 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400 font-mono text-xs tracking-wider">Connecting to decentralized cloud data...</p>
        </div>
      ) : referees.length === 0 ? (
        /* 唯美冷淡风的留白占位 */
        <div className="text-center py-24 bg-white/60 backdrop-blur-md rounded-3xl border border-slate-100 shadow-xl text-slate-400 text-sm font-light">
          暂无云端卡片。点击右上角加号邀请导师撰写第一封推荐信 ✍️
        </div>
      ) : (
        /* 🌟 高级卡片流布局 (完美复刻 1:1 左右混排与高级悬停) */
        <div className="space-y-10">
          {referees.map((ref) => (
            <div 
              key={ref.id} 
              className="flex flex-col md:flex-row bg-white/75 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_15px_40px_rgba(148,163,184,0.12)] hover:shadow-[0_25px_60px_rgba(148,163,184,0.25)] hover:-translate-y-1.5 transition-all duration-500 group relative"
            >
              {/* 左侧头像：高级等比缩放裁剪容器 */}
              <div className="w-full md:w-64 h-64 md:h-auto min-h-[240px] bg-slate-100 flex-shrink-0 relative overflow-hidden">
                <img 
                  src={ref.avatar_url} 
                  alt={ref.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>

              {/* 右侧评语区：1:1 完美拼色底噪与极简衬线字体排版 */}
              <div className="flex-1 p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-red-400/70 inline-block pb-1.5 leading-none">
                    {ref.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 mt-3 tracking-widest uppercase">
                    {ref.title}
                  </p>
                </div>
                {/* 意大利金叶风格的唯美引用格式 */}
                <p className="text-slate-600/90 leading-relaxed italic text-base font-light">
                  "{ref.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= 导师添加：高保真毛玻璃模态框 ================= */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl max-w-xl w-full p-8 shadow-[0_40px_100px_rgba(0,0,0,0.25)] overflow-y-auto max-h-[90vh]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-xl font-bold text-slate-800">✍️ Referee Self-Service Entry</h3>
                <p className="text-xs text-slate-400 mt-1">云数据库分布式凭证接入中心</p>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Access Password</label>
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all" placeholder="Enter security token" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Your Name</label>
                  <input required type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all" placeholder="e.g. Patric" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Your Title</label>
                  <input required type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all" placeholder="e.g. ANU Associate Professor" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Upload Portrait</label>
                <input required type="file" accept="image/*" onChange={(e) => setAvatarFile(e.target.files?.[0] || null)} className="w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-colors file:cursor-pointer" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Recommendation Letters</label>
                <textarea required rows={5} value={newContent} onChange={(e) => setNewContent(e.target.value)} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:border-emerald-500 focus:bg-white transition-all leading-relaxed" placeholder="Write recommendation here..." />
              </div>

              <div className="flex gap-4 justify-end pt-3 border-t border-slate-100">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-5 py-2 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors" disabled={submitting}>Cancel</button>
                <button type="submit" className="px-6 py-2 bg-slate-900 text-white hover:bg-emerald-500 text-sm rounded-xl font-semibold disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg active:scale-95" disabled={submitting}>
                  {submitting ? 'Transmitting...' : 'Confirm Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

// ==========================================
// 3. 🛠️ 终极防抖打字机组件
// ==========================================
function TypingLine({ text, delay }: { text: string; delay: number }) {
  const [visibleText, setVisibleText] = useState('');
  const [start, setStart] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setVisibleText((prev) => {
        if (prev.length < text.length) {
          return text.slice(0, prev.length + 1);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 12);

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