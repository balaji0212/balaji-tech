
const About = () => {
  const education = [{
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    institution: "Sri Ramakrishna Engineering College",
    year: "Aug 2021 - May 2025",
    grade: "GPA: 7/10",
    major: "Major in Electronics and Communication",
    icon: "🎓"
  }, {
    degree: "Higher Secondary School Certificate",
    institution: "Vallalar Matriculation Higher Secondary School",
    year: "Jun 2020 - Apr 2021",
    grade: "87.83%",
    major: "Major in Physics, Chemistry, Mathematics, Biology",
    icon: "📚"
  }, {
    degree: "Secondary School Leaving Certificate",
    institution: "Vallalar Matriculation Higher Secondary School",
    year: "Jun 2018 - Apr 2019",
    grade: "86.8%",
    major: "Major in Tamil, English, Mathematics, Science, Social Science",
    icon: "📝"
  }];

  const certifications = [
    "Python Programming",
    "Backend Web Development (MySQL, PHP)",
    "PLC Design"
  ];

  const languages = [
    { language: "English", level: "Professional" },
    { language: "Tamil", level: "Native" }
  ];

  const interests = ["Artificial Intelligence", "Deep Learning", "Computer Vision", "IoT-Based Automation", "Smart Energy Systems", "Hardware–Software Integration", "Real-Time AI Applications"];

  return (
    <>
      {/* About Me Section */}
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

      {/* My Journey Section */}
      <section id="journey" className="py-20 px-4 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h2>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            </div>
            <p className="leading-relaxed mb-6 text-gray-300 text-justify">My fascination with technology began early, sparked by a curiosity for how things work. This led me to pursue Electronics and Communication Engineering, where I discovered my passion for embedded systems and hardware design. I thrived on turning theoretical concepts into real-world applications, from IoT devices to fault-tolerant computing architectures.</p>
            <p className="text-gray-300 leading-relaxed text-base text-justify">As I deepened my knowledge, I ventured into AI and machine learning, developing systems like real-time emotion recognition using deep learning. Each project taught me the power of interdisciplinary thinking—blending hardware efficiency with software intelligence. Today, I stand at the intersection of innovation and practicality, driven by challenges that demand creative problem-solving.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="group bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl mt-1">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-200">
                        {edu.degree}
                      </h4>
                      <p className="text-teal-400 mb-2 font-medium">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-2">{edu.major}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{edu.year}</span>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Interests Section */}
      <section id="interests" className="py-20 px-4 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Key <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Interests</span>
            </h2>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Key Interests</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span key={index} className="group bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 px-4 py-2 rounded-xl text-sm border border-teal-500/30 hover:from-teal-500/30 hover:to-blue-500/30 hover:scale-105 transition-all duration-200 backdrop-blur-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Languages</span>
            </h2>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🗣️</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Languages</h4>
            </div>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center bg-slate-700/30 p-3 rounded-xl">
                  <span className="text-gray-300">{lang.language}</span>
                  <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm border border-teal-500/30">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🏆</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Certifications</h4>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-700/30 p-3 rounded-xl border border-slate-600/50 hover:border-orange-500/30 transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
