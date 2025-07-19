
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Verilog HDL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💻",
      level: 90,
      description: "Core programming and hardware description languages"
    },
    {
      title: "ML/AI Tools",
      skills: ["Scikit-learn", "NumPy", "Pandas", "OpenCV", "CNN", "TensorFlow", "PyTorch"],
      color: "from-orange-500 to-red-500",
      icon: "🧠",
      level: 89,
      description: "Machine learning and artificial intelligence frameworks"
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "InfluxDB", "Vector DBs (familiar)"],
      color: "from-green-500 to-emerald-500",
      icon: "🗄️",
      level: 85,
      description: "Database management and data storage solutions"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker (learning)", "Android Studio", "Vivado", "Tableau", "Excel", "Linux CLI", "AWS (familiar)", "GCP (familiar)"],
      color: "from-teal-500 to-blue-500",
      icon: "🛠️",
      level: 88,
      description: "Development tools and cloud platforms"
    },
    {
      title: "Concepts",
      skills: ["Feature Engineering", "Data Preprocessing", "ML Lifecycle", "Model Training", "Model Deployment", "Computer Vision", "NLP", "REST APIs", "Unit Testing (basic)", "Data Structures & Algorithms", "MLOps (familiar)"],
      color: "from-purple-500 to-pink-500",
      icon: "🎯",
      level: 92,
      description: "Advanced concepts and methodologies"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-400/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md mb-8">
            <div className="relative">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold">Advanced Technical Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge proficiency across multiple domains of modern engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Advanced background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Skill level indicator */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 relative">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(148, 163, 184, 0.3)"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${category.level}, 100`}
                      className="transition-all duration-1000 ease-out"
                      style={{ 
                        strokeDasharray: hoveredSkill === index ? `${category.level}, 100` : '0, 100'
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-teal-400">{category.level}%</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative bg-slate-700/60 backdrop-blur-sm text-gray-300 px-4 py-3 rounded-xl text-sm hover:bg-teal-500/20 hover:text-teal-300 hover:scale-[1.02] transition-all duration-300 border border-slate-600/50 hover:border-teal-500/40 overflow-hidden group/skill"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-teal-400/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-2 h-2 bg-teal-400 rounded-full opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                        <span className="font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Technology Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "4+", icon: "🚀" },
            { label: "Major Projects", value: "4+", icon: "💡" },
            { label: "Technologies", value: "25+", icon: "⚡" },
            { label: "AI Model Accuracy", value: "89%", icon: "🎯" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl font-bold text-teal-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
