
const Interests = () => {
  const interests = ["Artificial Intelligence", "Deep Learning", "Computer Vision", "IoT-Based Automation", "Smart Energy Systems", "Hardware–Software Integration", "Real-Time AI Applications"];

  return (
    <section id="interests" className="py-20 px-4 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Key <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Interests</span>
          </h2>
        </div>
        
        <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">💡</span>
            </div>
            <h4 className="text-xl font-semibold text-white">Key Interests</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span key={index} className="group bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 px-4 py-2 rounded-xl text-sm border border-teal-500/30 hover:from-teal-500/30 hover:to-blue-500/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
