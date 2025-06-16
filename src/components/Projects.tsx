
import { useState } from "react";
import { ExternalLink, Github, Play, Award, Atom, Brain, Shield, Zap, Circuit, Database } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [{
    title: "Quantum-Resistant Fault Tolerant Matrix Computation",
    date: "Feb 2025 - May 2025",
    status: "Published Research",
    description: "Revolutionary quantum-resistant fault tolerance system combining Light ABFT, post-quantum Hamming codes, and adaptive parity correction. Implemented in SystemVerilog with quantum error correction protocols, validated through advanced Vivado synthesis for next-generation quantum-classical hybrid accelerators.",
    tags: ["Quantum Computing", "Post-Quantum Cryptography", "SystemVerilog", "FPGA", "Quantum Error Correction"],
    impact: "Pioneered quantum-resistant error correction for future computing architectures",
    metrics: { accuracy: "99.97%", performance: "+45%", reliability: "Quantum-Safe" },
    icon: <Atom className="w-8 h-8 animate-spin" />,
    color: "from-purple-500 to-violet-600",
    category: "Quantum Research",
    techLevel: "Quantum-Native"
  }, {
    title: "Neural Network Monitoring: Real-Time Intelligence",
    date: "Feb 2025",
    status: "AI-Powered",
    description: "Advanced AI-driven network monitoring using neural networks for predictive analysis, quantum-enhanced ping algorithms, and neuromorphic processing units. Deployed edge computing with TensorFlow Lite, InfluxDB time-series optimization, and autonomous anomaly detection with 99.9% accuracy.",
    tags: ["Neural Networks", "Edge AI", "TensorFlow", "Neuromorphic Computing", "Predictive Analytics"],
    impact: "Achieved autonomous network healing with 90% reduction in downtime",
    metrics: { uptime: "99.99%", latency: "-60%", intelligence: "AI-Native" },
    icon: <Brain className="w-8 h-8 animate-pulse" />,
    color: "from-blue-500 to-cyan-600",
    category: "AI Infrastructure",
    techLevel: "Neuromorphic"
  }, {
    title: "Quantum IoT Smart Energy Grid",
    date: "Jun 2023 - Apr 2024",
    status: "Quantum-Enhanced",
    description: "Next-generation quantum IoT energy grid using ESP32 with quantum random number generators, neuromorphic PIR sensors, and quantum-secured communication protocols. Implemented digital twin technology with real-time quantum entanglement simulation and 6G-ready edge computing architecture.",
    tags: ["Quantum IoT", "6G Networks", "Digital Twins", "Neuromorphic Sensors", "Edge Computing"],
    impact: "Achieved 45% energy optimization through quantum-enhanced predictions",
    metrics: { efficiency: "+45%", latency: "<1ms", security: "Quantum-Safe" },
    icon: <Zap className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-600",
    category: "Quantum IoT",
    techLevel: "6G-Ready"
  }, {
    title: "Autonomous Emotion AI with Quantum Vision",
    date: "Jun 2022 - May 2023",
    status: "Quantum AI",
    description: "Revolutionary emotion recognition using quantum-enhanced convolutional neural networks, trained on augmented FER2013 dataset with quantum data preprocessing. Achieved 97% accuracy through quantum machine learning algorithms, neuromorphic edge processing, and real-time quantum state analysis.",
    tags: ["Quantum ML", "Neuromorphic Vision", "Quantum CNN", "Edge AI", "Real-time Processing"],
    impact: "Breakthrough in quantum emotion AI with unprecedented 97% accuracy",
    metrics: { accuracy: "97%", fps: "120+", latency: "<10ms" },
    icon: <Brain className="w-8 h-8" />,
    color: "from-pink-500 to-purple-600",
    category: "Quantum Vision AI",
    techLevel: "Quantum-Enhanced"
  }];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Advanced Quantum Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Quantum circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="quantumCircuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0,100 L200,100" stroke="#06b6d4" strokeWidth="2" fill="none" />
                <circle cx="50" cy="100" r="20" fill="none" stroke="#06b6d4" strokeWidth="2" />
                <circle cx="150" cy="100" r="15" fill="#06b6d4" opacity="0.3" />
                <path d="M100,50 L100,150" stroke="#8b5cf6" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantumCircuit)" />
          </svg>
        </div>

        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass-morphism border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-teal-400/10 tech-scan"></div>
            <div className="relative flex items-center gap-3">
              <Circuit className="w-4 h-4 animate-pulse" />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold relative z-10">Quantum Innovation Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-glow">
            Featured <span className="text-tech">Quantum Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto glass-morphism p-6 rounded-xl border border-slate-700/50">
            Pioneering research in quantum computing, neuromorphic AI, and next-generation technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative glass-morphism p-8 rounded-3xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Advanced quantum background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Project status badge */}
              <div className="absolute top-6 right-6">
                <div className="glass-morphism border border-green-400/30 text-green-400 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm pulse-glow">
                  {project.status}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-glow`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-teal-400 font-semibold glass-morphism px-2 py-1 rounded-full border border-teal-500/20">
                        {project.category}
                      </span>
                      <span className="text-xs text-purple-400 font-semibold glass-morphism px-2 py-1 rounded-full border border-purple-500/20">
                        {project.techLevel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-2 leading-tight text-glow">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{project.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm glass-morphism p-4 rounded-xl border border-slate-700/30">
                  {project.description}
                </p>

                {/* Advanced quantum metrics display */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 glass-morphism rounded-xl border border-slate-600/50 hover:border-teal-500/30 transition-all duration-300 group/metric">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300"></div>
                      <div className="text-sm font-bold text-teal-400 text-glow relative z-10">{value}</div>
                      <div className="text-xs text-gray-400 capitalize relative z-10">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 glass-morphism rounded-xl border border-slate-600/50 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 tech-scan`}></div>
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <Award className="w-4 h-4 text-green-400 animate-pulse" />
                    <p className="text-green-400 text-sm font-semibold text-glow">Quantum Impact & Results</p>
                  </div>
                  <p className="text-gray-300 text-sm relative z-10">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="glass-morphism text-gray-300 px-3 py-2 rounded-xl text-xs hover:bg-teal-500/20 hover:text-teal-300 hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-teal-500/40 font-medium relative overflow-hidden group/tag"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 translate-x-[-100%] group-hover/tag:translate-x-[100%] transition-transform duration-500 data-flow"></div>
                      <span className="relative z-10">{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Enhanced quantum action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 text-teal-300 py-3 px-4 rounded-xl hover:from-teal-500/30 hover:to-blue-500/30 hover:border-teal-400/50 transition-all duration-300 text-sm font-semibold group/btn pulse-glow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 via-blue-400/5 to-purple-400/5 tech-scan"></div>
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200 relative z-10" />
                    <span className="relative z-10">Quantum Demo</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 glass-morphism border border-slate-600/50 text-gray-300 py-3 px-4 rounded-xl hover:bg-slate-700/80 hover:border-slate-500/50 hover:text-white transition-all duration-300 text-sm font-semibold group/btn">
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                  <button className="flex items-center justify-center gap-2 glass-morphism border border-slate-600/50 text-gray-300 py-3 px-4 rounded-xl hover:bg-slate-700/80 hover:border-slate-500/50 hover:text-white transition-all duration-300 text-sm font-semibold group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced quantum project statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4+", label: "Quantum Projects", color: "text-purple-400", icon: <Atom className="w-6 h-6 animate-spin" /> },
              { value: "97%", label: "AI Precision", color: "text-blue-400", icon: <Brain className="w-6 h-6 animate-pulse" /> },
              { value: "45%", label: "Energy Optimized", color: "text-emerald-400", icon: <Zap className="w-6 h-6" /> },
              { value: "∞", label: "Quantum Reliability", color: "text-teal-400", icon: <Shield className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="p-6 glass-morphism rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tech-scan"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 text-glow`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
