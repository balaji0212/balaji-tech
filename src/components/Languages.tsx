
const Languages = () => {
  const languages = [
    { language: "English", level: "Professional" },
    { language: "Tamil", level: "Native" }
  ];

  return (
    <section id="languages" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Languages</span>
          </h2>
        </div>
        
        <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🗣️</span>
            </div>
            <h4 className="text-xl font-semibold text-white">Languages</h4>
          </div>
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center bg-slate-700/30 p-3 rounded-xl">
                <span className="text-gray-300">{lang.language}</span>
                <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm border border-teal-500/30">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
