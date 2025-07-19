
import { useState } from "react";
import { ExternalLink, Github, Play, Award } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [{
    title: "Fault Tolerant Matrix Computation on Systolic Arrays",
    date: "Feb 2025 - May 2025",
    status: "Current Project",
    description: "Designed a matrix multiplier with integrated fault-tolerance using Hamming code and ABFT in Vivado. Tailored for AI workload simulations with error resilience and real-time data integrity.",
    tags: ["Verilog HDL", "FPGA", "Fault Tolerance", "Vivado", "AI Workloads", "ABFT"],
    impact: "Enhanced AI workload reliability with fault-tolerant computing",
    metrics: { reliability: "99.9%", performance: "Real-time", integration: "Vivado" },
    icon: "🛡️",
    color: "from-blue-500 to-indigo-500",
    category: "Research & Development"
  }, {
    title: "OpenWISP Monitoring: Real-Time Network Health Insights",
    date: "Dec 2023 - Jan 2024",
    status: "Completed",
    description: "Created a web-based network diagnostics tool with real-time visualization of Wi-Fi performance metrics. Automated data logging and visual alerts.",
    tags: ["Python", "Django", "Network Monitoring", "Real-time", "Web Development"],
    impact: "Improved network diagnostics with real-time monitoring and alerts",
    metrics: { uptime: "Real-time", diagnostics: "Automated", alerts: "Visual" },
    icon: "📊",
    color: "from-orange-500 to-red-500",
    category: "Network Engineering"
  }, {
    title: "IoT-Based Smart Energy Meter for Energy Efficiency",
    date: "Jun 2023 - Apr 2024",
    status: "Deployed",
    description: "Developed a real-time power monitoring system using PIR for motion sensing and cloud-based dashboards for visualization. Integrated email alerts for usage anomalies.",
    tags: ["ESP32", "IoT", "PIR Sensors", "Cloud Dashboards", "Email Alerts"],
    impact: "Enhanced energy efficiency with automated monitoring and alerts",
    metrics: { monitoring: "Real-time", sensing: "PIR", alerts: "Email" },
    icon: "⚡",
    color: "from-green-500 to-teal-500",
    category: "IoT & Embedded"
  }, {
    title: "Video Based Emotion Detection Using Deep Learning",
    date: "Jun 2022 - May 2023",
    status: "Completed",
    description: "Built a real-time facial emotion classifier using CNN trained on FER2013. Integrated OpenCV for live camera feed analysis. Achieved 89% validation accuracy. Involved in data preprocessing, feature extraction, and real-time model inference.",
    tags: ["Python", "OpenCV", "CNN", "TensorFlow", "FER2013", "Deep Learning"],
    impact: "Achieved 89% accuracy in real-time emotion detection",
    metrics: { accuracy: "89%", processing: "Real-time", dataset: "FER2013" },
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    category: "AI & Machine Learning"
  }];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float delay-500"></div>
        
        {/* Tech circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 L50,50 L50,0 L100,0" stroke="#06b6d4" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="2" fill="#06b6d4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md mb-8">
            <div className="relative">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold">Innovation Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced research and development in embedded systems, IoT, and AI applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Advanced background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Project status badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-green-500/20 border border-green-400/30 text-green-400 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  {project.status}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-teal-400 font-semibold bg-teal-500/10 px-2 py-1 rounded-full border border-teal-500/20">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{project.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                {/* Advanced metrics display */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-teal-500/30 transition-all duration-300">
                      <div className="text-sm font-bold text-teal-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 bg-slate-700/40 rounded-xl border border-slate-600/50 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <Award className="w-4 h-4 text-green-400" />
                    <p className="text-green-400 text-sm font-semibold">Impact & Results</p>
                  </div>
                  <p className="text-gray-300 text-sm relative z-10">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-slate-700/60 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-xl text-xs hover:bg-teal-500/20 hover:text-teal-300 hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-teal-500/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 text-teal-300 py-3 px-4 rounded-xl hover:from-teal-500/30 hover:to-blue-500/30 hover:border-teal-400/50 transition-all duration-300 text-sm font-semibold group/btn">
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                    View Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-slate-700/60 border border-slate-600/50 text-gray-300 py-3 px-4 rounded-xl hover:bg-slate-700/80 hover:border-slate-500/50 hover:text-white transition-all duration-300 text-sm font-semibold group/btn">
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-slate-700/60 border border-slate-600/50 text-gray-300 py-3 px-4 rounded-xl hover:bg-slate-700/80 hover:border-slate-500/50 hover:text-white transition-all duration-300 text-sm font-semibold group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced project statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4+", label: "Major Projects", color: "text-blue-400" },
              { value: "89%", label: "AI Model Accuracy", color: "text-green-400" },
              { value: "Real-time", label: "Processing", color: "text-teal-400" },
              { value: "99.9%", label: "System Reliability", color: "text-purple-400" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 group">
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
