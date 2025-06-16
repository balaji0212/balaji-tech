
import { ArrowRight, Download, Phone, Mail, MapPin, Sparkles, Code, Cpu, Database, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const techStack = [
    "IoT Systems", "Embedded Design", "AI/ML", "FPGA Development", 
    "Real-time Processing", "Edge Computing", "Computer Vision", "Hardware Design"
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic grid background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease'
          }}></div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Tech circuit lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M200,800 Q400,700 600,800 T1000,800" stroke="url(#techGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000" />
            <circle cx="300" cy="200" r="4" fill="#06b6d4" className="animate-ping" />
            <circle cx="700" cy="800" r="4" fill="#3b82f6" className="animate-ping delay-500" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Enhanced Left Content */}
        <div className="space-y-8">
          {/* Advanced Status Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 text-teal-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md shadow-lg">
            <div className="relative">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold">Currently Available • Open to Innovation</span>
          </div>

          {/* Dynamic Main Heading */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                <span className="block">Hi,</span>
                <span className="block">I'm <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Balaji S</span></span>
              </h1>
              
              {/* Dynamic tech specialization */}
              <div className="flex items-center gap-3 text-xl lg:text-2xl font-semibold min-h-[2rem]">
                <Sparkles size={28} className="text-teal-400 animate-pulse" />
                <span className="text-gray-300">Specializing in</span>
                <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text font-bold transition-all duration-500">
                  {techStack[currentTech]}
                </span>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              <span className="text-teal-400 font-semibold">Next-generation</span> Electronics & Communication Engineer 
              architecting <span className="text-blue-400 font-semibold">intelligent embedded systems</span>, 
              <span className="text-purple-400 font-semibold"> fault-tolerant computing</span>, and 
              <span className="text-green-400 font-semibold"> AI-driven IoT solutions</span> for tomorrow's challenges.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 justify-center sm:justify-start font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Zap size={20} className="group-hover:animate-bounce" />
              Let's Innovate Together 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group relative border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 justify-center sm:justify-start font-semibold backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={20} className="group-hover:animate-bounce" /> 
              Download Resume
            </a>
          </div>

          {/* Advanced Tech Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">4+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">89%</div>
              <div className="text-sm text-gray-400">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">30%</div>
              <div className="text-sm text-gray-400">Energy Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-gray-400">IoT Monitoring</div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            <a
              href="tel:+919345355312"
              className="group flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-200 p-4 rounded-xl hover:bg-slate-800/50 border border-slate-700/30 hover:border-teal-400/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-teal-400/20">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Direct Contact</p>
                <p className="font-semibold">+91 93453 55312</p>
              </div>
            </a>
            <a
              href="mailto:balaji022212@gmail.com"
              className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-200 p-4 rounded-xl hover:bg-slate-800/50 border border-slate-700/30 hover:border-blue-400/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-blue-400/20">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Email Direct</p>
                <p className="font-semibold">balaji022212@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Right Content - Profile Section */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Advanced Profile Container */}
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Multi-layer animated borders */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </div>
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-teal-400 animate-spin-slow p-1" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
                <div className="w-full h-full rounded-full bg-slate-900/50 backdrop-blur-sm"></div>
              </div>
              
              {/* Profile Picture Container */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50 backdrop-blur-sm overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png" 
                  alt="Balaji S - Electronics & Communication Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Advanced Floating Tech Icons */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-2xl backdrop-blur-md border border-teal-400/30 flex items-center justify-center animate-float shadow-lg">
              <Cpu className="text-teal-400 text-2xl" />
            </div>
            <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-xl backdrop-blur-md border border-purple-400/30 flex items-center justify-center animate-float delay-1000 shadow-lg">
              <Database className="text-purple-400 text-xl" />
            </div>
            <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-lg backdrop-blur-md border border-blue-400/30 flex items-center justify-center animate-float delay-500 shadow-lg">
              <Code className="text-blue-400 text-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Location Badge with Tech Info */}
      <div className="absolute top-32 right-8 hidden xl:block">
        <div className="bg-slate-800/90 backdrop-blur-xl text-white p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-teal-400" />
            <p className="text-sm text-gray-400 font-medium">Innovation Hub</p>
          </div>
          <p className="font-bold text-xl mb-1">Coimbatore</p>
          <p className="text-sm text-gray-300 mb-3">Tamil Nadu, India</p>
          <div className="space-y-2">
            <div className="px-3 py-1.5 bg-teal-500/20 rounded-full border border-teal-500/30">
              <p className="text-xs text-teal-300 font-medium">🚀 IoT Systems Expert</p>
            </div>
            <div className="px-3 py-1.5 bg-blue-500/20 rounded-full border border-blue-500/30">
              <p className="text-xs text-blue-300 font-medium">⚡ Embedded Design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-400/60 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-teal-400/20"></div>
          </div>
          <p className="text-xs text-gray-400 font-medium">Explore Portfolio</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
