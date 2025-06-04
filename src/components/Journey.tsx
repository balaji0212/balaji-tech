
const Journey = () => {
  return (
    <section id="journey" className="py-20 px-4 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
        </div>
        
        <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">My Journey</h3>
          </div>
          <p className="leading-relaxed mb-6 text-gray-300 text-justify">My fascination with technology began early, sparked by a curiosity for how things work. This led me to pursue Electronics and Communication Engineering, where I discovered my passion for embedded systems and hardware design. I thrived on turning theoretical concepts into real-world applications, from IoT devices to fault-tolerant computing architectures.</p>
          <p className="text-gray-300 leading-relaxed text-base text-justify">As I deepened my knowledge, I ventured into AI and machine learning, developing systems like real-time emotion recognition using deep learning. Each project taught me the power of interdisciplinary thinking—blending hardware efficiency with software intelligence. Today, I stand at the intersection of innovation and practicality, driven by challenges that demand creative problem-solving.</p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
