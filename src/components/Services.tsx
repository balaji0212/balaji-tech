const Services = () => {
  const services = [{
    title: "Embedded Systems Development",
    description: "Custom embedded solutions using microcontrollers, sensors, and real-time programming for various applications.",
    icon: "🔧",
    features: ["Microcontroller Programming", "Sensor Integration", "Real-time Systems", "Hardware Design"],
    color: "from-blue-500 to-cyan-500"
  }, {
    title: "IoT-Based Automation",
    description: "Smart automation systems for homes and industries with cloud connectivity and remote monitoring capabilities.",
    icon: "🌐",
    features: ["Smart Home Solutions", "Industrial Automation", "Cloud Integration", "Remote Monitoring"],
    color: "from-green-500 to-teal-500"
  }, {
    title: "Backend Development & Web Integration",
    description: "Robust backend systems and web applications with database management and API development.",
    icon: "💻",
    features: ["Django Applications", "Database Design", "API Development", "System Integration"],
    color: "from-purple-500 to-pink-500"
  }, {
    title: "AI & Computer Vision Solutions",
    description: "Machine learning and computer vision applications for real-time analysis and intelligent decision making.",
    icon: "🤖",
    features: ["Image Processing", "Pattern Recognition", "Real-time Analysis", "Deep Learning Models"],
    color: "from-orange-500 to-red-500"
  }, {
    title: "Fault-Tolerant System Design",
    description: "Reliable system architectures that maintain functionality even in the presence of component failures.",
    icon: "🛡️",
    features: ["Redundancy Design", "Error Detection", "System Recovery", "Reliability Engineering"],
    color: "from-indigo-500 to-purple-500"
  }];
  return <section id="services" className="py-20 px-4 bg-slate-800/30 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            What I Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Comprehensive solutions for your embedded systems and IoT needs
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 font-semibold">
            Request a Consultation
            <span className="text-lg">💬</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-teal-400 mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-teal-400 rounded"></div>
                    Key Features
                  </h4>
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-400 hover:text-teal-300 transition-colors duration-200">
                      <div className="w-2 h-2 bg-teal-400 rounded-full opacity-60"></div>
                      {feature}
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;