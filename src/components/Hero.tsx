import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Linkedin, Github, MapPin, Phone, Calendar } from "lucide-react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const techSpecializations = [
    "Electronics & Communication Engineer",
    "Verilog HDL Developer", 
    "Embedded Systems Designer",
    "IoT Hardware Specialist",
    "Digital Systems Engineer"
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Completed", value: "15+", icon: Github },
    { label: "Technologies", value: "8+", icon: MapPin }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techSpecializations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-20 pb-12 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Professional Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-2 text-sm font-medium">
                Available for Hire
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm <span className="text-primary">Balaji S</span>
                </h1>
                
                <div className="h-16 flex items-center">
                  <p className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                    {techSpecializations[currentTech]}
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Passionate Electronics and Communication Engineering graduate specializing in Verilog HDL, 
                  embedded systems, and IoT hardware design. Expert in developing fault-tolerant digital systems 
                  and AI-driven computer vision applications.
                </p>
              </div>
            </div>

            {/* Professional CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              
              <Button variant="outline" size="lg" className="border-border hover:bg-accent px-8 py-3 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5" />
                <a href="/resume.pdf" download className="no-underline">Download Resume</a>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:balajiselvam2018@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>balajiselvam2018@gmail.com</span>
              </a>
              <a href="tel:+919597765095" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 95977 65095</span>
              </a>
            </div>
          </div>

          {/* Professional Profile Card */}
          <div className="relative">
            <Card className="border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Profile Image */}
                  <div className="relative mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/2dd13a16-ca9b-4703-ba5d-91422e1e0705.png" 
                        alt="Balaji S - Electronics & Communication Engineer"
                        className="w-44 h-44 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Professional Info */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Balaji S</h3>
                    <p className="text-primary font-semibold">Electronics & Communication Engineer</p>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Chennai, Tamil Nadu</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 pt-4">
                    <a href="https://www.linkedin.com/in/balajiselvam2018/" target="_blank" rel="noopener noreferrer" 
                       className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:balajiselvam2018@gmail.com" 
                       className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;