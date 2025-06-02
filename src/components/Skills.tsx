
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Verilog HDL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web & Backend",
      skills: ["PHP", "MySQL", "Django"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Embedded & IoT",
      skills: ["ESP32", "PIR Sensors", "I2C LCD", "Relays"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Machine Learning",
      skills: ["OpenCV", "CNN", "FER2013 dataset"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["Vivado", "Git", "Ubidots", "InfluxDB"],
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "Domain Expertise",
      skills: ["IoT Automation", "Smart Energy", "Network Monitoring", "PLC Design"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400">
            Expertise across multiple domains of engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">
                  {category.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-teal-500/20 hover:text-teal-300 transition-colors duration-200"
                  >
                    {skill}
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

export default Skills;
