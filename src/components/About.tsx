
const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            Get to know me better
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl text-center">A passionate Electronics and Communication Engineering graduate with expertise in Verilog HDL, embedded systems, and IoT hardware design. Skilled in developing fault tolerant digital systems, AI-driven computer vision applications, and smart energy solutions using ESP32.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
