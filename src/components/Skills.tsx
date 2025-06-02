
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Verilog HDL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      title: "Web & Backend",
      skills: ["PHP", "MySQL", "Django"],
      color: "from-green-500 to-emerald-500",
      icon: "🌐"
    },
    {
      title: "Embedded & IoT",
      skills: ["ESP32", "PIR Sensors", "I2C LCD", "Relays"],
      color: "from-purple-500 to-pink-500",
      icon: "⚡"
    },
    {
      title: "AI & Machine Learning",
      skills: ["OpenCV", "CNN", "FER2013 dataset"],
      color: "from-orange-500 to-red-500",
      icon: "🧠"
    },
    {
      title: "Tools & Platforms",
      skills: ["Vivado", "Git", "Ubidots", "InfluxDB"],
      color: "from-teal-500 to-blue-500",
      icon: "🛠️"
    },
    {
      title: "Domain Expertise",
      skills: ["IoT Automation", "Smart Energy", "Network Monitoring", "PLC Design"],
      color: "from-indigo-500 to-purple-500",
      icon: "🎯"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            My Technical Arsenal
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400">
            Expertise across multiple domains of engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-slate-700/50 backdrop-blur-sm text-gray-300 px-4 py-3 rounded-xl text-sm hover:bg-teal-500/20 hover:text-teal-300 hover:scale-[1.02] transition-all duration-200 border border-slate-600/50 hover:border-teal-500/30"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full opacity-60"></div>
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
