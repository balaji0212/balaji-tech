
const Certifications = () => {
  const certifications = [
    "Python Programming",
    "PLC Design", 
    "Forage Simulations (Deloitte Analytics, Software Engineering, Quantitative Research, GenAI)"
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
        </div>
        
        <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🏆</span>
            </div>
            <h4 className="text-xl font-semibold text-white">Certifications</h4>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/30 p-3 rounded-xl border border-slate-600/50 hover:border-orange-500/30 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
