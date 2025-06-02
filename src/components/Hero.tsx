
import { ArrowRight, Download, Phone, Mail, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            Available for Projects
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                Hi,
                <br />
                I'm <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Balaji S</span>
              </h1>
              <div className="flex items-center gap-2 text-xl lg:text-2xl text-teal-400 font-semibold">
                <Sparkles size={24} className="animate-pulse" />
                Electronics & Communication Engineer
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Electronics and Communication Engineering graduate passionate about{" "}
              <span className="text-teal-400 font-medium">embedded systems</span>,{" "}
              <span className="text-blue-400 font-medium">IoT</span>, and{" "}
              <span className="text-purple-400 font-medium">hardware–software co-design</span>. 
              Specialized in intelligent, fault-tolerant systems.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 justify-center sm:justify-start font-semibold"
            >
              Let's Work Together 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 justify-center sm:justify-start font-semibold backdrop-blur-sm"
            >
              <Download size={20} className="group-hover:animate-bounce" /> 
              Download Resume
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            <a
              href="tel:+919345355312"
              className="group flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-200 p-3 rounded-lg hover:bg-slate-800/50"
            >
              <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call me</p>
                <p className="font-medium">+91 93453 55312</p>
              </div>
            </a>
            <a
              href="mailto:balaji022212@gmail.com"
              className="group flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-all duration-200 p-3 rounded-lg hover:bg-slate-800/50"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email me</p>
                <p className="font-medium">balaji022212@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Content - Enhanced Profile Section */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Main Profile Container */}
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </div>
              
              {/* Profile Picture Container */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png" 
                  alt="Balaji S - Electronics & Communication Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-teal-400/20 flex items-center justify-center animate-float">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-purple-400/20 flex items-center justify-center animate-float delay-1000">
              <span className="text-xl">🚀</span>
            </div>
            <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-lg backdrop-blur-sm border border-blue-400/20 flex items-center justify-center animate-float delay-500">
              <span className="text-lg">💡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Location Badge */}
      <div className="absolute top-32 right-8 hidden xl:block">
        <div className="bg-slate-800/80 backdrop-blur-xl text-white p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-teal-400" />
            <p className="text-sm text-gray-400 font-medium">Based in</p>
          </div>
          <p className="font-bold text-lg">Coimbatore</p>
          <p className="text-sm text-gray-300">Tamil Nadu, India</p>
          <div className="mt-3 px-3 py-1 bg-teal-500/10 rounded-full border border-teal-500/20">
            <p className="text-xs text-teal-400 font-medium">Embedded Systems Expert</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
