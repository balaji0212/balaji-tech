
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Languages from "@/components/Languages";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Education />
      <Projects />
      <Interests />
      <Languages />
      <Certifications />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
