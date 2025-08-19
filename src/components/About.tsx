
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Expertise in Verilog HDL, embedded systems, and fault-tolerant digital design with proven project delivery."
    },
    {
      icon: Zap,
      title: "Innovation Focus", 
      description: "Developed AI-driven computer vision applications and smart energy solutions using cutting-edge IoT technologies."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Successfully completed 15+ projects including FPGA implementations and embedded system designs."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong communication skills with experience in cross-functional teams and technical documentation."
    }
  ];

  const coreCompetencies = [
    "Digital System Design",
    "FPGA Development", 
    "Embedded Programming",
    "IoT Solutions",
    "Hardware-Software Integration",
    "Signal Processing",
    "Computer Vision",
    "Problem Solving"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-2 text-sm font-medium mb-6">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-primary">Profile</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated Electronics and Communication Engineering graduate with a passion for innovation in 
            digital systems, embedded technologies, and IoT solutions. Ready to contribute expertise to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Professional Summary */}
          <div className="space-y-8">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Recent Electronics and Communication Engineering graduate with hands-on experience in 
                  digital system design and embedded programming. Proven track record of delivering 
                  innovative solutions in FPGA development, IoT applications, and computer vision systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking opportunities to apply technical expertise in a challenging engineering role 
                  where I can contribute to cutting-edge projects while continuing to grow professionally 
                  in the rapidly evolving technology landscape.
                </p>
              </CardContent>
            </Card>

            {/* Core Competencies */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-secondary/20 text-secondary hover:bg-secondary/30 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h3>
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
