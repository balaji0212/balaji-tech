const Projects = () => {
  const projects = [{
    title: "Fault Tolerant Matrix Computation on Systolic Arrays",
    date: "Feb 2025 - May 2025",
    description: "Published a research paper proposing a hybrid error detection and correction method combining Light ABFT, Hamming code, and parity codes. Implemented fault-tolerant matrix multiplication in Verilog HDL and validated error resilience using Vivado simulation for AI accelerators, embedded systems, and high-performance computing.",
    tags: ["Verilog HDL", "FPGA", "Fault Tolerance", "Vivado", "AI Accelerators", "Research"],
    impact: "Published research paper on hybrid error detection and correction methods",
    icon: "🛡️",
    color: "from-blue-500 to-indigo-500"
  }, {
    title: "OpenWISP Monitoring: Real-Time Network Health Insights",
    date: "Feb 2025",
    description: "Developed and implemented network monitoring checks (Ping, Iperf3, WiFi Clients) using Python and Django, ensuring real-time network health assessment of devices. Utilized InfluxDB for efficient time-series data storage and retrieval, implementing caching strategies to enhance data access speed and reduce database load. Established alerting systems to notify stakeholders of critical device statuses.",
    tags: ["Python", "Django", "InfluxDB", "Network Monitoring", "Real-time Systems"],
    impact: "Improved response times to network issues and enhanced overall system reliability",
    icon: "📊",
    color: "from-orange-500 to-red-500"
  }, {
    title: "IoT-Based Smart Energy Meter for Energy Efficiency",
    date: "Jun 2023 - Apr 2024",
    description: "Developed an ESP32-based smart energy meter integrated with PIR sensors for occupancy detection, reducing unnecessary power consumption by 30%. Implemented real-time energy monitoring on an I2C LCD and cloud dashboard (Ubidots), with automatic email alerts when consumption exceeds thresholds.",
    tags: ["ESP32", "IoT", "PIR Sensors", "I2C LCD", "Ubidots", "Cloud Integration"],
    impact: "Reduced unnecessary power consumption by 30% with automated monitoring",
    icon: "⚡",
    color: "from-green-500 to-teal-500"
  }, {
    title: "Video Based Emotion Detection Using Deep Learning",
    date: "Jun 2022 - May 2023",
    description: "Built a real-time emotion recognition system using OpenCV and Convolutional Neural Networks (CNN) trained on the FER2013 dataset, achieving 89% classification accuracy. Optimized real-time processing with grayscale conversion and histogram equalization, enabling smooth webcam-based mood detection without external hardware.",
    tags: ["Python", "OpenCV", "CNN", "Deep Learning", "FER2013", "Real-time Processing"],
    impact: "Achieved 89% accuracy in real-time emotion detection with optimized processing",
    icon: "🧠",
    color: "from-purple-500 to-pink-500"
  }];
  return <section id="projects" className="py-20 px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            Portfolio Showcase
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400">
            Research and development in embedded systems, IoT, and AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-xl`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-200 text-left">
                        {project.title}
                      </h3>
                      <span className="text-teal-400 text-sm bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/30">
                        {project.date}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>

                <div className="mb-6 p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <p className="text-green-400 text-sm font-medium">Impact & Results</p>
                  </div>
                  <p className="text-gray-300 text-sm text-center">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="bg-slate-700/50 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-xl text-sm hover:bg-teal-500/20 hover:text-teal-300 hover:scale-105 transition-all duration-200 border border-slate-600/50 hover:border-teal-500/30">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;