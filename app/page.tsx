import Hero from './Hero';

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* 第一屏：背景和名字 */}
      <Hero />

      {/* 第二屏：项目展示区 */}
      <section className="max-w-6xl mx-auto py-24 px-8">
        {/* 标题区请雇用我，请雇用我，请雇用我，请雇用我啊啊啊啊啊啊 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Welcome</h2>
          <div className="h-1.5 w-12 bg-blue-600"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
          你好, 欢迎来到我的个人网站！我十分喜欢它，你会更多的了解我，试着向下滑动吧！
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
          Hello,This is Rowan and welcome to my personal website! I really like it. You will get to know more about me. Please scroll down!
          </p>
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
{/* 卡片 1 */}
<div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
  
  {/* 悬停弹出的照片 - 关键代码开始 */}
  <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
    <img 
      src="/test.jpg" 
      alt="Preview" 
      className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
    />
  </div>
  {/* 关键代码结束 */}

  <div className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4">
    About me 阮哲炜
  </div>
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

          {/* 卡片 2 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
             <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
    <img 
      src="/test.jpg" 
      alt="Preview" 
      className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
    />
  </div>
            <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">My Education 教育背景</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Australian National University</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Master Of International Management, 2025-2027 
            </p>
             <h3 className="text-2xl font-bold text-slate-800 mb-3">University Of Western Ontario</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Bachelor Of Accounting, 2020-2024
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">PowerBI</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Marketing</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Credit/Debit</span>
            </div>
          </div>

           {/* 卡片 3 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
    <img 
      src="/test.jpg" 
      alt="Preview" 
      className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
    />
  </div>
            <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Work Experience 工作经历</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">NIO | Sales Consultant Intern</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Oct 2024 - Jan 2025
            </p>
                         <h3 className="text-2xl font-bold text-slate-800 mb-3">EasyTransfer | Marketing  Intern</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Apr 2022 - Sep 2022
            </p>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Self Service Internship | Volunteer club founder</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Aug 2025 - Present
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Public relationship</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Marketing</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Event organizer</span>
            </div>
          </div>

           {/* 卡片 4 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-6 -top-20 right-10 w-48 h-32 transition-all duration-500 pointer-events-none z-50">
          <img 
           src="/test.jpg" 
          alt="Preview" 
           className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
            />
           </div>
            <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Skills 技能</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">PowerBI | Excel</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Transform complex excel data into intuitive 3D charts within one day,
            </p>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Connection</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Experienced in customer communication, volunteer coordination, external outreach, and cross-organizational collaboration.
            </p>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">AI utilization | Web deployment, Application design</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              0$ cost operating website and application by using VS code, next.js, Vercel and my hand typing.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">D3.js</span>
            </div>
          </div>
          
          <div className="mt-12 h-[500px] bg-blue-50 rounded-3xl border-2 border-dashed border-blue-200 flex items-center justify-center">
          <span className="text-blue-400 font-medium">这里可以放你的项目作品集</span>
        </div>

        </div>
      </section>
    </main> 
  );
}