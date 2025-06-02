
import { ArrowRight, Download, Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Hi,
              <br />
              I'm <span className="text-teal-400">Balaji S</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">Electronics & Communication Engineer</p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Electronics and Communication Engineering graduate passionate about embedded systems, IoT, and hardware–software co-design. Specialized in intelligent, fault-tolerant systems using Verilog HDL, Python, and ESP32 microcontrollers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 justify-center sm:justify-start"
            >
              Hire Me <ArrowRight size={20} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 justify-center sm:justify-start"
            >
              <Download size={20} /> Download CV
            </a>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="tel:+919345355312"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Phone size={20} />
              +91 93453 55312
            </a>
            <a
              href="mailto:balaji022212@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Mail size={20} />
              balaji022212@gmail.com
            </a>
          </div>
        </div>

        {/* Right Content - Profile Picture */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                {/* Placeholder for profile picture */}
                <div className="text-6xl text-gray-400">👨‍💻</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Location Badge */}
      <div className="absolute top-32 right-8 hidden lg:block">
        <div className="bg-slate-800/80 backdrop-blur-sm text-white p-4 rounded-xl border border-slate-700">
          <p className="text-sm text-gray-400">Based in</p>
          <p className="font-semibold">Coimbatore, Tamil Nadu</p>
          <p className="text-sm text-teal-400">Embedded Systems Expert</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
