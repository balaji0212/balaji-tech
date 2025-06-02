
const About = () => {
  const education = [
    {
      degree: "B.E. in Electronics and Communication Engineering",
      institution: "Sri Ramakrishna Engineering College",
      year: "2021–2025",
      grade: "GPA: 7/10"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Vallalar MHSS",
      year: "2020–2021",
      grade: "87.83%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Vallalar MHSS",
      year: "2018–2019",
      grade: "86.8%"
    }
  ];

  const interests = ["AI", "Embedded Systems", "Smart Energy", "Real-Time Vision"];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating intelligent systems that bridge the gap between hardware and software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As an Electronics and Communication Engineering graduate, I'm deeply passionate about the intersection of hardware and software. My expertise lies in developing embedded systems, IoT automation solutions, and implementing real-time AI applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in creating fault-tolerant systems using cutting-edge technologies like Verilog HDL, Python, and ESP32 microcontrollers. My goal is to develop intelligent systems that can make a meaningful impact in the real world.
              </p>
            </div>

            {/* Key Interests */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm border border-teal-500/30"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-teal-400 mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{edu.year}</span>
                    <span className="text-green-400 font-medium">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
