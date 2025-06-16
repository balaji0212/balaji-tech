
import { ArrowRight, Download, Phone, Mail, MapPin, Sparkles, Code, Cpu, Database, Zap, Circuit, Brain, Atom } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([]);
  
  const techStack = [
    "Quantum Computing", "Neural Networks", "Edge AI", "Digital Twins", 
    "Neuromorphic Computing", "Autonomous Systems", "Blockchain IoT", "6G Networks"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize particle system
  useEffect(() => {
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight,
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Advanced Quantum-Inspired Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic neural network visualization */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease'
          }}></div>
        </div>
        
        {/* Particle system overlay */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                boxShadow: '0 0 6px rgba(34, 211, 238, 0.8)',
              }}
            />
          ))}
          
          {/* Neural network connections */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {particles.slice(0, 10).map((particle, i) => (
              <g key={i}>
                <circle
                  cx={particle.x}
                  cy={particle.y}
                  r="2"
                  fill="url(#neuralGradient)"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                {i < particles.length - 1 && (
                  <line
                    x1={particle.x}
                    y1={particle.y}
                    x2={particles[i + 1]?.x || 0}
                    y2={particles[i + 1]?.y || 0}
                    stroke="url(#neuralGradient)"
                    strokeWidth="0.5"
                    opacity="0.3"
                    className="data-flow"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
        
        {/* Quantum field effects */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Matrix-style code rain */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-20 matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Enhanced Left Content */}
        <div className="space-y-8">
          {/* Advanced Quantum Status Badge */}
          <div className="inline-flex items-center gap-3 glass-morphism border border-teal-400/30 text-teal-300 px-6 py-3 rounded-full text-sm font-medium shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-purple-400/10 tech-scan"></div>
            <div className="relative flex items-center gap-3">
              <Atom className="w-4 h-4 animate-spin" />
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold text-tech">Quantum State: Active • Neural Networks: Online</span>
          </div>

          {/* Holographic Main Heading */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight hologram">
                <span className="block text-glow">Hi,</span>
                <span className="block">I'm <span className="text-tech">Balaji S</span></span>
              </h1>
              
              {/* Advanced dynamic tech specialization */}
              <div className="flex items-center gap-3 text-xl lg:text-2xl font-semibold min-h-[2rem] relative">
                <Brain size={28} className="text-teal-400 pulse-glow" />
                <span className="text-gray-300">Engineering</span>
                <span className="text-tech font-bold transition-all duration-500 relative">
                  {techStack[currentTech]}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 tech-scan"></div>
                </span>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl glass-morphism p-6 rounded-xl border border-slate-700/50">
              <span className="text-tech font-semibold">Next-generation</span> Electronics & Communication Engineer 
              architecting <span className="text-blue-400 font-semibold">quantum-resistant systems</span>, 
              <span className="text-purple-400 font-semibold"> neuromorphic computing</span>, and 
              <span className="text-green-400 font-semibold"> autonomous AI networks</span> for the metaverse era.
            </p>
          </div>

          {/* Enhanced Quantum Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 justify-center sm:justify-start font-semibold overflow-hidden pulse-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 tech-scan"></div>
              <Circuit size={20} className="group-hover:animate-bounce" />
              Initialize Quantum Link
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group relative glass-morphism border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 justify-center sm:justify-start font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 data-flow"></div>
              <Download size={20} className="group-hover:animate-bounce" /> 
              Neural Profile Data
            </a>
          </div>

          {/* Advanced Quantum Tech Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {[
              { value: "4+", label: "Quantum Projects", color: "text-teal-400" },
              { value: "89%", label: "Neural Accuracy", color: "text-blue-400" },
              { value: "30%", label: "Energy Optimized", color: "text-purple-400" },
              { value: "∞", label: "Processing Power", color: "text-green-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-morphism p-4 rounded-xl border border-slate-700/30 hover:border-teal-400/30 transition-all duration-300 group">
                <div className={`text-2xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300 text-glow`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Quantum Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            <a
              href="tel:+919345355312"
              className="group flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-200 p-4 rounded-xl glass-morphism border border-slate-700/30 hover:border-teal-400/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tech-scan"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-teal-400/20 pulse-glow">
                <Phone size={20} />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 font-medium">Quantum Channel</p>
                <p className="font-semibold">+91 93453 55312</p>
              </div>
            </a>
            <a
              href="mailto:balaji022212@gmail.com"
              className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-200 p-4 rounded-xl glass-morphism border border-slate-700/30 hover:border-blue-400/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 data-flow"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-blue-400/20 pulse-glow">
                <Mail size={20} />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 font-medium">Neural Network</p>
                <p className="font-semibold">balaji022212@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Quantum Profile Section */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Advanced Quantum Profile Container */}
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Multi-dimensional quantum borders */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-spin-slow p-1 pulse-glow">
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 animate-spin-slow p-1" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
                <div className="w-full h-full rounded-full bg-slate-900/50 backdrop-blur-sm"></div>
              </div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 animate-spin-slow p-1" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-slate-900/30 backdrop-blur-sm"></div>
              </div>
              
              {/* Holographic Profile Picture Container */}
              <div className="absolute inset-4 rounded-full glass-morphism-dark flex items-center justify-center border border-slate-700/50 backdrop-blur-sm overflow-hidden shadow-2xl hologram">
                <img 
                  src="/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png" 
                  alt="Balaji S - Quantum Computing Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-purple-400/20 rounded-full"></div>
              </div>
            </div>

            {/* Advanced Floating Quantum Tech Icons */}
            <div className="absolute -top-8 -right-8 w-16 h-16 glass-morphism bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-2xl border border-teal-400/30 flex items-center justify-center animate-float shadow-lg pulse-glow">
              <Atom className="text-teal-400 text-2xl animate-spin" />
            </div>
            <div className="absolute -bottom-4 -left-8 w-14 h-14 glass-morphism bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-xl border border-purple-400/30 flex items-center justify-center animate-float delay-1000 shadow-lg">
              <Brain className="text-purple-400 text-xl animate-pulse" />
            </div>
            <div className="absolute top-1/2 -right-12 w-12 h-12 glass-morphism bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-lg border border-blue-400/30 flex items-center justify-center animate-float delay-500 shadow-lg">
              <Circuit className="text-blue-400 text-lg" />
            </div>
            <div className="absolute top-1/4 -left-6 w-10 h-10 glass-morphism bg-gradient-to-br from-emerald-400/30 to-green-500/30 rounded-lg border border-emerald-400/30 flex items-center justify-center animate-float delay-700 shadow-lg">
              <Cpu className="text-emerald-400 text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quantum Location Badge */}
      <div className="absolute top-32 right-8 hidden xl:block">
        <div className="glass-morphism-dark text-white p-6 rounded-2xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-blue-400/5 to-purple-400/5 tech-scan"></div>
          <div className="flex items-center gap-2 mb-3 relative z-10">
            <MapPin size={18} className="text-teal-400 animate-pulse" />
            <p className="text-sm text-gray-400 font-medium">Quantum Hub</p>
          </div>
          <p className="font-bold text-xl mb-1 text-glow">Coimbatore</p>
          <p className="text-sm text-gray-300 mb-3">Tamil Nadu, India</p>
          <div className="space-y-2 relative z-10">
            <div className="px-3 py-1.5 glass-morphism rounded-full border border-teal-500/30">
              <p className="text-xs text-teal-300 font-medium">🧠 Neural Networks</p>
            </div>
            <div className="px-3 py-1.5 glass-morphism rounded-full border border-blue-500/30">
              <p className="text-xs text-blue-300 font-medium">⚛️ Quantum Systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Quantum Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 glass-morphism border-2 border-teal-400/60 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse pulse-glow"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-teal-400/20 data-flow"></div>
          </div>
          <p className="text-xs text-gray-400 font-medium text-glow">Explore Quantum Portfolio</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
