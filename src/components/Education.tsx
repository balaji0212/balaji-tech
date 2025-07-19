
const Education = () => {
  const education = [{
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    institution: "Sri Ramakrishna Engineering College",
    year: "Aug 2021 - May 2025",
    grade: "CGPA: 7/10",
    major: "Major in Electronics and Communication",
    icon: "🎓"
  }];

  return (
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
  );
};

export default Education;
