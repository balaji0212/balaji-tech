import { useState } from "react";
import { ExternalLink, Github, Play, Award, Atom, Brain, Microchip, Zap, Database, Globe, Sparkles, Code, Cpu, Settings, Wrench, Monitor, Shield, Smartphone } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Quantum Neural Processor",
      category: "Quantum Computing",
      description: "Revolutionary quantum-classical hybrid processor implementing quantum error correction with 99.9% fidelity for neural network acceleration.",
      image: "/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png",
      technologies: ["Quantum Circuits", "Neural Networks", "CUDA", "Python"],
      github: "https://github.com/balaji",
      demo: "https://demo.com",
      status: "Active Research",
      impact: "300x speedup in AI training",
      complexity: "Cutting-Edge",
      icon: <Atom className="w-8 h-8 animate-spin" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Neuromorphic Edge AI Chip",
      category: "Neuromorphic Computing",
      description: "Ultra-low power neuromorphic processor mimicking brain synapses for real-time AI inference at 1mW power consumption.",
      image: "/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png",
      technologies: ["Neuromorphic Design", "Spiking Networks", "ASIC", "TinyML"],
      github: "https://github.com/balaji",
      demo: "https://demo.com",
      status: "Prototype Ready",
      impact: "1000x power efficiency",
      complexity: "Revolutionary",
      icon: <Brain className="w-8 h-8 animate-pulse" />,
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "6G Quantum Network",
      category: "Advanced Communications",
      description: "Next-generation 6G network with quantum key distribution, enabling unhackable communications with 10Tbps throughput.",
      image: "/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png",
      technologies: ["6G Protocols", "Quantum Cryptography", "mmWave", "Beamforming"],
      github: "https://github.com/balaji",
      demo: "https://demo.com",
      status: "Field Testing",
      impact: "Quantum-safe communications",
      complexity: "Future-Ready",
      icon: <Microchip className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Autonomous IoT Ecosystem",
      category: "Autonomous Systems",
      description: "Self-healing IoT network with AI-driven resource optimization and autonomous decision-making capabilities.",
      image: "/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png",
      technologies: ["Edge AI", "LoRaWAN", "Digital Twins", "Blockchain"],
      github: "https://github.com/balaji",
      demo: "https://demo.com",
      status: "Production",
      impact: "90% maintenance reduction",
      complexity: "Advanced",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Metaverse Digital Twin",
      category: "Extended Reality",
      description: "Real-time digital twin platform for metaverse applications with photorealistic rendering and physics simulation.",
      image: "/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png",
      technologies: ["Unity", "AR/VR", "Real-time Rendering", "WebXR"],
      github: "https://github.com/balaji",
      demo: "https://demo.com",
      status: "Beta Release",
      impact: "Immersive digital experiences",
      complexity: "Experimental",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Quantum Blockchain Security",
      category: "Cryptography",
      description: "Post-quantum cryptographic blockchain with quantum-resistant signatures and zero-knowledge proof verification.",
      image: "/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png",
      technologies: ["Post-Quantum Crypto", "Blockchain", "Zero-Knowledge", "Rust"],
      github: "https://github.com/balaji",
      demo: "https://demo.com",
      status: "Research Phase",
      impact: "Quantum-proof security",
      complexity: "Quantum-Safe",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50 relative overflow-hidden">
      {/* Advanced Quantum Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Technical grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2306b6d4' stroke-width='1'%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Quantum particle effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
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
              <Sparkles className="w-4 h-4 animate-pulse" />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold relative z-10">Quantum Innovation Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-glow">
            Advanced <span className="text-tech">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto glass-morphism p-6 rounded-xl border border-slate-700/50">
            Pioneering next-generation technologies from quantum computing to neuromorphic systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative glass-morphism rounded-3xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Advanced holographic overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Quantum glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} blur-2xl`}></div>
              </div>
              
              {/* Project image with neural overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                
                {/* Floating tech indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-xl pulse-glow`}>
                    {project.icon}
                  </div>
                </div>
                
                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass-morphism text-xs text-teal-300 px-3 py-1.5 rounded-full border border-teal-500/30 font-medium">
                    {project.status}
                  </span>
                </div>
                
                {/* Complexity level */}
                <div className="absolute bottom-4 left-4">
                  <span className="glass-morphism-dark text-xs text-white px-3 py-1.5 rounded-full border border-white/20 font-medium">
                    {project.complexity}
                  </span>
                </div>
              </div>

              {/* Enhanced project content */}
              <div className="p-6 relative z-10">
                <div className="mb-4">
                  <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-3 text-glow">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Impact indicator */}
                  <div className="glass-morphism text-xs text-green-400 px-3 py-2 rounded-lg border border-green-500/20 mb-4 inline-block">
                    <span className="font-semibold">Impact: </span>{project.impact}
                  </div>
                </div>

                {/* Technology stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass-morphism text-xs text-gray-300 px-3 py-1.5 rounded-full border border-slate-600/50 hover:border-teal-500/40 hover:text-teal-300 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons with quantum effects */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 group/btn relative glass-morphism border border-teal-500/30 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500 px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 data-flow"></div>
                    <Github size={16} className="group-hover/btn:animate-bounce relative z-10" />
                    <span className="relative z-10">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 group/btn relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium overflow-hidden pulse-glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 tech-scan"></div>
                    <Play size={16} className="group-hover/btn:animate-bounce relative z-10" />
                    <span className="relative z-10">Demo</span>
                  </a>
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
