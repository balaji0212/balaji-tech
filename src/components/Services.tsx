
const Services = () => {
  const services = [
    {
      title: "Embedded Systems Development",
      description: "Custom embedded solutions using microcontrollers, sensors, and real-time programming for various applications.",
      icon: "🔧",
      features: ["Microcontroller Programming", "Sensor Integration", "Real-time Systems", "Hardware Design"]
    },
    {
      title: "IoT-Based Automation",
      description: "Smart automation systems for homes and industries with cloud connectivity and remote monitoring capabilities.",
      icon: "🌐",
      features: ["Smart Home Solutions", "Industrial Automation", "Cloud Integration", "Remote Monitoring"]
    },
    {
      title: "Backend Development & Web Integration",
      description: "Robust backend systems and web applications with database management and API development.",
      icon: "💻",
      features: ["Django Applications", "Database Design", "API Development", "System Integration"]
    },
    {
      title: "AI & Computer Vision Solutions",
      description: "Machine learning and computer vision applications for real-time analysis and intelligent decision making.",
      icon: "🤖",
      features: ["Image Processing", "Pattern Recognition", "Real-time Analysis", "Deep Learning Models"]
    },
    {
      title: "Fault-Tolerant System Design",
      description: "Reliable system architectures that maintain functionality even in the presence of component failures.",
      icon: "🛡️",
      features: ["Redundancy Design", "Error Detection", "System Recovery", "Reliability Engineering"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Comprehensive solutions for your embedded systems and IoT needs
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Request a Consultation
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
