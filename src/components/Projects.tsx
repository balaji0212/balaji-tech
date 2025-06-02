
const Projects = () => {
  const projects = [
    {
      title: "IoT-Based Smart Energy Meter",
      date: "2024",
      description: "Developed an intelligent energy monitoring system using ESP32 microcontrollers and cloud integration for real-time energy consumption tracking and automated billing.",
      tags: ["ESP32", "IoT", "Python", "Cloud Integration"],
      impact: "Reduced manual meter reading by 100% and improved billing accuracy"
    },
    {
      title: "Emotion Detection Using Deep Learning",
      date: "2024",
      description: "Implemented a real-time emotion recognition system using CNN and FER2013 dataset with OpenCV for computer vision applications.",
      tags: ["Python", "OpenCV", "CNN", "Deep Learning"],
      impact: "Achieved 85% accuracy in real-time emotion detection"
    },
    {
      title: "Fault-Tolerant Matrix Computation",
      date: "2023",
      description: "Designed and implemented fault-tolerant algorithms for matrix operations using Verilog HDL, ensuring system reliability in critical applications.",
      tags: ["Verilog HDL", "FPGA", "Fault Tolerance", "Hardware Design"],
      impact: "Improved system reliability by 40% in critical computations"
    },
    {
      title: "OpenWISP Monitoring (Internship)",
      date: "2023",
      description: "Contributed to network monitoring solutions using OpenWISP framework, implementing real-time monitoring dashboards and alert systems.",
      tags: ["Network Monitoring", "Python", "Django", "InfluxDB"],
      impact: "Enhanced network uptime monitoring for 500+ devices"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400">
            Showcase of innovative solutions in embedded systems and IoT
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-teal-400 text-sm bg-teal-500/20 px-2 py-1 rounded">
                  {project.date}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-green-400 text-sm font-medium mb-2">Impact:</p>
                <p className="text-gray-400 text-sm">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-teal-500/20 hover:text-teal-300 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
