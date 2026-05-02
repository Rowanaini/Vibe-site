import Hero from './Hero';

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* 第一屏：背景和名字 */}
      <Hero />

      {/* 第二屏：项目展示区 */}
      <section className="max-w-6xl mx-auto py-24 px-8">
        {/* 标题区 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">About Me</h2>
          <div className="h-1.5 w-12 bg-blue-600"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
          这里是你的介绍文字。当你在这里添加足够多的内容时，你的网页就可以上下滑动了！
          你可以试着多复制几行这个段落，看看滚动条是否出现了。
          </p>
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 卡片 1 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
            <div className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4">Machine Learning</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">AI Trend Predictor</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              使用神经网络分析社交媒体趋势，预测下一个爆火的 Vibe 风格。
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Python</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">PyTorch</span>
            </div>
          </div>

          {/* 卡片 2 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
            <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Data Visualization</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Health Tracker Pro</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              将复杂的健康数据转化为直观的 3D 图表，让数据触手可及。
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">D3.js</span>
            </div>
          </div>

           {/* 卡片 3 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
            <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Data Visualization</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Health Tracker Pro</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              将复杂的健康数据转化为直观的 3D 图表，让数据触手可及。
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">D3.js</span>
            </div>
          </div>

           {/* 卡片 4 */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
            <div className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-4">Data Visualization</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Health Tracker Pro</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              将复杂的健康数据转化为直观的 3D 图表，让数据触手可及。
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