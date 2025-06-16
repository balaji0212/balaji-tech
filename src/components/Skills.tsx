
import { useState } from "react";
import { Atom, Brain, Circuit, Zap, Shield, Cpu, Database, Globe, Waves, Binary } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Quantum & Neural Computing",
      skills: ["Quantum Algorithms", "Neural Networks", "Tensor Processing", "Quantum ML"],
      color: "from-violet-500 to-purple-500",
      icon: <Atom className="w-8 h-8 animate-spin" />,
      level: 95,
      description: "Next-generation quantum computing and neural network architectures",
      techLevel: "Cutting-Edge"
    },
    {
      title: "Advanced Programming & HDL",
      skills: ["Python", "C/C++", "Verilog HDL", "SystemVerilog", "CUDA", "OpenCL"],
      color: "from-blue-500 to-cyan-500",
      icon: <Binary className="w-8 h-8" />,
      level: 92,
      description: "High-performance computing with parallel processing capabilities",
      techLevel: "Expert"
    },
    {
      title: "Neuromorphic & Edge AI",
      skills: ["Edge Computing", "Neuromorphic Chips", "Real-time AI", "TinyML"],
      color: "from-green-500 to-emerald-500",
      icon: <Brain className="w-8 h-8 animate-pulse" />,
      level: 90,
      description: "Brain-inspired computing and ultra-low power AI systems",
      techLevel: "Revolutionary"
    },
    {
      title: "Embedded & IoT Ecosystems",
      skills: ["ESP32", "RISC-V", "LoRaWAN", "6G Protocols", "Digital Twins"],
      color: "from-orange-500 to-red-500",
      icon: <Circuit className="w-8 h-8" />,
      level: 94,
      description: "Next-gen IoT with 6G connectivity and digital twin technology",
      techLevel: "Future-Ready"
    },
    {
      title: "AI & Deep Learning",
      skills: ["Transformer Models", "GANs", "Reinforcement Learning", "Computer Vision"],
      color: "from-purple-500 to-pink-500",
      icon: <Waves className="w-8 h-8" />,
      level: 89,
      description: "Advanced AI architectures and autonomous learning systems",
      techLevel: "Advanced"
    },
    {
      title: "Quantum Security & Blockchain",
      skills: ["Post-Quantum Cryptography", "Quantum Key Distribution", "Blockchain", "Zero-Knowledge Proofs"],
      color: "from-teal-500 to-blue-500",
      icon: <Shield className="w-8 h-8" />,
      level: 87,
      description: "Quantum-resistant security and decentralized systems",
      techLevel: "Quantum-Safe"
    },
    {
      title: "Development & DevOps",
      skills: ["Kubernetes", "Docker", "CI/CD", "MLOps", "Cloud Native"],
      color: "from-indigo-500 to-purple-500",
      icon: <Database className="w-8 h-8" />,
      level: 88,
      description: "Cloud-native development and AI/ML operations",
      techLevel: "Professional"
    },
    {
      title: "Emerging Technologies",
      skills: ["Metaverse", "AR/VR", "Digital Twins", "Web3", "Spatial Computing"],
      color: "from-pink-500 to-rose-500",
      icon: <Globe className="w-8 h-8" />,
      level: 85,
      description: "Immersive technologies and spatial computing platforms",
      techLevel: "Experimental"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30 relative overflow-hidden">
      {/* Advanced Quantum Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Quantum field visualization */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2306b6d4' stroke-width='1' opacity='0.3'%3E%3Cpath d='M10,50 Q30,20 50,50 T90,50' /%3E%3Cpath d='M50,10 Q80,30 50,50 T50,90' /%3E%3Ccircle cx='50' cy='50' r='2' fill='%2306b6d4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="2"
                fill="url(#neuralGlow)"
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass-morphism border border-purple-400/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-teal-400/10 to-blue-400/10 tech-scan"></div>
            <div className="relative flex items-center gap-3">
              <Cpu className="w-4 h-4 animate-pulse" />
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold relative z-10">Advanced Technological Arsenal</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-glow">
            Technical <span className="text-tech">Mastery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto glass-morphism p-6 rounded-xl border border-slate-700/50">
            Cutting-edge proficiency across quantum computing, neural networks, and next-generation technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative glass-morphism p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Advanced background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Tech level indicator */}
              <div className="absolute top-3 right-3">
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
                      stroke="url(#techGradient)"
                      strokeWidth="2"
                      strokeDasharray={`${category.level}, 100`}
                      className="transition-all duration-1000 ease-out pulse-glow"
                      style={{ 
                        strokeDasharray: hoveredSkill === index ? `${category.level}, 100` : '0, 100'
                      }}
                    />
                    <defs>
                      <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
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
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-glow`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-xs text-teal-400 font-semibold glass-morphism px-2 py-1 rounded-full border border-teal-500/20">
                        {category.techLevel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-2 text-glow">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative glass-morphism text-gray-300 px-3 py-2 rounded-xl text-xs hover:bg-teal-500/20 hover:text-teal-300 hover:scale-[1.02] transition-all duration-300 border border-slate-600/50 hover:border-teal-500/40 overflow-hidden group/skill"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700 data-flow"></div>
                      <div className="flex items-center gap-2 relative z-10">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        <span className="font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Quantum Technology Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Quantum Years", value: "4+", icon: <Atom className="w-6 h-6 animate-spin" />, color: "text-purple-400" },
            { label: "Neural Models", value: "15+", icon: <Brain className="w-6 h-6 animate-pulse" />, color: "text-blue-400" },
            { label: "Tech Domains", value: "8", icon: <Circuit className="w-6 h-6" />, color: "text-teal-400" },
            { label: "AI Precision", value: "95%", icon: <Zap className="w-6 h-6" />, color: "text-green-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 glass-morphism rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tech-scan"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <div className={`${stat.color}`}>{stat.icon}</div>
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1 text-glow`}>{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
